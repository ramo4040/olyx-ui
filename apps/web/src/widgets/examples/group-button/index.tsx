import "./style.css";
import {
  Logout03Icon,
  MoreHorizontalIcon,
  Settings03Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ButtonGroup,
  ButtonGroupItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@olyx/react";

export const GroupButton = () => {
  return (
    <div data-ui="group-button-example">
      <ButtonGroup orientation="horizontal">
        <ButtonGroupItem>Archive</ButtonGroupItem>
        <ButtonGroupItem>Report</ButtonGroupItem>
      </ButtonGroup>

      <ButtonGroup orientation="horizontal">
        <ButtonGroupItem>Profile</ButtonGroupItem>
        <DropdownMenu>
          <DropdownMenuTrigger render={<ButtonGroupItem />}>
            <HugeiconsIcon icon={MoreHorizontalIcon} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <HugeiconsIcon icon={UserIcon} />
              <span style={{ flex: 1 }}>View Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HugeiconsIcon icon={Settings03Icon} />
              <span style={{ flex: 1 }}>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <HugeiconsIcon icon={Logout03Icon} />
              <span style={{ flex: 1 }}>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  );
};
