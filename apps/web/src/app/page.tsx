import { AvatarExamples, ButtonsExamples } from "@/components/examples";

export default function Home() {
	return (
		<div style={{ display: "grid", gap: "30px" }}>
			<ButtonsExamples />
			<AvatarExamples />
		</div>
	);
}
