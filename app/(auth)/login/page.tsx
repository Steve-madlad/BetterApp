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
import { useState } from "react";


export default function login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [switchIcon, setSwitchIcon] = useState(false);

  return (
    <div className="flex-grow flex-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="col-center">
          <div className="flex-center rounded-[4px] h-10 w-11 shadow-md dark:bg-white">
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
            Don't have an account?{" "}
            <Link className="underline underline-offset-4" href={"/signup"}>
              Sign up
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="mail@example.com"
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
                    type={passwordVisible ? "text" : "password"}
                    required
                    placeholder="******"
                    className="pr-12"
                  />
                  <Button
                    type="button"
                    className="absolute p-3 bg-transparent shadow-none right-0 top-1/2 -translate-y-1/2"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <Eye /> : <EyeOff />}
                  </Button>
                </div>
                <a
                  href="#"
                  className="ml-auto inline-block underline-offset-4 text-sm hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2 space-y-2">
          <Button type="submit" className="w-full duration-300 bg-ocean-blue text-white">
            Login
          </Button>

          <div className="flex items-center w-full gap-4">
            <Separator className="flex-1" />
            <span className="text-muted-foreground -translate-y-px">Or</span>
            <Separator className="flex-1" />
          </div>

          <div className="submit w-full flex gap-4">
            <Button variant="outline" className="flex-1 group">
              <ImGithub className="group-hover:text-[#3e75c3]" /> Github
            </Button>
            <Button
              variant="outline"
              onMouseEnter={() => setSwitchIcon(true)}
              onMouseLeave={() => setSwitchIcon(false)}
              className="flex-1"
            >
              {switchIcon ? <FcGoogle className="scale-125"/> : <GrGoogle />} Google
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
