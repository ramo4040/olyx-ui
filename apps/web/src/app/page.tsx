import {
	AvatarExamples,
	BadgesExamples,
	ButtonsExamples,
	CheckboxExample,
	RadioExample,
} from "@/components/examples";

export default function Home() {
	return (
		<div style={{ display: "grid", gap: "30px" }}>
			{/* <ButtonsExamples />
			<AvatarExamples />
			<BadgesExamples /> */}

			<CheckboxExample />
			<RadioExample />
		</div>
	);
}
