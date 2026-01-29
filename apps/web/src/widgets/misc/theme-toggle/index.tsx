"use client";

import { DarkModeIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@olyx/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "d") {
        e.preventDefault();
        setTheme(theme === "light" ? "dark" : "light");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [theme, setTheme]);

  return (
    <Tooltip>
      <TooltipTrigger
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        render={
          <Button mode="ghost" variant="neutral" asIcon>
            <HugeiconsIcon icon={DarkModeIcon} />
          </Button>
        }
      />

      <TooltipContent>
        Toggle theme <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  );
};
