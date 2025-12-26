import { Badge } from "@/components/ui";

export const BadgesExamples = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
			{/* filled Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Badge variant="filled" mode="default">
					Primary
				</Badge>

				<Badge variant="filled" mode="default" doted>
					Doted
				</Badge>

				<Badge variant="filled" mode="error">
					Error
				</Badge>
			</div>
			{/* light Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Badge variant="light" mode="default">
					Light
				</Badge>
				<Badge variant="light" mode="default" doted>
					Doted
				</Badge>
				<Badge variant="light" mode="error">
					Error
				</Badge>
			</div>
			{/* lighter Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Badge variant="lighter" mode="default">
					lighter
				</Badge>
				<Badge variant="lighter" mode="default" doted>
					Doted
				</Badge>
				<Badge variant="lighter" mode="error">
					Error
				</Badge>
			</div>

			{/* Strock Variants */}
			<div style={{ display: "flex", gap: 8 }}>
				<Badge variant="stroke" mode="default">
					stroke
				</Badge>
				<Badge variant="stroke" mode="default" doted>
					Doted
				</Badge>
				<Badge variant="stroke" mode="error">
					Error
				</Badge>
			</div>

			{/* Sizes */}
			<div style={{ display: "flex", gap: 8 }}>
				<Badge variant="filled" mode="default" size="sm">
					size md
				</Badge>
				<Badge variant="filled" mode="default" doted size="md">
					Doted
				</Badge>
				<Badge variant="filled" mode="default" size="md">
					size md
				</Badge>
			</div>

			<div style={{ display: "flex", gap: 8 }}>
				<Badge variant="filled" mode="default" size="md">
					<i className="hgi hgi-stroke hgi-checkmark-circle-02" />
					size md
				</Badge>

				<Badge variant="filled" mode="default" size="md" disabled>
					<i className="hgi hgi-stroke hgi-checkmark-circle-02" />
					disabled
				</Badge>
			</div>
		</div>
	);
};
