"use client";

import { useEffect, useState } from "react";
import {
  CollapsibleExamples,
  DropdownMenuExample,
  MenuBarExamples,
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
        <SpinnerExamples />
				<CheckboxExample />
				<InputsExample />
				<KbdExample />
				<FieldExample /> 
        <ToogleExample />
        <SeparatorExample />
        <AccordionExample />
        <SelectExample />
        <DrawerExample />
        <PopoverExamples />
        <TooltipExamples />
        <TabsExamples />
        <SliderExample />
        <ProgressExamples />
        */}
        <DropdownMenuExample />
        <CollapsibleExamples />
        <MenuBarExamples />
      </div>
    </>
  );
}
