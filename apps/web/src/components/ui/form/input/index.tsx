import "./style.css";
import { Input as InputPrimitive } from "@base-ui/react/input";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return <InputPrimitive type={type} data-slot="input" {...props} />;
}

function InputWrapper({ children, ...props }: React.ComponentProps<"label">) {
	return (
		<label data-slot="input-wrapper" {...props}>
			{children}
		</label>
	);
}

function InputIcon({ children, ...props }: React.ComponentProps<"span">) {
	return (
		<span {...props} data-slot="input-icon">
			{children}
		</span>
	);
}

export { Input, InputWrapper, InputIcon };
