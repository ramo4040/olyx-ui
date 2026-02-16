"use client";

import "./style.css";
import { ColorPickerIcon, Menu09Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
} from "@olyx/react";
import Link from "next/link";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";
import { useIsMobile } from "@/hooks/use-mobile";
import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";
import { DocsCommand } from "../docs-command";
import { DrawerColorPicker } from "../drawer-color-picker";
import { MobileNavbar } from "../mobile-navbar";
import { ThemeToggle } from "../theme-toggle";

export const MainNavbar = () => {
  const isMobile = useIsMobile();
  const docsTree = source.pageTree;

  return (
    <header data-ui="main-navbar-header">
      <NavigationMenu data-ui="main-navbar">
        <NavigationMenuList
          className="main-navbar-list"
          aria-label="Main navigation"
        >
          <div className="links">
            {isMobile && (
              <MobileNavbar items={siteConfig.navItems} tree={docsTree}>
                <Button
                  asIcon
                  size="md"
                  variant="neutral"
                  mode="ghost"
                  aria-label="Open navigation menu"
                  render={<HugeiconsIcon icon={Menu09Icon} />}
                />
              </MobileNavbar>
            )}
            {/* Logo */}
            <NavigationMenuItem>
              <Logo />
            </NavigationMenuItem>

            {/* Links */}
            <NavigationMenuList aria-label="Primary navigation links">
              {siteConfig.navItems.map((e) => (
                <NavigationMenuItem key={e.label} className="link-item">
                  <NavigationMenuLink
                    render={<Link href={{ pathname: e.href }}>{e.label}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>

          <NavigationMenuList
            className="actions-list"
            aria-label="Site actions"
          >
            {/* Search */}
            <NavigationMenuItem className="search-item">
              <DocsCommand tree={docsTree} />
            </NavigationMenuItem>

            <Separator orientation="vertical" />

            <NavigationMenuItem className="github-link">
              <NavigationMenuLink
                href={siteConfig.github}
                aria-label="View GitHub repository"
              >
                <GitHubIcon />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <Separator orientation="vertical" />

            <NavigationMenuItem>
              <DrawerColorPicker>
                <Button
                  mode="ghost"
                  variant="neutral"
                  aria-label="Choose theme color"
                >
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
