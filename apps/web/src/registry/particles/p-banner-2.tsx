"use client";

import { AlertCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Banner, BannerContent, BannerIcon } from "@olyx/react/banner";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Banner variant="filled" status="error">
        <BannerIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </BannerIcon>
        <BannerContent>
          System maintenance scheduled for tonight at 10 PM EST.
        </BannerContent>
      </Banner>
      <Banner variant="light" status="error">
        <BannerIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </BannerIcon>
        <BannerContent>
          System maintenance scheduled for tonight at 10 PM EST.
        </BannerContent>
      </Banner>
      <Banner variant="lighter" status="error">
        <BannerIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </BannerIcon>
        <BannerContent>
          System maintenance scheduled for tonight at 10 PM EST.
        </BannerContent>
      </Banner>
      <Banner variant="stroke" status="error">
        <BannerIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </BannerIcon>
        <BannerContent>
          System maintenance scheduled for tonight at 10 PM EST.
        </BannerContent>
      </Banner>
    </div>
  );
}
