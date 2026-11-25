"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-dark-700 bg-dark-900 text-dark-300 hover:text-white dark:border-dark-700 dark:bg-dark-900 dark:text-dark-300 dark:hover:text-white light:border-zinc-300 light:bg-zinc-100 light:text-zinc-700 transition-all flex items-center gap-1.5 text-xs font-medium"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline text-dark-300">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-zinc-700" />
          <span className="hidden sm:inline text-zinc-700">Dark</span>
        </>
      )}
    </button>
  );
}
