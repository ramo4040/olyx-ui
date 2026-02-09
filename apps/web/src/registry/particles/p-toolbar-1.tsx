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
import { Button } from "@olyx/react/button";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@olyx/react/number-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@olyx/react/select";
import { Toggle } from "@olyx/react/toggle";
import { ToggleGroup } from "@olyx/react/toggle-group";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarSeparator,
} from "@olyx/react/toolbar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@olyx/react/tooltip";

export default function Particle() {
  return (
    <Toolbar>
      <Select>
        <ToolbarButton render={<SelectTrigger size="sm" />}>
          <SelectValue>Font 1</SelectValue>
        </ToolbarButton>
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

          <ToolbarInput render={<NumberFieldInput />} />

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

      <ToolbarGroup render={<ToggleGroup variant="ghost" grouped multiple />}>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToolbarButton
                render={
                  <Toggle aria-label="Bold" variant="ghost">
                    <HugeiconsIcon icon={TextBoldIcon} />
                  </Toggle>
                }
              />
            }
          />
          <TooltipContent>Bold</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <ToolbarButton
                render={
                  <Toggle aria-label="Italic" variant="ghost">
                    <HugeiconsIcon icon={TextItalicIcon} />
                  </Toggle>
                }
              />
            }
          />
          <TooltipContent>Italic</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <ToolbarButton
                render={
                  <Toggle aria-label="Underline" variant="ghost">
                    <HugeiconsIcon icon={TextUnderlineIcon} />
                  </Toggle>
                }
              />
            }
          />
          <TooltipContent>Underline</TooltipContent>
        </Tooltip>
      </ToolbarGroup>

      <ToolbarSeparator />

      <ToolbarGroup render={<ToggleGroup variant="ghost" grouped={false} />}>
        <Tooltip>
          <TooltipTrigger
            render={
              <ToolbarButton
                render={
                  <Toggle aria-label="Align left" variant="ghost">
                    <HugeiconsIcon icon={TextAlignLeft01Icon} />
                  </Toggle>
                }
              />
            }
          />
          <TooltipContent>Align Left</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <ToolbarButton
                render={
                  <Toggle aria-label="Align center" variant="ghost">
                    <HugeiconsIcon icon={TextAlignCenterIcon} />
                  </Toggle>
                }
              />
            }
          />
          <TooltipContent>Align Center</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <ToolbarButton
                render={
                  <Toggle aria-label="Align right" variant="ghost">
                    <HugeiconsIcon icon={TextAlignRight01Icon} />
                  </Toggle>
                }
              />
            }
          />
          <TooltipContent>Align Right</TooltipContent>
        </Tooltip>
      </ToolbarGroup>
    </Toolbar>
  );
}
