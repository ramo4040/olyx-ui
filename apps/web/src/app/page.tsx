"use client";

import { useEffect, useState } from "react";
import {
  MenuBarExamples,
  NumberFieldExamples,
  PreviewCardExamples,
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
        <TabsExamples />
        <SliderExample />
        <ProgressExamples />
        <CollapsibleExamples />
        <ButtonsExamples />
        <DropdownMenuExample />
        */}
        <NumberFieldExamples />
        <MenuBarExamples />
        <TooltipExamples />
        <PreviewCardExamples />
      </div>
    </>
  );
}
