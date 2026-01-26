import { HugeiconsIcon } from "@hugeicons/react";
import "./style.css";
import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Separator,
  StatusBadge,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@olyx/react";

export const ProfileCardExample = () => {
  return (
    <div data-ui="profile-card-example">
      <div className="header">
        <div className="banner" />
        <Avatar size={68} className="avatar">
          <AvatarImage
            src="https://www.yassir-rouane.me/_next/image?url=%2Fimages%2Fme%2F3.jpg&w=2048&q=75"
            alt="Yassir Rouane"
          />
          <AvatarFallback>YR</AvatarFallback>
        </Avatar>
      </div>
      <div className="details">
        <div className="info">
          <div>
            <h3>
              Yassir Rouane
              <Tooltip>
                <TooltipTrigger
                  render={
                    <span>
                      <HugeiconsIcon icon={CheckmarkBadge02Icon} />
                    </span>
                  }
                />
                <TooltipContent>Verified</TooltipContent>
              </Tooltip>
            </h3>
            <p>Fullstack Developer</p>
          </div>

          <StatusBadge
            doted
            status="success"
            variant="stroke"
            className="status-badge"
          >
            Online
          </StatusBadge>
        </div>

        <div className="stats">
          <div>
            <h4>4.9</h4>
            <p>Rating</p>
          </div>
          <Separator orientation="vertical" className="separator" />
          <div>
            <h4>66K</h4>
            <p>earned</p>
          </div>
          <Separator orientation="vertical" className="separator" />
          <div>
            <h4>1.2K</h4>
            <p>followers</p>
          </div>
        </div>

        <Button size="md">Get in Touch</Button>
      </div>
    </div>
  );
};
