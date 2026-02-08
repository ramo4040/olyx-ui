"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@olyx/react/table";
import "./style.css";

export const ColorTable = () => {
  return (
    <Table data-ui="color-table">
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Color Name</TableHead>
          <TableHead>CSS Token</TableHead>
          <TableHead>Where to use</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(olyxColors)
          .flatMap(([_, colors]) => colors)
          .map((color) => (
            <TableRow key={color.toCopy} className="row">
              <TableCell>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: color.bg, color: color.onBg }}
                >
                  Aa
                </div>
              </TableCell>
              <TableCell>{color.name}</TableCell>
              <TableCell className="css-code">
                <code>{color.toCopy}</code>
              </TableCell>
              <TableCell>{color.description}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export const olyxColors = {
  Primary: [
    {
      name: "Primary",
      bg: "var(--color-primary)",
      onBg: "var(--color-on-primary)",
      toCopy: "--color-primary",
      description: "High-emphasis fills, primary actions, active states",
    },
    {
      name: "On Primary",
      bg: "var(--color-on-primary)",
      onBg: "var(--color-primary)",
      toCopy: "--color-on-primary",
      description: "Text and icons on primary color",
    },
    {
      name: "Primary Container",
      bg: "var(--color-primary-container)",
      onBg: "var(--color-on-primary-container)",
      toCopy: "--color-primary-container",
      description: "Standout container backgrounds",
    },
    {
      name: "On Primary Container",
      bg: "var(--color-on-primary-container)",
      onBg: "var(--color-primary-container)",
      toCopy: "--color-on-primary-container",
      description: "Text and icons on primary container",
    },
  ],
  Secondary: [
    {
      name: "Secondary",
      bg: "var(--color-secondary)",
      onBg: "var(--color-on-secondary)",
      toCopy: "--color-secondary",
      description: "Less prominent components, filter chips, tonal buttons",
    },
    {
      name: "On Secondary",
      bg: "var(--color-on-secondary)",
      onBg: "var(--color-secondary)",
      toCopy: "--color-on-secondary",
      description: "Text and icons on secondary color",
    },
    {
      name: "Secondary Container",
      bg: "var(--color-secondary-container)",
      onBg: "var(--color-on-secondary-container)",
      toCopy: "--color-secondary-container",
      description: "Tonal container backgrounds",
    },
    {
      name: "On Secondary Container",
      bg: "var(--color-on-secondary-container)",
      onBg: "var(--color-secondary-container)",
      toCopy: "--color-on-secondary-container",
      description: "Text and icons on secondary container",
    },
  ],
  Tertiary: [
    {
      name: "Tertiary",
      bg: "var(--color-tertiary)",
      onBg: "var(--color-on-tertiary)",
      toCopy: "--color-tertiary",
      description: "Contrasting accents, badges, input field highlights",
    },
    {
      name: "On Tertiary",
      bg: "var(--color-on-tertiary)",
      onBg: "var(--color-tertiary)",
      toCopy: "--color-on-tertiary",
      description: "Text and icons on tertiary color",
    },
    {
      name: "Tertiary Container",
      bg: "var(--color-tertiary-container)",
      onBg: "var(--color-on-tertiary-container)",
      toCopy: "--color-tertiary-container",
      description: "Accent container backgrounds",
    },
    {
      name: "On Tertiary Container",
      bg: "var(--color-on-tertiary-container)",
      onBg: "var(--color-tertiary-container)",
      toCopy: "--color-on-tertiary-container",
      description: "Text and icons on tertiary container",
    },
  ],
  Error: [
    {
      name: "Error",
      bg: "var(--color-error)",
      onBg: "var(--color-on-error)",
      toCopy: "--color-error",
      description: "Error states, destructive actions, validation errors",
    },
    {
      name: "On Error",
      bg: "var(--color-on-error)",
      onBg: "var(--color-error)",
      toCopy: "--color-on-error",
      description: "Text and icons on error color",
    },
    {
      name: "Error Container",
      bg: "var(--color-error-container)",
      onBg: "var(--color-on-error-container)",
      toCopy: "--color-error-container",
      description: "Error message backgrounds, alert containers",
    },
    {
      name: "On Error Container",
      bg: "var(--color-on-error-container)",
      onBg: "var(--color-error-container)",
      toCopy: "--color-on-error-container",
      description: "Text and icons on error container",
    },
  ],
  Success: [
    {
      name: "Success",
      bg: "var(--color-success)",
      onBg: "var(--color-on-success)",
      toCopy: "--color-success",
      description: "Success states, confirmations, positive feedback",
    },
    {
      name: "On Success",
      bg: "var(--color-on-success)",
      onBg: "var(--color-success)",
      toCopy: "--color-on-success",
      description: "Text and icons on success color",
    },
    {
      name: "Success Container",
      bg: "var(--color-success-container)",
      onBg: "var(--color-on-success-container)",
      toCopy: "--color-success-container",
      description: "Success message backgrounds",
    },
    {
      name: "On Success Container",
      bg: "var(--color-on-success-container)",
      onBg: "var(--color-success-container)",
      toCopy: "--color-on-success-container",
      description: "Text and icons on success container",
    },
  ],
  Info: [
    {
      name: "Info",
      bg: "var(--color-info)",
      onBg: "var(--color-on-info)",
      toCopy: "--color-info",
      description: "Informational states, tips, help text",
    },
    {
      name: "On Info",
      bg: "var(--color-on-info)",
      onBg: "var(--color-info)",
      toCopy: "--color-on-info",
      description: "Text and icons on info color",
    },
    {
      name: "Info Container",
      bg: "var(--color-info-container)",
      onBg: "var(--color-on-info-container)",
      toCopy: "--color-info-container",
      description: "Info message backgrounds",
    },
    {
      name: "On Info Container",
      bg: "var(--color-on-info-container)",
      onBg: "var(--color-info-container)",
      toCopy: "--color-on-info-container",
      description: "Text and icons on info container",
    },
  ],
  Warning: [
    {
      name: "Warning",
      bg: "var(--color-warning)",
      onBg: "var(--color-on-warning)",
      toCopy: "--color-warning",
      description: "Warning states, caution indicators",
    },
    {
      name: "On Warning",
      bg: "var(--color-on-warning)",
      onBg: "var(--color-warning)",
      toCopy: "--color-on-warning",
      description: "Text and icons on warning color",
    },
    {
      name: "Warning Container",
      bg: "var(--color-warning-container)",
      onBg: "var(--color-on-warning-container)",
      toCopy: "--color-warning-container",
      description: "Warning message backgrounds",
    },
    {
      name: "On Warning Container",
      bg: "var(--color-on-warning-container)",
      onBg: "var(--color-warning-container)",
      toCopy: "--color-on-warning-container",
      description: "Text and icons on warning container",
    },
  ],
  Surface: [
    {
      name: "Background",
      bg: "var(--color-background)",
      onBg: "var(--color-on-background)",
      toCopy: "--color-background",
      description: "Default page background",
    },
    {
      name: "On Background",
      bg: "var(--color-on-background)",
      onBg: "var(--color-background)",
      toCopy: "--color-on-background",
      description: "Default text color on background",
    },
    {
      name: "Surface",
      bg: "var(--color-surface)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-surface",
      description: "Card and component backgrounds",
    },
    {
      name: "On Surface",
      bg: "var(--color-on-surface)",
      onBg: "var(--color-surface)",
      toCopy: "--color-on-surface",
      description: "Text and icons on surface",
    },
    {
      name: "Surface Variant",
      bg: "var(--color-surface-variant)",
      onBg: "var(--color-on-surface-variant)",
      toCopy: "--color-surface-variant",
      description: "Subtle surface differentiation",
    },
    {
      name: "On Surface Variant",
      bg: "var(--color-on-surface-variant)",
      onBg: "var(--color-surface-variant)",
      toCopy: "--color-on-surface-variant",
      description: "Text on surface variant",
    },
    {
      name: "Surface Container Lowest",
      bg: "var(--color-surface-container-lowest)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-surface-container-lowest",
      description: "Lowest elevation surface",
    },
    {
      name: "Surface Container Low",
      bg: "var(--color-surface-container-low)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-surface-container-low",
      description: "Low elevation surface",
    },
    {
      name: "Surface Container",
      bg: "var(--color-surface-container)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-surface-container",
      description: "Default container elevation",
    },
    {
      name: "Surface Container High",
      bg: "var(--color-surface-container-high)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-surface-container-high",
      description: "High elevation surface",
    },
    {
      name: "Surface Container Highest",
      bg: "var(--color-surface-container-highest)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-surface-container-highest",
      description: "Highest elevation surface",
    },
  ],
  Outline: [
    {
      name: "Outline",
      bg: "var(--color-outline)",
      onBg: "var(--color-surface)",
      toCopy: "--color-outline",
      description: "Borders, dividers, focus rings",
    },
    {
      name: "Outline Variant",
      bg: "var(--color-outline-variant)",
      onBg: "var(--color-on-surface)",
      toCopy: "--color-outline-variant",
      description: "Subtle borders, decorative dividers",
    },
  ],
};
