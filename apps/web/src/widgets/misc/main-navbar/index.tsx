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
        <NavigationMenuList className="main-navbar-list">
          <div className="links">
            {isMobile && (
              <MobileNavbar items={siteConfig.navItems} tree={docsTree}>
                <Button
                  asIcon
                  size="md"
                  variant="neutral"
                  mode="ghost"
                  render={<HugeiconsIcon icon={Menu09Icon} />}
                />
              </MobileNavbar>
            )}
            {/* Logo */}
            <NavigationMenuItem>
              <Logo />
            </NavigationMenuItem>

            {/* Links */}
            <NavigationMenuList>
              {siteConfig.navItems.map((e) => (
                <NavigationMenuItem key={e.label} className="link-item">
                  <NavigationMenuLink
                    render={<Link href={{ pathname: e.href }}>{e.label}</Link>}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>

          <NavigationMenuList className="actions-list">
            {/* Search */}
            <NavigationMenuItem className="search-item">
              <DocsCommand tree={docsTree} />
            </NavigationMenuItem>

            <Separator orientation="vertical" />

            <NavigationMenuItem className="github-link">
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
