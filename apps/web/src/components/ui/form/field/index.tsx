import "./style.css";
import { Field as FieldPrimitive } from "@base-ui/react/field";
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";

function Field(props: FieldPrimitive.Root.Props) {
  return <FieldPrimitive.Root role="group" data-slot="field" {...props} />;
}

function FieldLabel(props: FieldPrimitive.Label.Props) {
  return <FieldPrimitive.Label data-slot="field-label" {...props} />;
}

function FieldDescription(props: FieldPrimitive.Description.Props) {
  return (
    <FieldPrimitive.Description data-slot="field-description" {...props} />
  );
}

function FieldError(props: FieldPrimitive.Error.Props) {
  return <FieldPrimitive.Error data-slot="field-error" {...props} />;
}

function FieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="field-group" {...props} />;
}

function Fieldset(props: FieldsetPrimitive.Root.Props) {
  return <FieldsetPrimitive.Root data-slot="fieldset" {...props} />;
}

function FieldsetDescription(props: React.ComponentProps<"p">) {
  return <p {...props} data-slot="fieldset-description" />;
}

function FieldsetLegend(props: FieldsetPrimitive.Legend.Props) {
  return <FieldsetPrimitive.Legend data-slot="fieldset-legend" {...props} />;
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  Fieldset,
  FieldsetDescription,
  FieldsetLegend,
  FieldGroup,
};
