"use client";

import { MoonIcon as Moon, SunIcon as Sun } from "@phosphor-icons/react/ssr";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="icon-button">
          <Sun className="theme-icon theme-sun" aria-hidden="true" />
          <Moon className="theme-icon theme-moon" aria-hidden="true" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="theme-menu">
        <DropdownMenuItem className="theme-menu-item title-4" aria-current={theme === "light" ? "true" : undefined} onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem className="theme-menu-item title-4" aria-current={theme === "dark" ? "true" : undefined} onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="theme-menu-item title-4" aria-current={theme === "system" ? "true" : undefined} onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
