import "./style.css";

function ButtonGroup({
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <div
      role="group"
      data-ui="button-group"
      data-orientation={orientation}
      {...props}
    />
  );
}

export { ButtonGroup };
