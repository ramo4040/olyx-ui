"use client";

import "./style.css";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";

function CheckBox(props: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" {...props}>
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" />
    </CheckboxPrimitive.Root>
  );
}

function CheckboxGroup(props: CheckboxGroupPrimitive.Props) {
  return <CheckboxGroupPrimitive {...props} />;
}

export { CheckBox, CheckboxGroup };
