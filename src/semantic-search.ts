import { Asset } from "expo-asset";
import { InferenceSession } from "onnxruntime-react-native";
import { PreTrainedTokenizer } from "@xenova/transformers/src/tokenizers";

import { restaurants } from "@/src/restaurants";
import { globalAverage, zeroTensor } from "./utils";
import { api } from "../convex/_generated/api";

import tConfig from "./tokenizer.json";
import tOptions from "./tokenizer_config.json";
import { convex } from "@/app/_layout";

// Initialize the tokenizer
const tokenizer = new PreTrainedTokenizer(tConfig, tOptions);

// Initialize the Convex client

// Create an embedding function and store restaurant embeddings in Convex
async function buildIndex() {
  // Load up the ONNX embedding model
  const assets = await Asset.loadAsync(require("./Snowflake.onnx"));
  const session = await InferenceSession.create(assets[0].localUri!);

  async function createEmbedding(input: string) {
    // Convert the text into tensors that the model can understand
    const { input_ids, attention_mask } = tokenizer(input);

    // Run the model with the tensors
    const { last_hidden_state } = await session.run({
      input_ids,
      attention_mask,
      token_type_ids: zeroTensor(input_ids.dims),
    });

    // Take the average of the last hidden state to get the embedding
    return globalAverage(last_hidden_state.cpuData, last_hidden_state.dims);
  }

  // Store each restaurant with its embedding in Convex
  for (const r of restaurants) {
    const embedding = await createEmbedding(r.description);

    // Store the restaurant and its embedding in Convex
    await convex.mutation(api.restaurants.store, {
      id: r.id,
      name: r.name,
      description: r.description,
      embedding: embedding,
    });
  }

  return { createEmbedding };
}

const index = buildIndex();

export async function searchRestaurants(q: string, n: number = 5) {
  // Get the embedding function
  const { createEmbedding } = await index;

  // Vectorize the query
  const queryEmbedding = await createEmbedding(q);

  // Search for similar restaurants in Convex
  const results = await convex.query(api.restaurants.search, {
    queryEmbedding,
    limit: n,
  });

  // Return the restaurant objects
  return results.map((result) => ({
    id: result.id || 0,
    name: result.name,
    description: result.description,
  }));
}
