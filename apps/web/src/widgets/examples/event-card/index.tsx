import "./style.css";
import {
  Calendar03Icon,
  Copy01Icon,
  Location01Icon,
  PencilEdit01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  Button,
  Separator,
  StatusBadge,
} from "@olyx/react";

export function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card-body">
        <div className="event-info">
          <div className="event-meta">
            <HugeiconsIcon icon={Calendar03Icon} size={16} />
            <span>April 27</span>
            <span>@</span>
            <span>5:00 PM</span>
          </div>
          <h2 className="event-title">Poolside Party</h2>
          <div className="event-location">
            <HugeiconsIcon icon={Location01Icon} size={16} />
            <span>Los Angeles, CA</span>
          </div>
          <div className="event-attendees">
            <AvatarGroup>
              <Avatar size={32}>
                <AvatarImage src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=64&h=64&dpr=2&q=80" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar size={32}>
                <AvatarImage src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&h=64&dpr=2&q=80" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <Avatar size={32}>
                <AvatarImage src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&h=64&dpr=2&q=80" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </AvatarGroup>
            <span className="attendees-text">+45 more are down</span>
          </div>
        </div>
        <div className="event-stats">
          <span className="event-price">$5,790.00</span>
          <div className="event-trend">
            <span>Today</span>
            <StatusBadge status="success">↗ 6.5%</StatusBadge>
          </div>
        </div>
      </div>

      <Separator />

      <div className="event-card-footer">
        <Button variant="neutral" mode="stroke">
          <HugeiconsIcon icon={PencilEdit01Icon} />
          Edit Event
        </Button>
        <Button variant="neutral" mode="stroke">
          <HugeiconsIcon icon={Copy01Icon} />
          Copy Link
        </Button>
      </div>
    </div>
  );
}
