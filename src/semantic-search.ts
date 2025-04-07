import { Asset } from "expo-asset";
import { InferenceSession } from "onnxruntime-react-native";
//@ts-ignore
import { PreTrainedTokenizer } from "@xenova/transformers/src/tokenizers";

import { restaurants } from "@/src/restaurants";
import { globalAverage, zeroTensor } from "./utils";
import { api } from "../convex/_generated/api";

import tConfig from "./tokenizer.json";
import tOptions from "./tokenizer_config.json";
import { convex } from "@/app/_layout";

const tokenizer = new PreTrainedTokenizer(tConfig, tOptions);

async function buildIndex() {
  const assets = await Asset.loadAsync(require("./Snowflake.onnx"));
  const session = await InferenceSession.create(assets[0].localUri!);

  async function createEmbedding(input: string) {
    const { input_ids, attention_mask } = tokenizer(input);

    const { last_hidden_state } = await session.run({
      input_ids,
      attention_mask,
      token_type_ids: zeroTensor(input_ids.dims),
    });

    return globalAverage(
      (last_hidden_state as any).cpuData,
      last_hidden_state.dims
    );
  }

  for (const r of restaurants) {
    const embedding = await createEmbedding(r.description);

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
  const { createEmbedding } = await index;

  const queryEmbedding = await createEmbedding(q);

  const results = await convex.query(api.restaurants.search, {
    queryEmbedding,
    limit: n,
  });

  return results.map((result) => ({
    id: (result as any).id || 0,
    name: result.name,
    description: result.description,
  }));
}
