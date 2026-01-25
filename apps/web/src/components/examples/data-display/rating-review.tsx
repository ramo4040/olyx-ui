import { RatingReview } from "@olyx/react";

export const RatingReviewExample = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <RatingReview max={6} value={3} variant="heart" />
      <RatingReview max={6} value={4} variant="star" />
    </div>
  );
};
