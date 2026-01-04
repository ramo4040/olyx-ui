"use client";

import {
  Add01Icon,
  MinusSignIcon,
  TextAlignCenterIcon,
  TextAlignLeft01Icon,
  TextAlignRight01Icon,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Toggle,
  ToggleGroup,
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";

export function ToolbarExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Text Formatting Toolbar */}
      <Toolbar>
        <Select>
          <SelectTrigger size="sm">
            <SelectValue>Font 1</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="f1">Font 1</SelectItem>
            <SelectItem value="f2">Font 2</SelectItem>
            <SelectItem value="f3">Font 3</SelectItem>
            <SelectItem value="f4">Font 4</SelectItem>
          </SelectContent>
        </Select>

        <NumberField defaultValue={16}>
          <NumberFieldGroup>
            <NumberFieldIncrement
              render={
                <Button variant="neutral" mode="lighter" size="sm" asIcon>
                  <HugeiconsIcon icon={Add01Icon} />
                </Button>
              }
            />

            <NumberFieldInput />

            <NumberFieldDecrement
              render={
                <Button variant="neutral" mode="lighter" size="sm" asIcon>
                  <HugeiconsIcon icon={MinusSignIcon} />
                </Button>
              }
            />
          </NumberFieldGroup>
        </NumberField>

        <ToolbarSeparator />

        <ToggleGroup variant="ghost" grouped multiple>
          <ToolbarButton
            render={
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle aria-label="Bold" variant="ghost">
                      <HugeiconsIcon icon={TextBoldIcon} />
                    </Toggle>
                  }
                />
                <TooltipContent>Bold</TooltipContent>
              </Tooltip>
            }
          />

          <ToolbarButton
            render={
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle aria-label="Italic" variant="ghost">
                      <HugeiconsIcon icon={TextItalicIcon} />
                    </Toggle>
                  }
                />

                <TooltipContent>Italic</TooltipContent>
              </Tooltip>
            }
          />

          <ToolbarButton
            render={
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle aria-label="Underline" variant="ghost">
                      <HugeiconsIcon icon={TextUnderlineIcon} />
                    </Toggle>
                  }
                />

                <TooltipContent>Underline</TooltipContent>
              </Tooltip>
            }
          />
        </ToggleGroup>

        <ToolbarSeparator />

        <ToggleGroup variant="ghost" grouped={false}>
          <ToolbarButton
            render={
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle aria-label="Align left" variant="ghost">
                      <HugeiconsIcon icon={TextAlignLeft01Icon} />
                    </Toggle>
                  }
                />
                <TooltipContent>Align Left</TooltipContent>
              </Tooltip>
            }
          />
          <ToolbarButton
            render={
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle aria-label="Align center" variant="ghost">
                      <HugeiconsIcon icon={TextAlignCenterIcon} />
                    </Toggle>
                  }
                />

                <TooltipContent>Align Center</TooltipContent>
              </Tooltip>
            }
          />
          <ToolbarButton
            render={
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Toggle aria-label="Align right" variant="ghost">
                      <HugeiconsIcon icon={TextAlignRight01Icon} />
                    </Toggle>
                  }
                />

                <TooltipContent>Align Right</TooltipContent>
              </Tooltip>
            }
          />
        </ToggleGroup>
      </Toolbar>
    </div>
  );
}
