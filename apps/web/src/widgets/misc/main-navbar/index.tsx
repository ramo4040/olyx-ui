"use client";

import "./style.css";
import { ColorPickerIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
} from "@olyx/react";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";
import { DocsCommand } from "../docs-command";
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
                <NavigationMenuLink href="#">Docs</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="link-item">
                <NavigationMenuLink href="#">Components</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="link-item">
                <NavigationMenuLink href="#">Blocks</NavigationMenuLink>
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
              <Drawer modal={false}>
                <DrawerTrigger
                  render={
                    <Button mode="ghost" variant="neutral">
                      <div className="current-color" />
                      <HugeiconsIcon icon={ColorPickerIcon} />
                    </Button>
                  }
                />
                <DrawerContent className="color-picker-drawer">
                  <DrawerHeader>
                    <DrawerTitle>Pick Color</DrawerTitle>
                  </DrawerHeader>
                  <div className="colors">
                    <div className="color">
                      <p>Primary</p>
                      <div className="primary" />
                    </div>
                    <div className="color">
                      <p>Secondary</p>
                      <div className="secondary" />
                    </div>
                    <div className="color">
                      <p>Tertiary</p>
                      <div className="tertiary" />
                    </div>
                  </div>

                  <Button>Save</Button>
                </DrawerContent>
              </Drawer>
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
