import { createAuthClient } from "better-auth/react";
export const { signIn, signUp, useSession } = createAuthClient({
  baseURL: "https://fp97qd-3000.csb.app",
});
