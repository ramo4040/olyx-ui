import { CheckBox } from "@/components/ui";

export const CheckboxExample = () => {
	return (
		<div style={{ display: "flex", gap: 16 }}>
			<CheckBox />
			<CheckBox checked disabled />
			<CheckBox indeterminate />
			<CheckBox indeterminate disabled />
			<CheckBox disabled />
		</div>
	);
};
