"use client";

import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Banner,
  BannerClose,
  BannerContent,
  BannerIcon,
} from "@olyx/react/banner";

export default function Particle() {
  return (
    <Banner status="info">
      <BannerIcon>
        <HugeiconsIcon icon={InformationCircleIcon} />
      </BannerIcon>
      <BannerContent>This banner can be dismissed by the user.</BannerContent>
      <BannerClose />
    </Banner>
  );
}
