import "./style.css";
import { Separator, Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui";
import {
  EditCanvas,
  FeedbackCard,
  LoadingCard,
  PostComposer,
  PriceRange,
  TeamSize,
} from "@/widgets/examples";

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

        <TabsPanel value="examples" className="examples-panel">
          <div>
            <PostComposer />
            <LoadingCard />
            <FeedbackCard />
          </div>

          <div>
            <EditCanvas />
            <Separator />
            <TeamSize />
            <Separator />
          </div>

          <div>
            <PriceRange />
          </div>
        </TabsPanel>
      </Tabs>
    </section>
  );
};
