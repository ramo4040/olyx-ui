"use client";

import "./style.css";
import { ColorPickerIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
} from "@olyx/react";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";
import { DocsCommand } from "../docs-command";
import { DrawerColorPicker } from "../drawer-color-picker";
import { ThemeToggle } from "../theme-toggle";

export const MainNavbar = () => {
  return (
    <header data-ui="main-navbar-header">
      <NavigationMenu data-ui="main-navbar">
        <NavigationMenuList className="main-navbar-list">
          <div className="links">
            {/* Logo */}
            <NavigationMenuItem>
              <Logo />
            </NavigationMenuItem>

            {/* Links */}
            <NavigationMenuList>
              <NavigationMenuItem className="link-item">
                <NavigationMenuLink href="/docs">Docs</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="link-item">
                <NavigationMenuLink href="/components">
                  Components
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="link-item">
                <NavigationMenuLink href="/particles">
                  Particles
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
          <NavigationMenuList className="actions-list">
            {/* Search */}
            <NavigationMenuItem>
              <DocsCommand />
            </NavigationMenuItem>

            <Separator orientation="vertical" />

            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <GitHubIcon />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <Separator orientation="vertical" />

            <NavigationMenuItem>
              <DrawerColorPicker>
                <Button mode="ghost" variant="neutral">
                  <div className="current-color" />
                  <HugeiconsIcon icon={ColorPickerIcon} />
                </Button>
              </DrawerColorPicker>
            </NavigationMenuItem>

            <Separator orientation="vertical" />

            <NavigationMenuItem>
              <ThemeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
