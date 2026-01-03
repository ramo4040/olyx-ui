import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui";

export const CollapsibleExamples = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Collapsible>
        <CollapsibleTrigger>Click to Toggle</CollapsibleTrigger>
        <CollapsiblePanel>
          <p>
            This is the content inside the collapsible panel. You can put any
            information you want here, and it will be shown or hidden when the
            trigger is clicked.
          </p>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  );
};
