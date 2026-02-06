import { RatingBar, RatingBarItem } from "@olyx/react/rating-bar";

export default function Particle() {
  return (
    <RatingBar defaultValue="3">
      {[1, 2, 3, 4, 5].map((n) => (
        <RatingBarItem key={n} value={String(n)}>
          {n}
        </RatingBarItem>
      ))}
    </RatingBar>
  );
}
