"use client";

import "./style.css";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react/tabs";
import { ToggleGroup, ToggleGroupItem } from "@olyx/react/toggle-group";
import Image from "next/image";
import { useTheme } from "next-themes";
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

  return (
    <section data-ui="examples-tab">
      <div className="mobile-placeholder">
        <Image
          src={"/images/example-light.png"}
          alt="Examples on mobile"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="dark"
        />
      </div>

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
