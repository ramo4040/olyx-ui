import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import "./style.css";
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import { HugeiconsIcon } from "@hugeicons/react";

function Collapsible(props: CollapsiblePrimitive.Root.Props) {
  return <CollapsiblePrimitive.Root data-ui="collapsible" {...props} />;
}

function CollapsibleTrigger({
  children,
  ...props
}: CollapsiblePrimitive.Trigger.Props) {
  return (
    <CollapsiblePrimitive.Trigger data-ui="collapsible-trigger" {...props}>
      <HugeiconsIcon icon={ArrowDown01Icon} />
      {children}
    </CollapsiblePrimitive.Trigger>
  );
}

function CollapsiblePanel(props: CollapsiblePrimitive.Panel.Props) {
  return <CollapsiblePrimitive.Panel data-ui="collapsible-panel" {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
