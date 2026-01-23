import "./style.css";
import { DarkModeIcon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";
import {
  Button,
  Kbd,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
} from "@/components/ui";

export const MainNavbar = () => {
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
            <NavigationMenuLink
              href="#"
              render={
                <Button mode="ghost" variant="neutral" asIcon>
                  <GitHubIcon />
                </Button>
              }
            />
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <Button mode="ghost" variant="neutral" asIcon>
                  <HugeiconsIcon icon={DarkModeIcon} />{" "}
                </Button>
              }
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
