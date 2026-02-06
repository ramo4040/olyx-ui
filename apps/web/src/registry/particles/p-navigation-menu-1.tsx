"use client";

import "./styles/p-navigation-menu-1.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@olyx/react/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview
            <NavigationMenuIndicator />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="navigation-menu-list-grid">
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Handbook
            <NavigationMenuIndicator />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="navigation-menu-list-flex">
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink href={item.href}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="https://hajib-ui.com/">
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const overviewLinks = [
  {
    href: "/react/overview/quick-start",
    title: "Quick Start",
    description: "Install and assemble your first component.",
  },
  {
    href: "/react/overview/accessibility",
    title: "Accessibility",
    description: "Learn how we build accessible components.",
  },
  {
    href: "/react/overview/releases",
    title: "Releases",
    description: "See what’s new in the latest Base UI versions.",
  },
  {
    href: "/react/overview/about",
    title: "About",
    description: "Learn more about Base UI and our mission.",
  },
] as const;

const handbookLinks = [
  {
    href: "/react/handbook/styling",
    title: "Styling",
    description:
      "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
  },
  {
    href: "/react/handbook/animation",
    title: "Animation",
    description:
      "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
  },
  {
    href: "/react/handbook/composition",
    title: "Composition",
    description:
      "Base UI components can be replaced and composed with your own existing components.",
  },
] as const;
