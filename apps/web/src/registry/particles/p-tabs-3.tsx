import { Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react/tabs";

export default function Particle() {
  return (
    <Tabs defaultValue="1" orientation="vertical">
      <TabsList>
        <TabsTab value="1">Tab 1</TabsTab>
        <TabsTab value="2">Tab 2</TabsTab>
        <TabsTab value="3">Tab 3</TabsTab>
      </TabsList>
      <TabsPanel value="1">Tab 1</TabsPanel>
      <TabsPanel value="2">Tab 2</TabsPanel>
      <TabsPanel value="3">Tab 3</TabsPanel>
    </Tabs>
  );
}
