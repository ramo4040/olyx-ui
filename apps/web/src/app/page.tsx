"use client";

import { useEffect, useState } from "react";
import {
  AccordionExample,
  AlertDialogExample,
  AlertExample,
  AvatarExamples,
  BannerExamples,
  BreadCrumbExample,
  ButtonsExamples,
  CheckboxExample,
  CollapsibleExamples,
  ComboboxExamples,
  ContextMenuExample,
  DrawerExample,
  DropdownMenuExample,
  FieldExample,
  InputsExample,
  KbdExample,
  MenuBarExamples,
  NavigationMenuExample,
  NumberFieldExamples,
  PopoverExamples,
  PreviewCardExamples,
  ProgressExamples,
  RadioExample,
  RatingReviewExample,
  ScrollAreaExample,
  SelectExample,
  SeparatorExample,
  SliderExample,
  SpinnerExamples,
  StatusBadgeExample,
  SwitchExample,
  TextareaExample,
  ToastExamples,
  ToogleExample,
  ToolbarExample,
  TooltipExamples,
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
        <NavigationMenuExample />
        <StatusBadgeExample />
        <DropdownMenuExample />
        <SelectExample />
        <ComboboxExamples />
        <BannerExamples />
        <RatingBarExamples />
        <ButtonsExamples />
        <ToastExamples />

        <ComboboxExamples />
      </div>
    </>
  );
}
