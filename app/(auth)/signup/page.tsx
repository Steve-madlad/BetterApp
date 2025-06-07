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
import { Eye, EyeOff } from "lucide-react";
import { ImGithub } from "react-icons/im";
import { GrGoogle } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signup } from "@/lib/actions/auth-actions";

export default function login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [switchIcon, setSwitchIcon] = useState(false);

  return (
    <div className="flex-center flex-grow">
      <Card className="dark:bg-card w-full max-w-sm">
        <CardHeader className="col-center">
          <div className="flex-center h-10 w-11 rounded-[4px] shadow-md dark:bg-white">
            <Image
              src="/better-auth-logo-lightpng-removebg-preview.svg"
              alt="logo"
              width={30}
              height={30}
            />
          </div>

          <CardTitle className="text-xl font-bold">
            Welcome To Better App
          </CardTitle>

          <CardDescription>
            Already have an account?{" "}
            <Link className="underline underline-offset-4" href={"/login"}>
              Login
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={signup}>
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
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  className="dark:bg-input"
                  id="username"
                  name="username"
                  type="username"
                  placeholder="user123"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    required
                    placeholder="******"
                    className="dark:bg-input pr-12"
                  />
                  <Button
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-transparent p-3 shadow-none"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="mt-6 w-full bg-ocean-blue text-white duration-300"
            >
              Sign Up
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
            <Button variant="outline" className="dark:bg-input group flex-1">
              <ImGithub className="group-hover:text-[#3e75c3]" /> Github
            </Button>
            <Button
              variant="outline"
              onMouseEnter={() => setSwitchIcon(true)}
              onMouseLeave={() => setSwitchIcon(false)}
              className="dark:bg-input flex-1"
            >
              {switchIcon ? <FcGoogle className="scale-[1.15]"/> : <GrGoogle />}
              Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
