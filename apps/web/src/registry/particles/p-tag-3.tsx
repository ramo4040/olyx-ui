"use client";

import { Tag, TagDismiss } from "@olyx/react/tag";

export default function Particle() {
  return (
    <>
      <Tag>
        Bug Fix
        <TagDismiss aria-label="Remove Bug Fix" />
      </Tag>
      <Tag>
        Feature
        <TagDismiss aria-label="Remove Feature" />
      </Tag>
      <Tag>
        Improvement
        <TagDismiss aria-label="Remove Improvement" />
      </Tag>
    </>
  );
}
