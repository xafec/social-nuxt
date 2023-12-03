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
    bio: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
