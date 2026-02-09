import "./style.css";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@olyx/react/sheet";
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
  return (
    <Sheet>
      <SheetTrigger render={children} />
      <SheetContent side="left" className="mobile-navbar-drawer">
        <SheetClose />
        <div className="links-container">
          <h3>Menu</h3>
          {items.map((e) => (
            <Link key={e.label} href={{ pathname: e.href }} className="link">
              {e.label}
            </Link>
          ))}
        </div>

        {tree.children.map((item) => (
          <div key={item.$id} className="links-container">
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
      </SheetContent>
    </Sheet>
  );
};
