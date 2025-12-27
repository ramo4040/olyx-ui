import {
	AvatarExamples,
	BadgesExamples,
	ButtonsExamples,
	CheckboxExample,
	RadioExample,
	SliderExample,
	SwitchExample,
} from "@/components/examples";

export default function Home() {
	return (
		<div style={{ display: "grid", gap: "30px" }}>
			<ButtonsExamples />
			<AvatarExamples />
			<BadgesExamples />

			<CheckboxExample />
			<RadioExample />
			<SwitchExample />
			<SliderExample />
		</div>
	);
}
