import "./style.css";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react";
import type { FC } from "react";
import { particles } from "@/registry/registry-particles";
import { ComponentSource } from "../component-source";

type Props = { name: string };

export const ComponentPreview: FC<Props> = ({ name }) => {
  const Preview = particles[name].component;

  return (
    <Tabs data-ui-docs="component-preview" orientation="horizontal">
      <TabsList>
        <TabsTab value="preview">Preview</TabsTab>
        <TabsTab value="code">Code</TabsTab>
      </TabsList>

      <TabsPanel className="tab-panel preview" value="preview">
        <Preview />
      </TabsPanel>

      <TabsPanel className="tab-panel" value="code">
        <ComponentSource name={name} src={particles[name].files[0].path} />
      </TabsPanel>
    </Tabs>
  );
};
