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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@olyx/react/select";
import { useEffect, useState } from "react";
import { type Color, parseColor } from "react-aria-components";

const COLOR_CONFIG = {
  DEFAULT_HUE: 250,
  DEFAULT_CHROMA: 0.18,
  LIGHTNESS: 50,
  CHROMA_MIN: 0.01,
  CHROMA_MAX: 0.32,
} as const;

const HARMONY_OPTIONS = [
  { label: "Complementary", value: "complementary" },
  { label: "Triadic", value: "triadic" },
  { label: "Analogous", value: "analogous" },
  { label: "Monochromatic", value: "monochromatic" },
] as const;

type Harmony = (typeof HARMONY_OPTIONS)[number]["value"];

const PREVIEW_COLORS = [
  { name: "Primary", className: "primary" },
  { name: "Secondary", className: "secondary" },
  { name: "Tertiary", className: "tertiary" },
] as const;

const HARMONY_OFFSETS: Record<
  Harmony,
  { secondary: number; tertiary: number }
> = {
  complementary: { secondary: 180, tertiary: 150 },
  triadic: { secondary: 120, tertiary: 240 },
  analogous: { secondary: 30, tertiary: -30 },
  monochromatic: { secondary: 0, tertiary: 0 },
};

const clampChroma = (value: number): number =>
  Math.max(COLOR_CONFIG.CHROMA_MIN, Math.min(value, COLOR_CONFIG.CHROMA_MAX));

const getCSSVariable = (property: string): number => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    property,
  );
  return Number.parseFloat(value) || 0;
};

const chromaToSaturation = (chroma: number): number =>
  (clampChroma(chroma) / COLOR_CONFIG.CHROMA_MAX) * 100;

const saturationToChroma = (saturation: number): number =>
  clampChroma((saturation / 100) * COLOR_CONFIG.CHROMA_MAX);

const createSliderColor = (hue: number, chroma: number): string =>
  `hsl(${hue}, ${chromaToSaturation(chroma)}%, ${COLOR_CONFIG.LIGHTNESS}%)`;

const getOKLCHChannels = (color: Color) => {
  const hsl = color.toFormat("hsl");
  return {
    hue: hsl.getChannelValue("hue"),
    chroma: saturationToChroma(hsl.getChannelValue("saturation")),
  };
};

const getRootHarmony = (): Harmony => {
  const harmony = document.documentElement.dataset.harmony;
  return HARMONY_OPTIONS.some((option) => option.value === harmony)
    ? (harmony as Harmony)
    : "monochromatic";
};

export const DrawerColorPicker = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [currentValue, setCurrentValue] = useState(() =>
    parseColor(
      createSliderColor(COLOR_CONFIG.DEFAULT_HUE, COLOR_CONFIG.DEFAULT_CHROMA),
    ),
  );
  const [harmony, setHarmony] = useState<Harmony>("monochromatic");

  useEffect(() => {
    const hue = getCSSVariable("--base-hue") || COLOR_CONFIG.DEFAULT_HUE;
    const chroma = clampChroma(
      getCSSVariable("--base-chroma") || COLOR_CONFIG.DEFAULT_CHROMA,
    );
    setCurrentValue(parseColor(createSliderColor(hue, chroma)));
    setHarmony(getRootHarmony());
  }, []);

  const handleSave = () => {
    const { hue, chroma } = getOKLCHChannels(currentValue);
    const safeChroma = clampChroma(chroma);

    setCurrentValue(parseColor(createSliderColor(hue, safeChroma)));

    document.documentElement.style.setProperty("--base-hue", hue.toString());
    document.documentElement.style.setProperty(
      "--base-chroma",
      safeChroma.toString(),
    );
    document.documentElement.dataset.harmony = harmony;
  };

  const { hue, chroma } = getOKLCHChannels(currentValue);
  const harmonyOffsets = HARMONY_OFFSETS[harmony];

  return (
    <Drawer modal={false}>
      <Tooltip>
        <TooltipTrigger render={<DrawerTrigger render={children} />} />
        <TooltipContent>Change Color</TooltipContent>
      </Tooltip>
      <DrawerContent
        className="color-picker-drawer"
        data-custom-theme
        data-harmony={harmony}
        style={
          {
            "--base-hue": hue,
            "--base-chroma": chroma,
            "--secondary-offset": harmonyOffsets.secondary,
            "--tertiary-offset": harmonyOffsets.tertiary,
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

          <div className="theme-controls">
            <Select
              value={harmony}
              onValueChange={(value) => setHarmony(value as Harmony)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select harmony" />
              </SelectTrigger>
              <SelectContent>
                {HARMONY_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

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
              label="Chroma"
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
