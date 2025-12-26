"use client";

import "./style.css";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

function RadioGroup(props: RadioGroupPrimitive.Props) {
	return <RadioGroupPrimitive data-slot="radio-group" {...props} />;
}

function RadioGroupItem(props: RadioPrimitive.Root.Props) {
	return (
		<RadioPrimitive.Root data-slot="radio-group-item" {...props}>
			<RadioPrimitive.Indicator data-slot="radio-group-item-indicator" />
		</RadioPrimitive.Root>
	);
}

export { RadioGroup, RadioGroupItem };
