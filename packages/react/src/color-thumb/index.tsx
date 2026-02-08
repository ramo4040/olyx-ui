"use client";

import {
  ColorThumb as AriaColorThumb,
  type ColorThumbProps,
} from "react-aria-components";

import "./style.css";

export function ColorThumb(props: ColorThumbProps) {
  return <AriaColorThumb {...props} />;
}
