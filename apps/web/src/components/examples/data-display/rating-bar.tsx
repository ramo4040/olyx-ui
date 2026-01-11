import { FavouriteIcon, StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { RatingBar, RatingBarItem } from "@/components/ui";

const size = ["sm", "md", "lg"] as const;

export const RatingBarExamples = () => {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {size.map((s) => (
        <RatingBar defaultValue="3" size={s} styling="star" key={s}>
          {[1, 2, 3, 4, 5].map((value) => (
            <RatingBarItem key={value} value={value.toString()}>
              <HugeiconsIcon icon={StarIcon} />
            </RatingBarItem>
          ))}
        </RatingBar>
      ))}

      <RatingBar defaultValue="3" size="md" styling="heart">
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingBarItem key={value} value={value.toString()}>
            <HugeiconsIcon icon={FavouriteIcon} />
          </RatingBarItem>
        ))}
      </RatingBar>

      <RatingBar defaultValue="3" size="sm">
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingBarItem key={value} value={value.toString()}>
            {value}
          </RatingBarItem>
        ))}
      </RatingBar>
    </div>
  );
};
