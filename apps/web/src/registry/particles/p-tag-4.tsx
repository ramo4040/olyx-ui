"use client";

import { Tag, TagDismiss } from "@olyx/react/tag";

export default function Particle() {
  return (
    <>
      <Tag disabled>Archived</Tag>
      <Tag disabled>
        Locked
        <TagDismiss aria-label="Remove Locked" />
      </Tag>
    </>
  );
}
