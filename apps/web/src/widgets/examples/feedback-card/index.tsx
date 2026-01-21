import {
  Button,
  Input,
  InputWrapper,
  RatingBar,
  RatingBarItem,
} from "@/components/ui";
import "./style.css";
import { SentIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function FeedbackCard() {
  return (
    <div className="feedback-card">
      <div className="feedback-header">
        <h2>Share your experience</h2>
        <p>Let us know what you think about our platform</p>
      </div>

      <RatingBar
        className="feedback-rating"
        defaultValue="3"
        size="lg"
        styling="star"
      >
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingBarItem key={value} value={value.toString()}>
            <HugeiconsIcon icon={StarIcon} />
          </RatingBarItem>
        ))}
      </RatingBar>

      <div className="feedback-input">
        <InputWrapper>
          <Input placeholder="Type review..." />
          <Button variant="neutral" mode="stroke" size="sm" asIcon>
            <HugeiconsIcon icon={SentIcon} />
          </Button>
        </InputWrapper>
      </div>
    </div>
  );
}
