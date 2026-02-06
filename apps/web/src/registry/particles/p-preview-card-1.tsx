"use client";

import { LinkButton } from "@olyx/react";
import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@olyx/react/preview-card";

export default function Particle() {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<LinkButton href="#">Olyx ui</LinkButton>} />
      <PreviewCardContent>
        An open-source library of accessible, unstyled UI components for React.
      </PreviewCardContent>
    </PreviewCard>
  );
}
