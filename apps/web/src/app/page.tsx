"use client";

import { useEffect, useState } from "react";
import { ComboboxExamples, StatusBadgeExample } from "@/components/examples";
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
         <RadioExample />
         <SwitchExample />
         <TextareaExample />
         <SpinnerExamples />
         <CheckboxExample />
         <KbdExample />
         <FieldExample />
         <SeparatorExample />
         <AccordionExample />
         <DrawerExample />
         <PopoverExamples />
         <TabsExamples />
         <SliderExample />
         <ProgressExamples />
         <CollapsibleExamples />
         <ButtonsExamples />
         <PreviewCardExamples />
         <TooltipExamples />
         <ToogleExample />
         <AlertExample />
         <NumberFieldExamples />
         <ContextMenuExample />
         <ScrollAreaExample />
         <DialogExamples />
         <AlertDialogExample />
        <DropdownMenuExample />
        <MenuBarExamples />
        <ToolbarExample />
        <NavigationMenuExample />
        <InputsExample />
        <ToastExamples />
        <SelectExample />
        <ButtonGroupExample />
        */}

        <ComboboxExamples />
        <StatusBadgeExample />
      </div>
    </>
  );
}
