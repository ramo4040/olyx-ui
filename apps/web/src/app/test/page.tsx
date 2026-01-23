"use client";

import { useEffect, useState } from "react";
import {
  BadgesExamples,
  ButtonsExamples,
  ComboboxExamples,
  InputsExample,
  NavigationMenuExample,
  SelectExample,
  TableExample,
} from "@/components/examples";
import { RatingBarExamples } from "@/components/examples/data-display/rating-bar";
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
         <RatingReviewExample />
         <BreadCrumbExample />
         <StatusBadgeExample />
         <DropdownMenuExample />
         <ComboboxExamples />
         <BannerExamples />
         <ToastExamples />
         <TagExamples />
         <BadgesExamples />
         <RatingBarExamples />
        <SelectExample />
        <InputsExample />

        <ComboboxExamples />
        <TableExample />
        <ButtonsExamples />
        */}
        <NavigationMenuExample />
      </div>
    </div>
  );
}
