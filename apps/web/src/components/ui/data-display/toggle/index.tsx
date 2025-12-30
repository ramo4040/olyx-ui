"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import "./style.css";

type ToogleProps = TogglePrimitive.Props & {
	variant?: "ghost" | "primary";
	size?: "sm" | "md" | "lg";
};

function Toggle({ variant = "primary", size = "md", ...props }: ToogleProps) {
	return (
		<TogglePrimitive
			data-slot="toggle"
			data-variant={variant}
			data-size={size}
			{...props}
		/>
	);
}

export { Toggle };
