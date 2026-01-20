"use client";

import { useEffect, useState } from "react";
import { ComboboxExamples, NavigationMenuExample } from "@/components/examples";
import { Switch } from "@/components/ui";

export default function Home() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <div style={{ paddingInline: 150, paddingBlock: 50 }}>
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
         <SliderExample />
         <ProgressExamples />
         <CollapsibleExamples />
         <PreviewCardExamples />
         <TooltipExamples />
         <ToogleExample />
         <AlertExample />
         <NumberFieldExamples />
         <ContextMenuExample />
         <ScrollAreaExample />
         <AlertDialogExample />
         <MenuBarExamples />
         <ToolbarExample />
         <InputsExample />
         <RatingReviewExample />
         <BreadCrumbExample />
         <StatusBadgeExample />
         <DropdownMenuExample />
         <SelectExample />
         <ComboboxExamples />
         <BannerExamples />
         <RatingBarExamples />
         <ButtonsExamples />
         <ToastExamples />
         <TagExamples />
         <TableExample />
         */}

        <ComboboxExamples />
        <NavigationMenuExample />
      </div>
    </div>
  );
}
