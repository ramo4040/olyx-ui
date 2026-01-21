import "./style.css";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui";
import {
  EditCanvas,
  EventCard,
  FeedbackCard,
  GroupButton,
  InputGroup,
  LoadingCard,
  PostComposer,
  PriceRange,
  TeamInvite,
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
            <GroupButton />
            <LoadingCard />
          </div>

          <div>
            <EditCanvas />
            <TeamSize />
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
      </Tabs>
    </section>
  );
};
