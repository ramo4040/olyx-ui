"use client";

import { useEffect, useState } from "react";
import {
	ToogleExample,
	// FieldExample,
	// InputsExample,
	// KbdExample,
	// TextareaExample,
	// AvatarExamples,
	// BadgesExamples,
	// ButtonsExamples,
	// CheckboxExample,
	// RadioExample,
	// SliderExample,
	// SwitchExample,
	// SelectExample,
} from "@/components/examples";
import { Switch } from "@/components/ui";

export default function Home() {
	const [theme, setTheme] = useState(false);

	useEffect(() => {
		const html = document.documentElement;
		html.setAttribute("data-theme", theme ? "dark" : "light");
	}, [theme]);

	return (
		<>
			<header
				style={{
					marginBottom: 100,
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<Switch checked={theme} onCheckedChange={setTheme} />
			</header>
			<div style={{ display: "grid", gap: 40 }}>
				{/* <ButtonsExamples />
				<AvatarExamples />
				<BadgesExamples />
				<RadioExample />
				<SwitchExample />
				<SelectExample />
				<SliderExample />
				<TextareaExample />
				<CheckboxExample />
				<InputsExample />
				<KbdExample />
				<FieldExample /> */}

				<ToogleExample />
			</div>
		</>
	);
}
