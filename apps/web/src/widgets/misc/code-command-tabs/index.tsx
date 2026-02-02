"use client";

import "./style.css";
import { ComputerTerminal01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ScrollArea, Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react";
import React from "react";
import { CopyButton } from "@/components/misc";
import { useCopy } from "@/hooks/use-copy";
import { useConfig } from "@/lib/use-config";

type Props = React.ComponentProps<typeof Tabs> & {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
};

export function CodeCommandTabs({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
  ...props
}: Props) {
  const [config, setConfig] = useConfig();

  const packageManager = config.packageManager || "pnpm";

  const tabs = React.useMemo(() => {
    return {
      bun: __bun__,
      npm: __npm__,
      pnpm: __pnpm__,
      yarn: __yarn__,
    };
  }, [__npm__, __pnpm__, __yarn__, __bun__]);

  return (
    <Tabs
      onValueChange={(value) => {
        setConfig({
          ...config,
          packageManager: value as "pnpm" | "npm" | "yarn" | "bun",
        });
      }}
      value={packageManager}
      data-slot="code-command-tabs"
      {...props}
    >
      <div className="header">
        <HugeiconsIcon icon={ComputerTerminal01Icon} className="icon" />

        <TabsList>
          {Object.entries(tabs).map(([key]) => {
            return (
              <TabsTab key={key} value={key}>
                {key}
              </TabsTab>
            );
          })}
        </TabsList>

        <CopyButton value={tabs[packageManager] || ""} className="btn" />
      </div>

      <ScrollArea>
        {Object.entries(tabs).map(([key, value]) => {
          return (
            <TabsPanel key={key} value={key} className="panel">
              <pre>
                <code data-language="bash">{value}</code>
              </pre>
            </TabsPanel>
          );
        })}
      </ScrollArea>
    </Tabs>
  );
}
