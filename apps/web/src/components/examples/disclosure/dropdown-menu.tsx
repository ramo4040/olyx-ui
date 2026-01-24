import {
  Moon02Icon,
  Notification02Icon,
  Settings03Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSubmenu,
  DropdownMenuSubmenuTrigger,
  DropdownMenuTrigger,
  Switch,
} from "@olyx/react";

export const DropdownMenuExample = () => {
  return (
    <div style={{ display: "flex", gap: 18, maxWidth: 400 }}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="neutral" mode="stroke">
              Dropdown
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuGroupLabel>Account</DropdownMenuGroupLabel>
            <DropdownMenuItem>
              <HugeiconsIcon icon={UserIcon} />
              <span style={{ flex: 1 }}>Edit profile</span>
            </DropdownMenuItem>
            <DropdownMenuSubmenu>
              <DropdownMenuSubmenuTrigger>
                <HugeiconsIcon icon={Settings03Icon} />
                <span style={{ flex: 1 }}>Settings</span>
              </DropdownMenuSubmenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span style={{ flex: 1 }}>Preferences</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span style={{ flex: 1 }}>Privacy</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuSubmenu>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            <HugeiconsIcon icon={Notification02Icon} />
            <span style={{ flex: 1 }}>Notification</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <HugeiconsIcon icon={Moon02Icon} />
            <span style={{ flex: 1 }}>Dark mode</span>
            <Switch />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="neutral" mode="stroke">
              Checkbox Menu
            </Button>
          }
        />
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem>Option 1</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Option 2</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Option 3</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Option 4</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="neutral" mode="stroke">
              Radio Menu
            </Button>
          }
        />
        <DropdownMenuContent side="inline-end">
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem value="option1">
              Option 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">
              Option 2
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option3">
              Option 3
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option4">
              Option 4
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
