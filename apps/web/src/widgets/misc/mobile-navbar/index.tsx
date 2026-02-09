import "./style.css";
import { ScrollArea } from "@olyx/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@olyx/react/drawer";
import Link from "next/link";
import type { source } from "@/lib/source";

export const MobileNavbar = ({
  children,
  items,
  tree,
}: {
  children: React.ReactElement;
  items: { href: string; label: string }[];
  tree: typeof source.pageTree;
}) => {
  console.log(tree);

  return (
    <Drawer direction="left">
      <DrawerTrigger render={children} />
      <DrawerContent className="mobile-navbar-drawer">
        <DrawerHeader>
          <DrawerClose />
        </DrawerHeader>

        <ScrollArea>
          <div className="links-container">
            <div>
              <h3>Menu</h3>
              {items.map((e) => (
                <Link
                  key={e.label}
                  href={{ pathname: e.href }}
                  className="link"
                >
                  {e.label}
                </Link>
              ))}
            </div>

            {tree.children.map((item) => (
              <div key={item.$id}>
                <h3>{item.name}</h3>

                {item.type === "folder" &&
                  item.children.map((child) => {
                    return child.type === "page" ? (
                      <Link
                        key={child.$id}
                        href={{ pathname: child.url }}
                        className="link"
                      >
                        {child.name}
                      </Link>
                    ) : null;
                  })}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
