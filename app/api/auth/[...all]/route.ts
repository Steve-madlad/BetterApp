import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

console.log("Catch-all route loaded");

export const { GET, POST } = toNextJsHandler(auth);