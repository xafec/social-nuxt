import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel(
  "User",
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    avatarUrl: {
      type: String,
      required: false,
    },
    bannerUrl: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    role: {
      enum: ["user", "mod"],
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
