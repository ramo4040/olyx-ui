"use client";

import "./style.css";
import { Tabs } from "@olyx/react";
import React from "react";
import { useConfig } from "@/hooks/use-config";

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig();

  const installationType = React.useMemo(() => {
    return config.installationType || "cli";
  }, [config]);

  return (
    <Tabs
      data-slot="code-tabs"
      value={installationType}
      onValueChange={(v) => setConfig({ ...config, installationType: v })}
    >
      {children}
    </Tabs>
  );
}
