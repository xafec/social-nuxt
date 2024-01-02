import { defineMongooseModel } from "#nuxt/mongoose";

export const Token = defineMongooseModel(
  "Token",
  {
    accessToken: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: false,
    },
    userAgent: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
