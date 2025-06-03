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
        className="mt-3 overflow-hidden rounded-md border shadow-lg dark:border-0 dark:bg-[#182130]"
      >
        <DropdownMenuItem
          onClick={() => theme.setTheme("light")}
          className={`flex-start cursor-pointer gap-2 rounded-t-md py-2 pl-4 pr-8 text-ocean-blue hover:bg-accent hover:outline-0 dark:text-white dark:hover:text-white`}
        >
          <Sun size={18} /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => theme.setTheme("dark")}
          className={`flex-start cursor-pointer gap-2 py-2 pl-4 pr-8 hover:bg-accent hover:outline-0 ${
            theme.theme == "dark" && "text-ocean-blue"
          } dark:hover:!text-white`}
        >
          <Moon size={17} /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => theme.setTheme("system")}
          className={`flex-start cursor-pointer gap-2 py-2 pl-4 pr-8 hover:bg-accent hover:outline-0 ${
            theme.theme == "system" && "text-ocean-blue"
          } rounded-b-md dark:hover:!text-white`}
        >
          <Monitor size={16} /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
