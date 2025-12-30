import { Setting06Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui";

export const ButtonsExamples = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			{/* Primary Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Button variant="primary" mode="filled" size="md">
					Primary
				</Button>
				<Button variant="primary" mode="lighter" size="md">
					Light
				</Button>
				<Button variant="primary" mode="ghost" size="md">
					Ghost
				</Button>
				<Button variant="primary" mode="stroke" size="md">
					Stroke
				</Button>
			</div>
			{/* Neutral Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Button variant="neutral" mode="filled" size="md">
					Neutral
				</Button>
				<Button variant="neutral" mode="lighter" size="md">
					Light
				</Button>
				<Button variant="neutral" mode="ghost" size="md">
					Ghost
				</Button>
				<Button variant="neutral" mode="stroke" size="md">
					Stroke
				</Button>
			</div>
			{/* Error Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Button variant="error" mode="filled" size="md">
					Error
				</Button>
				<Button variant="error" mode="lighter" size="md">
					Light
				</Button>
				<Button variant="error" mode="ghost" size="md">
					Ghost
				</Button>
				<Button variant="error" mode="stroke" size="md">
					Stroke
				</Button>
			</div>
			{/* Icon , Link and disabled examples */}
			<div style={{ display: "flex", gap: 8 }}>
				<Button asIcon variant="primary" mode="ghost" size="sm">
					<HugeiconsIcon icon={Setting06Icon} />
				</Button>
				<Button disabled>Disabled</Button>
				<Button variant="link">Link</Button>
			</div>
		</div>
	);
};
