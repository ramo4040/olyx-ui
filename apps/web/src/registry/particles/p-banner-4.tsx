"use client";

import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Banner, BannerContent, BannerIcon } from "@olyx/react/banner";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Banner variant="filled" status="success">
        <BannerIcon>
          <HugeiconsIcon icon={CheckmarkCircle01Icon} />
        </BannerIcon>
        <BannerContent>
          Your account has been successfully verified!
        </BannerContent>
      </Banner>
      <Banner variant="light" status="success">
        <BannerIcon>
          <HugeiconsIcon icon={CheckmarkCircle01Icon} />
        </BannerIcon>
        <BannerContent>
          Your account has been successfully verified!
        </BannerContent>
      </Banner>
      <Banner variant="lighter" status="success">
        <BannerIcon>
          <HugeiconsIcon icon={CheckmarkCircle01Icon} />
        </BannerIcon>
        <BannerContent>
          Your account has been successfully verified!
        </BannerContent>
      </Banner>
      <Banner variant="stroke" status="success">
        <BannerIcon>
          <HugeiconsIcon icon={CheckmarkCircle01Icon} />
        </BannerIcon>
        <BannerContent>
          Your account has been successfully verified!
        </BannerContent>
      </Banner>
    </div>
  );
}
