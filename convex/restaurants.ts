import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Store a restaurant with its embedding
export const store = mutation({
  args: {
    id: v.number(),
    name: v.string(),
    description: v.string(),
    embedding: v.array(v.float64()),
  },
  handler: async (ctx, args) => {
    // Check if the restaurant already exists
    const existingRestaurants = await ctx.db
      .query("restaurants")
      .filter((q) => q.eq(q.field("name"), args.name))
      .collect();

    // If it exists, update it
    if (existingRestaurants.length > 0) {
      return await ctx.db.patch(existingRestaurants[0]._id, {
        name: args.name,
        description: args.description,
        embedding: args.embedding,
      });
    }

    // Otherwise, insert a new restaurant
    return await ctx.db.insert("restaurants", {
      name: args.name,
      description: args.description,
      embedding: args.embedding,
    });
  },
});

// Search for restaurants by similarity to a query embedding
export const search = query({
  args: {
    queryEmbedding: v.array(v.float64()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit || 5;
    const queryEmbedding = args.queryEmbedding;

    // Get all restaurants
    const restaurants = await ctx.db.query("restaurants").collect();

    // Calculate cosine similarity for each restaurant
    const restaurantsWithScores = restaurants.map((restaurant) => {
      const similarity = cosineSimilarity(queryEmbedding, restaurant.embedding);
      return {
        ...restaurant,
        score: similarity,
      };
    });

    // Sort by similarity score (descending) and take the top results
    return restaurantsWithScores
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  },
});

// Get all restaurants
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("restaurants").collect();
  },
});

// Helper function to calculate cosine similarity between two vectors
function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error("Vectors must have the same length");
  }

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}
