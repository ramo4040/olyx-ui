import "./style.css";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react";
import type { FC } from "react";
import { particles } from "@/registry/registry-particles";
import { ComponentSource } from "../component-source";

type Props = React.ComponentProps<typeof Tabs> & {
  name: string;
  align?: "start" | "center" | "end";
};

export const ComponentPreview: FC<Props> = ({
  name,
  align = "center",
  ...props
}) => {
  const Preview = particles[name].component;
  const classname = particles[name].meta?.classname;

  return (
    <Tabs
      data-ui-docs="component-preview"
      orientation="horizontal"
      className={classname}
      {...props}
    >
      <TabsList>
        <TabsTab value="preview">Preview</TabsTab>
        <TabsTab value="code">Code</TabsTab>
      </TabsList>

      <TabsPanel className="tab-panel preview" value="preview">
        <div data-slot="preview" data-align={align}>
          <Preview />
        </div>
      </TabsPanel>

      <TabsPanel className="tab-panel" value="code">
        <ComponentSource
          collapsible={false}
          name={name}
          src={particles[name].files[0].path}
        />
      </TabsPanel>
    </Tabs>
  );
};
