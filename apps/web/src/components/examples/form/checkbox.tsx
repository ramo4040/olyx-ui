"use client";

import { useState } from "react";
import { CheckBox, CheckboxGroup } from "@/components/ui";

const fruits = ["apple", "banana", "cherry"];

export const CheckboxExample = () => {
	const [values, setValues] = useState<string[]>([]);
	const [values2, setValues2] = useState<string[]>([]);

	return (
		<div style={{ display: "grid", gap: 24 }}>
			<div style={{ display: "flex", gap: 16 }}>
				<CheckBox />
				<CheckBox checked disabled />
				<CheckBox indeterminate />
				<CheckBox indeterminate disabled />
				<CheckBox disabled />
			</div>

			<CheckboxGroup value={values} onValueChange={setValues}>
				<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
					<label>
						<CheckBox value="apple" />
						Apple
					</label>
					<label>
						<CheckBox value="banana" />
						Banana
					</label>
					<label>
						<CheckBox value="cherry" />
						Cherry
					</label>
				</div>
				<div style={{ marginTop: 16 }}>Selected: {values.join(", ")}</div>
			</CheckboxGroup>

			<CheckboxGroup
				value={values2}
				onValueChange={setValues2}
				allValues={fruits}
			>
				<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
					<label>
						<CheckBox value="apple" parent />
						All
					</label>
					<label>
						<CheckBox value="banana" />
						Banana
					</label>
					<label>
						<CheckBox value="cherry" />
						Cherry
					</label>
				</div>
				<div style={{ marginTop: 16 }}>Selected: {values.join(", ")}</div>
			</CheckboxGroup>
		</div>
	);
};
