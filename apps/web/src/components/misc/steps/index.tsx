import "./style.css";
import type { ComponentProps, FC } from "react";

const Steps: FC<ComponentProps<"div">> = (props) => {
  return <div data-ui="docs-steps" {...props} />;
};

const Step: FC<ComponentProps<"h3">> = (props) => {
  return <h3 {...props} />;
};

export { Steps, Step };
