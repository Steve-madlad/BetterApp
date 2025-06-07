"use client";

import { signOut } from "@/lib/auth-client";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

export default function SignOutBtn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    console.log("here");

    setLoading(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    }).finally(() => setLoading(false));
    await fetch("/api/auth/signout", { method: "POST" }).then(() =>
      router.push("/login"),
    );
  };

  return (
    <Button
      className={`flex-start h-8 w-full gap-2 px-[8px] py-[6px] ${loading ? "cursor-wait text-muted-foreground" : ""}`}
      aria-disabled={loading}
      disabled={loading}
      onClick={handleLogout}
    >
      <IconLogout size={17} />
      Log Out
    </Button>
  );
}
