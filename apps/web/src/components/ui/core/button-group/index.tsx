import { Button } from "../button";
import "./style.css";

function ButtonGroup({
  orientation,
  size = "sm",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "sm" | "xs" | "xxs";
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      role="group"
      data-ui="button-group"
      data-size={size}
      data-orientation={orientation}
      {...props}
    />
  );
}

function ButtonGroupItem(props: React.ComponentProps<"button">) {
  return (
    <Button
      variant="neutral"
      mode="ghost"
      data-slot="button-group-item"
      {...props}
    />
  );
}

export { ButtonGroup, ButtonGroupItem };
