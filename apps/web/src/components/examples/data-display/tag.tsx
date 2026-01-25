import { Tag, TagDismiss } from "@olyx/react";
import Image from "next/image";

export const TagExamples = () => {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Tag>Stroke Tag</Tag>
      <Tag variant="lighter">Lighter Tag</Tag>

      <Tag>
        Dismissible Tag
        <TagDismiss />
      </Tag>
      <Tag variant="lighter">
        Dismissible Tag
        <TagDismiss />
      </Tag>

      <Tag disabled>
        Disabled
        <TagDismiss />
      </Tag>

      <Tag>
        <Image
          src="https://www.gravatar.com/avatar?d=identicon"
          width={16}
          height={16}
          alt="Avatar img"
        />
        Avatar
        <TagDismiss />
      </Tag>
    </div>
  );
};
