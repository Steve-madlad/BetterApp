"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
        <Sun />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="rounded-md light:border light:bg-white shadow-lg dark:bg-[#182130] mt-2"
      >
        <DropdownMenuItem
          onClick={() => theme.setTheme("light")}
          className={`flex-start px-2 cursor-pointer gap-2 pr-8 py-2 hover:outline-0 hover:bg-accent rounded-sm ${
            theme.theme == "light" && "blu"
          } light:hover:!text-white
          `}
        >
          <Sun size={18} /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => theme.setTheme("dark")}
          className={`flex-start px-2 cursor-pointer gap-2 pr-8 py-2 hover:outline-0 hover:bg-accent rounded-sm ${
            theme.theme == "dark" && "blu"
          } dark:hover:!text-white
          `}
        >
          <Moon size={17} /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => theme.setTheme("system")}
          className={`flex-start px-2 cursor-pointer gap-2 pr-8 py-2 hover:outline-0 hover:bg-accent rounded-sm ${
            theme.theme == "system" && "blu"
          } system:hover:!text-white
          `}
        >
          <Monitor size={15} /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
