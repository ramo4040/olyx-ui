import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { RatingBar, RatingBarItem } from "@olyx/react/rating-bar";

export default function Particle() {
  return (
    <RatingBar styling="star" size="sm" defaultValue="3">
      {[1, 2, 3, 4, 5].map((n) => (
        <RatingBarItem key={n} value={String(n)}>
          <HugeiconsIcon icon={StarIcon} />
        </RatingBarItem>
      ))}
    </RatingBar>
  );
}
