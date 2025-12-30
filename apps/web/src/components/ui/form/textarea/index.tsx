import "./style.css";

function Textarea(props: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" {...props} />;
}

export { Textarea };
