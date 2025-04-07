import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  restaurants: defineTable({
    name: v.string(),
    description: v.string(),
    embedding: v.array(v.float64()),
  }),

  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),
});
