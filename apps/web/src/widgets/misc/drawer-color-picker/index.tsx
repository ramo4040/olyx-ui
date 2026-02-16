"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@olyx/react";
import "./style.css";
import { Button } from "@olyx/react/button";
import { ColorSlider } from "@olyx/react/color-slider";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@olyx/react/drawer";
import { useEffect, useState } from "react";
import { type Color, parseColor } from "react-aria-components";

const COLOR_CONFIG = {
  DEFAULT_HUE: 250,
  DEFAULT_SATURATION: 60,
  LIGHTNESS: 50,
  SATURATION_MIN: 5,
  SATURATION_MAX: 75,
} as const;

const PREVIEW_COLORS = [
  { name: "Primary", className: "primary" },
  { name: "Secondary", className: "secondary" },
  { name: "Tertiary", className: "tertiary" },
] as const;

const createHSL = (hue: number, saturation: number): string =>
  `hsl(${hue}, ${saturation}%, ${COLOR_CONFIG.LIGHTNESS}%)`;

const clampSaturation = (value: number): number =>
  Math.max(
    COLOR_CONFIG.SATURATION_MIN,
    Math.min(value, COLOR_CONFIG.SATURATION_MAX),
  );

const getCSSVariable = (property: string): number => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    property,
  );
  return Number.parseInt(value, 10) || 0;
};

const getHSLChannels = (color: Color) => {
  const hsl = color.toFormat("hsl");
  return {
    hue: hsl.getChannelValue("hue"),
    saturation: hsl.getChannelValue("saturation"),
  };
};

export const DrawerColorPicker = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [currentValue, setCurrentValue] = useState(() =>
    parseColor(
      createHSL(COLOR_CONFIG.DEFAULT_HUE, COLOR_CONFIG.DEFAULT_SATURATION),
    ),
  );

  useEffect(() => {
    const hue = getCSSVariable("--brand-hue") || COLOR_CONFIG.DEFAULT_HUE;
    const saturation = clampSaturation(
      getCSSVariable("--brand-saturation") || COLOR_CONFIG.DEFAULT_SATURATION,
    );
    setCurrentValue(parseColor(createHSL(hue, saturation)));
  }, []);

  const handleSave = () => {
    const { hue, saturation } = getHSLChannels(currentValue);
    const safeSaturation = clampSaturation(saturation);

    setCurrentValue(parseColor(createHSL(hue, safeSaturation)));

    document.documentElement.style.setProperty("--brand-hue", hue.toString());
    document.documentElement.style.setProperty(
      "--brand-saturation",
      `${safeSaturation}%`,
    );
  };

  const { hue, saturation } = getHSLChannels(currentValue);

  return (
    <Drawer modal={false}>
      <Tooltip>
        <TooltipTrigger render={<DrawerTrigger render={children} />} />
        <TooltipContent>Change Color</TooltipContent>
      </Tooltip>
      <DrawerContent
        className="color-picker-drawer"
        data-custom-theme
        style={
          {
            "--brand-hue": hue,
            "--brand-saturation": `${saturation}%`,
          } as React.CSSProperties
        }
      >
        <DrawerHeader>
          <DrawerTitle>Pick Color</DrawerTitle>
        </DrawerHeader>

        <div className="setup-color-container">
          <div className="colors">
            {PREVIEW_COLORS.map(({ name, className }) => (
              <div key={name} className="color">
                <p>{name}</p>
                <div className={className} />
              </div>
            ))}
          </div>

          {currentValue.toString()}

          <div className="sliders">
            <ColorSlider
              channel="hue"
              value={currentValue}
              onChange={setCurrentValue}
              label="Hue"
            />
            <ColorSlider
              channel="saturation"
              value={currentValue}
              onChange={setCurrentValue}
              label="Saturation"
            />
          </div>
        </div>

        <DrawerFooter>
          <Button onClick={handleSave}>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
