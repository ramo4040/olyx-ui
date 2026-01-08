import "../../shared/select-base.css";
import "./style.css";
import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { Cancel01Icon, UnfoldMoreIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../../core/button";
import { Input, InputWrapper } from "../input";

const Combobox = ComboboxPrimitive.Root;

function ComboboxValue(props: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

function ComboboxTrigger({
  children,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      render={
        <Button variant="neutral" mode="ghost" size="sm" asIcon>
          <HugeiconsIcon icon={UnfoldMoreIcon} />
        </Button>
      }
      {...props}
    />
  );
}

function ComboboxClear(props: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={
        <Button variant="neutral" mode="ghost" size="sm" asIcon>
          <HugeiconsIcon icon={Cancel01Icon} />
        </Button>
      }
      {...props}
    />
  );
}

function ComboboxInput({
  disabled = false,
  showClear = true,
  showTrigger = true,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) {
  return (
    <InputWrapper data-slot="combobox-input">
      <ComboboxPrimitive.Input
        render={<Input disabled={disabled} />}
        {...props}
      />

      <div data-ui="combobox-input-actions">
        {showClear && <ComboboxClear />}
        {showTrigger && <ComboboxTrigger />}
      </div>
    </InputWrapper>
  );
}

function ComboboxContent({
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        data-ui="combobox-positioner"
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
      >
        <ComboboxPrimitive.Popup
          data-ui="combobox-content"
          data-chips={!!anchor}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxEmpty(props: ComboboxPrimitive.Empty.Props) {
  return <ComboboxPrimitive.Empty {...props} />;
}

function ComboboxList(props: ComboboxPrimitive.List.Props) {
  return <ComboboxPrimitive.List data-slot="combobox-list" {...props} />;
}

function ComboboxItem({ children, ...props }: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item data-ui="combobox-item" {...props}>
      {children}
      <ComboboxPrimitive.ItemIndicator data-ui="combobox-item-indicator" />
    </ComboboxPrimitive.Item>
  );
}

function ComboboxChips(
  props: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> &
    ComboboxPrimitive.Chips.Props,
) {
  return <ComboboxPrimitive.Chips data-ui="combobox-chips" {...props} />;
}

function ComboboxChip({
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  showRemove?: boolean;
}) {
  return (
    <ComboboxPrimitive.Chip data-ui="combobox-chip" {...props}>
      {children}

      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          data-slot="combobox-chip-remove"
          render={<Button variant="neutral" mode="ghost" size="sm" asIcon />}
        >
          <HugeiconsIcon icon={Cancel01Icon} />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
}

function ComboboxChipsInput(props: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input data-slot="combobox-chips-input" {...props} />
  );
}

export {
  Combobox,
  ComboboxValue,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
};
