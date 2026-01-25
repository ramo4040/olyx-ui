"use client";

import "./style.css";
import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Toggle,
  ToggleGroup,
} from "@olyx/react";
import { useState } from "react";
import {
  Authentication,
  EditCanvas,
  EventCard,
  FeedbackCard,
  GroupButton,
  InputGroup,
  LoadingCard,
  PostComposer,
  PriceRange,
  TasksExample,
  TeamInvite,
  TeamSize,
  ToastGroup,
} from "@/widgets/examples";

export const ExamplesTab = () => {
  const [examplesColor, setExamplesColor] = useState(["primary"]);

  return (
    <section data-ui="examples-tab">
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
            <Toggle className="toggle-item" value="primary">
              <span className="color primary" /> Primary
            </Toggle>
            <Toggle className="toggle-item" value="secondary">
              <span className="color secondary" /> Secondary
            </Toggle>
            <Toggle className="toggle-item" value="tertiary">
              <span className="color tertiary" /> Tertiary
            </Toggle>
          </ToggleGroup>
        </div>

        <div
          className="panel-container"
          data-custom-theme
          data-color={examplesColor[0]}
        >
          <TabsPanel value="examples" className="examples-panel">
            <div>
              <PostComposer />
              <GroupButton />
              <LoadingCard />
            </div>

            <div>
              <EditCanvas />
              <TeamSize />
              <ToastGroup />
            </div>

            <div>
              <PriceRange />
              <InputGroup />
              <EventCard />
            </div>

            <div>
              <TeamInvite />
              <FeedbackCard />
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
