import "./style.css";
import { Input as InputPrimitive } from "@base-ui/react/input";

function Input({ className, type, ...props }: InputPrimitive.Props) {
  return <InputPrimitive type={type} data-ui="input" {...props} />;
}

function InputWrapper({ children, ...props }: React.ComponentProps<"label">) {
  return (
    <label data-ui="input-wrapper" {...props}>
      {children}
    </label>
  );
}

function InputIcon({ children, ...props }: React.ComponentProps<"span">) {
  return (
    <span {...props} data-ui="input-icon">
      {children}
    </span>
  );
}

function InputAffix({
  children,
  inline = false,
  ...props
}: React.ComponentProps<"span"> & {
  inline?: boolean;
}) {
  return (
    <span {...props} data-ui="input-affix" data-inline={inline}>
      {children}
    </span>
  );
}

export { Input, InputWrapper, InputIcon, InputAffix };
