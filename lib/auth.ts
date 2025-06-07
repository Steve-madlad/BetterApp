import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./prisma";
import { username } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const  auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: true,
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    username(),
    nextCookies(),
  ]
});
