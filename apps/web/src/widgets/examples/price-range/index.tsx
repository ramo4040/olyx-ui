"use client";

import "./style.css";
import { useState } from "react";
import {
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
  Slider,
} from "@/components/ui";

export const PriceRange = () => {
  const [range, setRange] = useState([290, 600]);

  return (
    <div data-ui="price-range">
      <Fieldset>
        <FieldsetLegend>Set your budget range</FieldsetLegend>
        <FieldsetDescription>
          Drag handles to adjust your price comfort zone.
        </FieldsetDescription>

        <div className="price-display">
          <span className="price-value">${range[0]}</span>
          <span className="price-separator">—</span>
          <span className="price-value">${range[1]}</span>
        </div>

        <Slider
          value={range}
          onValueChange={(v) => setRange(v as number[])}
          min={0}
          max={1000}
          step={10}
          aria-label="Price range"
        />
      </Fieldset>
    </div>
  );
};
