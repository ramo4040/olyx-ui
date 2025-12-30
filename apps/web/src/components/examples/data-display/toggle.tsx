import { TextItalicIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Toggle } from "@/components/ui";

export const ToogleExample = () => {
	return (
		<div style={{ display: "grid", gap: 8 }}>
			<h4>Size sm</h4>
			<Toggle size="sm">
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<Toggle size="sm" variant="ghost">
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<h4>Size md</h4>
			<Toggle size="md">
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<Toggle size="md" variant="ghost">
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<h4>Size lg</h4>
			<Toggle size="lg">
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<Toggle size="lg" variant="ghost">
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<h4>Disabled</h4>
			<Toggle size="md" disabled>
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
			<Toggle size="md" variant="ghost" disabled>
				<HugeiconsIcon icon={TextItalicIcon} />
			</Toggle>
		</div>
	);
};
