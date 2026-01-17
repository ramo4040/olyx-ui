import Image from "next/image";
import { Tag } from "@/components/ui";

export const TagExamples = () => {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      <Tag>Stroke Tag</Tag>
      <Tag variant="lighter">Lighter Tag</Tag>

      <Tag withDismiss>Dismissible Tag</Tag>

      <Tag withDismiss disabled>
        Disabled
      </Tag>

      <Tag withDismiss>
        <Image
          src="https://www.gravatar.com/avatar?d=identicon"
          width={16}
          height={16}
          alt="Avatar img"
        />
        Avatar
      </Tag>
    </div>
  );
};
