import "./style.css";
import {
  Cancel01Icon,
  Mic02Icon,
  PinIcon,
  VideoCameraAiIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@olyx/react";

export function PostComposer() {
  return (
    <div className="post-composer">
      <div className="post-header">
        <div className="post-user">
          <Avatar size={42}>
            <AvatarImage
              src="https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75"
              alt="Yassir Rouane"
            />
            <AvatarFallback>YR</AvatarFallback>
          </Avatar>
          <div className="post-user-info">
            <span className="post-user-name">Yassir Rouane</span>
            <span className="post-user-handle">@ramo4040</span>
          </div>
        </div>

        <Button variant="neutral" mode="ghost" asIcon size="sm">
          <HugeiconsIcon icon={Cancel01Icon} />
        </Button>
      </div>

      <div className="post-content">
        <Textarea defaultValue="Tell others about yourself..." />
      </div>

      <div className="post-footer">
        <div className="post-actions">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="neutral" mode="ghost" asIcon>
                  <HugeiconsIcon icon={Mic02Icon} />
                </Button>
              }
            />
            <TooltipContent>Voice note</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="neutral" mode="ghost" asIcon>
                  <HugeiconsIcon icon={VideoCameraAiIcon} />
                </Button>
              }
            />
            <TooltipContent>Record video</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button variant="neutral" mode="ghost" asIcon>
                  <HugeiconsIcon icon={PinIcon} />
                </Button>
              }
            />
            <TooltipContent>Attach file</TooltipContent>
          </Tooltip>
        </div>

        <Button variant="primary">Publish</Button>
      </div>
    </div>
  );
}
