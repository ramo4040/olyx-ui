"use client";

import "./style.css";
import { ColorThumb } from "@olyx/react/color-thumb";
import { Field, FieldLabel } from "@olyx/react/field";
import {
  ColorSlider as AriaColorSlider,
  type ColorSliderProps as AriaColorSliderProps,
  SliderOutput,
  SliderTrack,
} from "react-aria-components";

export interface ColorSliderProps extends AriaColorSliderProps {
  label?: string;
}

export function ColorSlider({ label, ...props }: ColorSliderProps) {
  return (
    <Field>
      <AriaColorSlider {...props}>
        <FieldLabel className="react-aria-Label">{label}</FieldLabel>
        <SliderOutput />
        <SliderTrack
          style={({ defaultStyle }) => ({
            background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
          })}
        >
          <ColorThumb />
        </SliderTrack>
      </AriaColorSlider>
    </Field>
  );
}
