import "./style.css";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

type BadgeProps = useRender.ComponentProps<"span"> & {
  variant?: "filled" | "light" | "lighter" | "stroke";
  size?: "sm" | "md";
  shape?: "rounded" | "smoothed";
  mode?: "default" | "error";
  doted?: boolean;
  disabled?: boolean;
};

function Badge({
  render,
  variant,
  size,
  doted,
  shape,
  mode,
  disabled,
  ...props
}: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        "aria-disabled": disabled,
      },
      props,
    ),
    render,
    state: {
      ui: "badge",
      variant: variant || "default",
      size: size || "md",
      shape: shape || "smoothed",
      mode: mode || "default",
      doted: !!doted,
    },
  });
}

export { Badge };
