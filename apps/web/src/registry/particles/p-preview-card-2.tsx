"use client";

import { LinkButton } from "@olyx/react/link-button";
import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@olyx/react/preview-card";

export default function Particle() {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<LinkButton href="#">Next.js</LinkButton>} />
      <PreviewCardContent variant="light">
        The React framework for the web, built on React Server Components.
      </PreviewCardContent>
    </PreviewCard>
  );
}
