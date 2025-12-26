"use client";

import "./style.css";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

function Switch(props: SwitchPrimitive.Root.Props) {
	return (
		<SwitchPrimitive.Root data-slot="switch" {...props}>
			<SwitchPrimitive.Thumb data-slot="thumb" />
		</SwitchPrimitive.Root>
	);
}

export { Switch };
