"use server";

import { APIError } from "better-auth/api";
import { auth } from "../auth";
import { redirect } from "next/navigation";

type State = {
  errorMessage?: string | null;
  values?: {
    email?: string;
    username?: string;
    password?: string;
  };
};

export async function signup(state: State, formdata: FormData) {
  const data = {
    email: formdata.get("email") as string,
    username: formdata.get("username") as string,
    password: formdata.get("password") as string,
  };

  const { email, username, password } = data;

  console.log("state", state);
  console.log("data", data);

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
      console.log("error", error);
      console.log("actual error", error.body);
      return {
        errorMessage: error.body?.message,
        values: { email, username, password },
      };
      // switch (error.status) {
      //   case "UNPROCESSABLE_ENTITY":
      //     return {
      //       errorMessage: "User already exists",
      //       values: { email, username },
      //     };
      //   case "BAD_REQUEST":
      //     return {
      //       errorMessage: "Invalid email or password",
      //       values: { email, username },
      //     };
      //   default:
      //     return {
      //       errorMessage: "Something went wrong",
      //       values: { email, username },
      //     };
      // }
    }
  }

  redirect("/dashboard");
}

export async function signin(state: State, formdata: FormData) {
  const data = {
    email: formdata.get("email") as string,
    password: formdata.get("password") as string,
  };

  const { email, password } = data;

  console.log("state", state);
  console.log("data", data);

  try {
    const response = await auth.api.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });

    console.log("Sign-in response headers:", response);
  } catch (error) {
    if (error instanceof APIError) {
      console.log("error", error);
      console.log("actual error", error.body);
      return { errorMessage: error.body?.message, values: { email, password } };
      // switch (error.status) {
      //   case "UNPROCESSABLE_ENTITY":
      //     return {
      //       errorMessage: "User already exists",
      //       values: { email, username },
      //     };
      //   case "BAD_REQUEST":
      //     return {
      //       errorMessage: "Invalid email or password",
      //       values: { email, username },
      //     };
      //   default:
      //     return {
      //       errorMessage: "Something went wrong",
      //       values: { email, username },
      //     };
      // }
    }
  }

  redirect("/dashboard");
}
