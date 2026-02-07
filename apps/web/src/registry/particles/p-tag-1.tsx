"use client";

import { Tag, TagDismiss } from "@olyx/react/tag";

export default function Particle() {
  return (
    <>
      <Tag>Design</Tag>
      <Tag>
        Engineering
        <TagDismiss aria-label="Remove Engineering" />
      </Tag>
    </>
  );
}
