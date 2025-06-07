"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Github } from "lucide-react";
import { GrGoogle } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { signin } from "@/lib/actions/auth-actions";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [switchIcon, setSwitchIcon] = useState(false);
  const initialState = {
    errorMessage: "",
    values: { email: "", password: "" },
  };
  const [state, formAction, loading] = useActionState(signin, initialState);

  useEffect(() => {
    if (state.errorMessage) {
      toast.error(state.errorMessage);
    }
  }, [state]);

  return (
    <div className="flex-center flex-grow">
      <Card className={`w-full max-w-sm dark:bg-card`}>
        <CardHeader className="col-center">
          <div className="flex-center h-10 w-11 rounded-[4px] bg-white shadow-md">
            <Image
              src="/better-auth-logo-lightpng-removebg-preview.svg"
              alt="logo"
              width={30}
              height={30}
            />
          </div>

          <CardTitle className="text-xl font-bold">
            Welcome Back To Better App
          </CardTitle>

          <CardDescription>
            Don't have an account?{" "}
            <Link className="underline underline-offset-4" href={"/signup"}>
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="dark:bg-input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="mail@example.com"
                  required
                  defaultValue={state.values.email}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    className="pr-12 dark:bg-input"
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="******"
                    required
                    defaultValue={state.values.password}
                  />
                  <Button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-3 shadow-none"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <Button
              aria-disabled={loading}
              disabled={loading}
              type="submit"
              className={`mt-6 flex w-full gap-2 bg-ocean-blue text-white duration-300 ${loading && "brightness-75"}`}
            >
              Sign In
              <Spinner size="small" show={loading} />
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2 space-y-2">
          <div className="flex w-full items-center gap-4">
            <Separator className="flex-1" />
            <span className="-translate-y-px text-muted-foreground">Or</span>
            <Separator className="flex-1" />
          </div>

          <div className="submit flex w-full gap-4">
            <Button
              aria-disabled={loading}
              disabled={loading}
              variant="outline"
              className={`group flex-1 dark:bg-input ${loading && "cursor-wait bg-muted"}`}
            >
              <ImGithub className="group-hover:text-[#3e75c3]" /> Github
            </Button>
            <Button
              aria-disabled={loading}
              disabled={loading}
              variant="outline"
              onMouseEnter={() => setSwitchIcon(true)}
              onMouseLeave={() => setSwitchIcon(false)}
              className={`flex-1 dark:bg-input ${loading && "cursor-wait bg-muted"}`}
            >
              {switchIcon ? (
                <FcGoogle className="scale-[1.15]" />
              ) : (
                <GrGoogle />
              )}
              Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
