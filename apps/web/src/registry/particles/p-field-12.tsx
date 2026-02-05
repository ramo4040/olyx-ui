"use client";

import { Field, FieldLabel } from "@olyx/react/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@olyx/react/select";

export default function Particle() {
  return (
    <Field>
      <FieldLabel>Role</FieldLabel>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="editor">Editor</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  );
}
