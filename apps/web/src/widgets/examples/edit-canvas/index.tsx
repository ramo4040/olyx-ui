"use client";

import {
  Input,
  InputAffix,
  InputWrapper,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Toggle,
} from "@/components/ui";
import "./style.css";
import { SquareLock02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

export const EditCanvas = () => {
  const [value, setValue] = useState(50);
  return (
    <div data-ui="edit-canvas">
      <header>
        <p>Show frame</p>
        <Switch defaultChecked />
      </header>

      <Separator className="separator" />

      <div className="setting-group">
        <div className="head">
          <p>Artboard</p>
        </div>

        <div className="input-group">
          <InputWrapper>
            <InputAffix inline>X-Post</InputAffix>
            <Input placeholder="800x600" />
          </InputWrapper>

          <Toggle variant="ghost" defaultPressed>
            <HugeiconsIcon icon={SquareLock02Icon} />
          </Toggle>
        </div>

        <div className="input-group">
          <InputWrapper>
            <InputAffix inline>X</InputAffix>
            <Input placeholder="800" />
          </InputWrapper>

          <InputWrapper>
            <InputAffix inline>Y</InputAffix>
            <Input placeholder="600" />
          </InputWrapper>

          <p className="px">px</p>
        </div>

        <Separator className="separator" />

        <div className="setting-group">
          <div className="head">
            <p>Camera</p>
          </div>

          <div className="input-group">
            <Select>
              <SelectTrigger>
                <SelectValue>Select an Camera</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Perspective</SelectItem>
                <SelectItem value="option2">Isometric</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="separator" />

        <div className="setting-group">
          <div className="head">
            <p>Distortion</p>
            <p>{value}</p>
          </div>
          <div className="input-group">
            <Slider
              onValueChange={(val) => setValue(val as number)}
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
