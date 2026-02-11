"use client";

import "./style.css";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react/tabs";
import { ToggleGroup, ToggleGroupItem } from "@olyx/react/toggle-group";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Authentication,
  LoadingCard,
  PostComposer,
  PriceRange,
  ProductCardExample,
  ProfileCardExample,
  TasksExample,
  TeamInvite,
  ToastGroup,
} from "@/widgets/examples";

export const ExamplesTab = () => {
  const [examplesColor, setExamplesColor] = useState(["primary"]);
  const isMobile = useIsMobile();

  return (
    <section data-ui="examples-tab">
      {isMobile && <p>img</p>}

      <Tabs defaultValue="examples" orientation="horizontal">
        <div className="tab-list">
          <TabsList>
            <TabsTab value="examples">Examples</TabsTab>
            <TabsTab value="tasks">Tasks</TabsTab>
            <TabsTab value="authentication">Authentication</TabsTab>
          </TabsList>

          <ToggleGroup
            variant="ghost"
            value={examplesColor}
            onValueChange={(v) =>
              setExamplesColor(v.length ? v : [examplesColor[0]])
            }
          >
            <ToggleGroupItem className="toggle-item" value="primary">
              <span className="color primary" /> Primary
            </ToggleGroupItem>
            <ToggleGroupItem className="toggle-item" value="secondary">
              <span className="color secondary" /> Secondary
            </ToggleGroupItem>
            <ToggleGroupItem className="toggle-item" value="tertiary">
              <span className="color tertiary" /> Tertiary
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div
          className="panel-container"
          data-custom-theme
          data-color={examplesColor[0]}
        >
          <TabsPanel value="examples" className="examples-panel">
            <div>
              <ProfileCardExample />
            </div>
            <div>
              <ProductCardExample />
              <PostComposer />
            </div>
            <div>
              <TeamInvite />
              <ToastGroup />
            </div>
            <div>
              <PriceRange />
              <LoadingCard />
            </div>
          </TabsPanel>

          <TabsPanel value="authentication">
            <Authentication />
          </TabsPanel>

          <TabsPanel value="tasks">
            <TasksExample />
          </TabsPanel>
        </div>
      </Tabs>
    </section>
  );
};
