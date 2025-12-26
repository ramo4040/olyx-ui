import { Switch } from "@/components/ui";

export const SwitchExample = () => {
	return (
		<div style={{ display: "flex", gap: 16 }}>
			<Switch />
			<Switch defaultChecked />
			<Switch disabled />
			<Switch defaultChecked disabled />
		</div>
	);
};
