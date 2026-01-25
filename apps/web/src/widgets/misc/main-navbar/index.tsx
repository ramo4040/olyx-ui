"use client";

import "./style.css";
import { DarkModeIcon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Kbd,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@olyx/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";

export const MainNavbar = () => {
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
    <NavigationMenu data-ui="main-navbar">
      <NavigationMenuList className="main-navbar-list">
        {/* Logo */}
        <NavigationMenuItem>
          <Logo />
        </NavigationMenuItem>

        {/* Links */}
        <NavigationMenuList>
          <NavigationMenuItem className="link-item">
            <NavigationMenuLink href="#">Docs</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="link-item">
            <NavigationMenuLink href="#">Components</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="link-item">
            <NavigationMenuLink href="#">Blocks</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="actions-list">
          <NavigationMenuItem>
            <Button mode="stroke" variant="neutral">
              <HugeiconsIcon icon={Search01Icon} />
              <div>Quick Search...</div>
              <Kbd className="kbd">⌘K</Kbd>
            </Button>
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
            <NavigationMenuLink href="#">
              <GitHubIcon />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
