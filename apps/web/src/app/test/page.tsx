"use client";

import { Switch } from "@olyx/react";
import { useTheme } from "next-themes";
import {
  AutocompleteExamples,
  ComboboxExamples,
  CommandExample,
} from "@/components/examples";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div style={{ paddingInline: 150, paddingBlock: 50 }}>
      <header
        style={{
          marginBottom: 100,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Switch
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        />
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

        <TableExample />
        <ButtonsExamples />
        <NavigationMenuExample />
        <ComboboxExamples />
        <AutocompleteExamples />
        */}

        <CommandExample />
      </div>
    </div>
  );
}
