"use client";

import {
  Settings01Icon,
  Tag01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tag } from "@olyx/react/tag";

export default function Particle() {
  return (
    <>
      <Tag>
        <HugeiconsIcon icon={Tag01Icon} />
        Label
      </Tag>
      <Tag variant="lighter">
        <HugeiconsIcon icon={Settings01Icon} />
        Settings
      </Tag>
      <Tag>
        <HugeiconsIcon icon={UserIcon} />
        Admin
      </Tag>
    </>
  );
}
