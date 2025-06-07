"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

const icons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme, theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [displayedTheme, setDisplayedTheme] = useState(resolvedTheme);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"in" | "out">("in");

  const validThemes = ["light", "dark", "system"] as const;
  type ThemeKey = (typeof validThemes)[number];

  const themeKey: ThemeKey = validThemes.includes(displayedTheme as ThemeKey)
    ? (displayedTheme as ThemeKey)
    : "light";

  useEffect(() => {
    if (resolvedTheme !== displayedTheme) {
      setDirection("out");
      setAnimating(true);

      const timeout = setTimeout(() => {
        setDisplayedTheme(resolvedTheme);
        setDirection("in");
        setAnimating(true);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [resolvedTheme, displayedTheme]);

  useEffect(() => {
    if (animating && direction === "in") {
      const timeout = setTimeout(() => setAnimating(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [animating, direction]);

  const Icon = icons[themeKey];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-accent focus:bg-accent"
        aria-label="Toggle theme"
      >
        <span
          className={`inline-block ${
            animating
              ? direction === "out"
                ? "theme-icon-rotate-out"
                : "theme-icon-rotate-in"
              : ""
          } transition-opacity`}
        >
          {mounted && <Icon className="h-5 w-5" />}
        </span>
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={`mt-3 overflow-hidden rounded-md border p-1 shadow-lg ${
          resolvedTheme === "dark" ? "bg-[#262626]" : "bg-white"
        }`}
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex-start cursor-pointer gap-2 rounded-sm py-1 pl-4 pr-8 text-sm hover:bg-accent hover:outline-0 ${
            theme === "light" ? "text-ocean-blue" : ""
          } dark:text-white dark:hover:text-white`}
        >
          <Sun size={18} /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex-start cursor-pointer gap-2 rounded-sm py-1 pl-4 pr-8 text-sm hover:bg-accent hover:outline-0 ${
            theme === "dark" ? "text-ocean-blue" : ""
          } dark:hover:!text-white`}
        >
          <Moon size={16} /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex-start cursor-pointer gap-2 py-1 pl-4 pr-8 text-sm hover:bg-accent hover:outline-0 ${
            theme === "system" ? "text-ocean-blue" : ""
          } rounded-sm dark:hover:!text-white`}
        >
          <Monitor size={14} /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
