import { Alert01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Banner,
  BannerClose,
  BannerContent,
  BannerIcon,
} from "@/components/ui";

export const BannerExamples = () => {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {variants.map((variant) => {
        return (
          <div key={variant} style={{ display: "grid", gap: 12 }}>
            {statuses.map((status) => (
              <Banner
                key={`${variant}-${status}`}
                variant={variant}
                status={status}
              >
                <BannerIcon>
                  <HugeiconsIcon icon={Alert01FreeIcons} />
                </BannerIcon>
                <BannerContent>
                  Insert your alert title here! ∙ Insert your description here.
                </BannerContent>
                <BannerClose />
              </Banner>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const variants = ["filled", "light", "lighter", "stroke"] as const;
const statuses = ["error", "warning", "success", "info", "feature"] as const;
