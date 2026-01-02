"use client";

import { useEffect, useState } from "react";
import {
  DrawerExample,
  DropdownMenuExample,
  PopoverExamples,
  TooltipExamples,
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
        {/* 
        <ButtonsExamples />
				<AvatarExamples />
				<BadgesExamples />
				<RadioExample />
				<SwitchExample />
				<TextareaExample />
				<CheckboxExample />
				<InputsExample />
				<KbdExample />
				<FieldExample /> 
				<SliderExample />
        <ToogleExample />
        <SeparatorExample />
        <AccordionExample />
        <SelectExample />
        */}
        <DrawerExample />
        <DropdownMenuExample />
        <PopoverExamples />
        <TooltipExamples />
      </div>
    </>
  );
}
