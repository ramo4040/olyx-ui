"use client";

import "./style.css";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";

function CheckBox(props: CheckboxPrimitive.Root.Props) {
	return (
		<CheckboxPrimitive.Root data-slot="checkbox" {...props}>
			<CheckboxPrimitive.Indicator data-slot="checkbox-indicator" />
		</CheckboxPrimitive.Root>
	);
}

export { CheckBox };
