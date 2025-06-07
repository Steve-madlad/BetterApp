"use server";

import { APIError } from "better-auth/api";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export async function signup(formdata: FormData) {
  const data = {
    email: formdata.get("email") as string,
    username: formdata.get("username") as string,
    password: formdata.get("password") as string,
  };

  const { email, username, password } = data;

  try {
    await auth.api.signUpEmail({
      body: {
        name: username,
        username,
        email,
        password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      // switch (error.status) {
      //   case "UNPROCESSABLE_ENTITY":
      //     return { errorMessage: "User already exists" };
      //   case "BAD_REQUEST":
      //     return "Invalid email or password";
      //   default:
      //     return "Something went wrong";
      // }
      
      console.log("big fat error:", error);
    }
  }

  redirect("/dashboard")
}
