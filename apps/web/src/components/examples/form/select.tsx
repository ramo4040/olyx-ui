"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@olyx/react";

export const SelectExample = () => {
  return (
    <div
      style={{ display: "flex", width: 200, flexDirection: "column", gap: 12 }}
    >
      <Select disabled>
        <SelectTrigger>
          <SelectValue>Select an option</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1" disabled>
            Option 1
          </SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
        </SelectContent>
      </Select>
      <h4>Multiple Select</h4>
      <Select multiple>
        <SelectTrigger>
          <SelectValue>Select an option</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1" disabled>
            Option 1
          </SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
        </SelectContent>
      </Select>

      <h4>Grouped Select</h4>
      <Select>
        <SelectTrigger>
          <SelectValue>Select an option</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group 1</SelectLabel>
            <SelectItem value="group1-option1" disabled>
              Option 1
            </SelectItem>
            <SelectItem value="group1-option2">Option 2</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Group 2</SelectLabel>
            <SelectItem value="group2-option1">Option 1</SelectItem>
            <SelectItem value="group2-option2">Option 2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
