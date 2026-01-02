import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import "./style.css";

function TooltipProvider({
  delay = 0,
  closeDelay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return <TooltipPrimitive.Provider delay={delay} {...props} />;
}

function Tooltip(props: TooltipPrimitive.Root.Props) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger(props: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger {...props} />;
}

function TooltipContent({
  align = "center",
  alignOffset = 0,
  side = "top",
  sideOffset = 6,
  size = "md",
  children,
  ...props
}: TooltipPrimitive.Popup.Props & { size?: "sm" | "md" | "lg" } & Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal data-ui="tooltip-portal">
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <TooltipPrimitive.Popup
          data-ui="tooltip-content"
          data-size={size}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent };
