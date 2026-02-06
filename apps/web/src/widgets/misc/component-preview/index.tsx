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
  const particle = particles[name];
  const Preview = particle.component;
  const classname = particle.meta?.classname;

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
        {particle.files.length > 1 ? (
          <Tabs defaultValue="tsx" className="inner-tabs">
            <TabsList className="inner-tabs-list">
              <TabsTab value="tsx" className="tab">
                particle.tsx
              </TabsTab>
              <TabsTab value="css" className="tab">
                style.css
              </TabsTab>
            </TabsList>

            <TabsPanel value="tsx">
              <ComponentSource
                collapsible={false}
                name={name}
                src={particle.files[0].path}
              />
            </TabsPanel>

            <TabsPanel value="css">
              <ComponentSource
                collapsible={false}
                name={name}
                language="css"
                src={particle.files[1].path}
              />
            </TabsPanel>
          </Tabs>
        ) : (
          <ComponentSource
            collapsible={false}
            name={name}
            src={particle.files[0].path}
          />
        )}
      </TabsPanel>
    </Tabs>
  );
};
