"use client";

import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Banner, BannerContent, BannerIcon } from "@olyx/react/banner";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Banner variant="filled" status="info">
        <BannerIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </BannerIcon>
        <BannerContent>
          We've updated our privacy policy. Review changes here.
        </BannerContent>
      </Banner>
      <Banner variant="light" status="info">
        <BannerIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </BannerIcon>
        <BannerContent>
          We've updated our privacy policy. Review changes here.
        </BannerContent>
      </Banner>
      <Banner variant="lighter" status="info">
        <BannerIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </BannerIcon>
        <BannerContent>
          We've updated our privacy policy. Review changes here.
        </BannerContent>
      </Banner>
      <Banner variant="stroke" status="info">
        <BannerIcon>
          <HugeiconsIcon icon={InformationCircleIcon} />
        </BannerIcon>
        <BannerContent>
          We've updated our privacy policy. Review changes here.
        </BannerContent>
      </Banner>
    </div>
  );
}
