"use client";

import "./style.css";

import { Button } from "@olyx/react/button";
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@olyx/react/collapsible";
import { Separator } from "@olyx/react/separator";
import * as React from "react";

export function CodeCollapsibleWrapper({
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible
      className="code-collapsible-wrapper"
      onOpenChange={setIsOpened}
      open={isOpened}
      {...props}
    >
      <div className="trigger-container">
        <CollapsibleTrigger
          className="trigger-button"
          render={
            <Button variant="neutral" mode="ghost" size="sm">
              {isOpened ? "Expand" : "Collapse"}
            </Button>
          }
        />
        <Separator orientation="vertical" className="trigger-separator" />
      </div>

      <CollapsiblePanel
        className="collapsible-panel"
        hidden={false}
        keepMounted={true}
      >
        {children}
      </CollapsiblePanel>

      <CollapsibleTrigger className="bottom-trigger">
        {isOpened ? "Expand" : "Collapse"}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
