"use client";

import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Banner, BannerContent, BannerIcon } from "@olyx/react/banner";

export default function Particle() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Banner variant="filled" status="feature">
        <BannerIcon>
          <HugeiconsIcon icon={StarIcon} />
        </BannerIcon>
        <BannerContent>
          Introducing dark mode! Try it now in settings.
        </BannerContent>
      </Banner>
      <Banner variant="light" status="feature">
        <BannerIcon>
          <HugeiconsIcon icon={StarIcon} />
        </BannerIcon>
        <BannerContent>
          Introducing dark mode! Try it now in settings.
        </BannerContent>
      </Banner>
      <Banner variant="lighter" status="feature">
        <BannerIcon>
          <HugeiconsIcon icon={StarIcon} />
        </BannerIcon>
        <BannerContent>
          Introducing dark mode! Try it now in settings.
        </BannerContent>
      </Banner>
      <Banner variant="stroke" status="feature">
        <BannerIcon>
          <HugeiconsIcon icon={StarIcon} />
        </BannerIcon>
        <BannerContent>
          Introducing dark mode! Try it now in settings.
        </BannerContent>
      </Banner>
    </div>
  );
}
