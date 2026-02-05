"use client";

import { AlertDiamondIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Banner, BannerContent, BannerIcon } from "@olyx/react/banner";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Banner variant="filled" status="warning">
        <BannerIcon>
          <HugeiconsIcon icon={AlertDiamondIcon} />
        </BannerIcon>
        <BannerContent>
          Your trial expires in 3 days. Upgrade to continue using premium
          features.
        </BannerContent>
      </Banner>
      <Banner variant="light" status="warning">
        <BannerIcon>
          <HugeiconsIcon icon={AlertDiamondIcon} />
        </BannerIcon>
        <BannerContent>
          Your trial expires in 3 days. Upgrade to continue using premium
          features.
        </BannerContent>
      </Banner>
      <Banner variant="lighter" status="warning">
        <BannerIcon>
          <HugeiconsIcon icon={AlertDiamondIcon} />
        </BannerIcon>
        <BannerContent>
          Your trial expires in 3 days. Upgrade to continue using premium
          features.
        </BannerContent>
      </Banner>
      <Banner variant="stroke" status="warning">
        <BannerIcon>
          <HugeiconsIcon icon={AlertDiamondIcon} />
        </BannerIcon>
        <BannerContent>
          Your trial expires in 3 days. Upgrade to continue using premium
          features.
        </BannerContent>
      </Banner>
    </div>
  );
}
