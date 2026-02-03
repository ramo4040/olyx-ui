"use client";

import "./style.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@olyx/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { source } from "@/lib/source";

type Props = {
  tree: typeof source.pageTree;
};

export const DocsSidebar = ({ tree }: Props) => {
  const pathname = usePathname();

  return (
    <aside data-ui="docs-sidebar">
      <NavigationMenu orientation="vertical">
        {tree.children.map((item) => (
          <NavigationMenuList key={item.$id}>
            <h5>{item.name}</h5>

            {item.type === "folder" &&
              item.children.map((child) => {
                return child.type === "page" ? (
                  <NavigationMenuItem key={child.$id}>
                    <NavigationMenuLink
                      className="link"
                      active={child.url === pathname}
                      render={<Link href={{ pathname: child.url }} />}
                    >
                      {child.name}

                      {child.url === pathname && <span className="dot" />}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ) : null;
              })}
          </NavigationMenuList>
        ))}
      </NavigationMenu>
    </aside>
  );
};
