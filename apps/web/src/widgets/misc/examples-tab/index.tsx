import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui";
import "./style.css";

export const ExamplesTab = () => {
  return (
    <section data-ui="examples-tab">
      <Tabs defaultValue="examples" orientation="horizontal">
        <TabsList className="tab-list">
          <TabsTab value="examples">Examples</TabsTab>
          <TabsTab value="tasks">Tasks</TabsTab>
          <TabsTab value="playground">Playground</TabsTab>
          <TabsTab value="authentication">Authentication</TabsTab>
        </TabsList>

        <TabsPanel value="examples">
          <p>
            Welcome to our product overview. This section provides a
            comprehensive introduction to what we offer and how it can benefit
            your workflow.
          </p>
        </TabsPanel>
      </Tabs>
    </section>
  );
};
