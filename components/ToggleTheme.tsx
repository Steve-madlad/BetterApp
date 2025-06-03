"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import React from "react";
import { Monitor, Moon, Sun } from "lucide-react";

export default function ThemeToggleButton() {
  const theme = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full p-1">
        {theme.resolvedTheme == "dark" ? <Moon /> : <Sun />}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="rounded-md border dark:border-0 shadow-lg dark:bg-[#182130] mt-3 overflow-hidden"
      >
        <DropdownMenuItem
          onClick={() => theme.setTheme("light")}
          className={`flex-start pl-4 cursor-pointer gap-2 pr-8 py-2 hover:outline-0 hover:bg-accent text-ocean-blue dark:text-white dark:hover:text-white rounded-t-md`}
        >
          <Sun size={18} /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => theme.setTheme("dark")}
          className={`flex-start pl-4 cursor-pointer gap-2 pr-8 py-2 hover:outline-0 hover:bg-accent ${
            theme.theme == "dark" && "text-ocean-blue"
          } dark:hover:!text-white`}
        >
          <Moon size={17} /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => theme.setTheme("system")}
          className={`flex-start pl-4 cursor-pointer gap-2 pr-8 py-2 hover:outline-0 hover:bg-accent ${
            theme.theme == "system" && "text-ocean-blue"
          } dark:hover:!text-white rounded-b-md`}
        >
          <Monitor size={16} /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
