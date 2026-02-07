import { Tabs, TabsList, TabsPanel, TabsTab } from "@olyx/react/tabs";

export default function Particle() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="password">Password</TabsTab>
        <TabsTab value="notifications">Notifications</TabsTab>
      </TabsList>
      <TabsPanel value="account">Account</TabsPanel>
      <TabsPanel value="password">Password</TabsPanel>
      <TabsPanel value="notifications">Notifications</TabsPanel>
    </Tabs>
  );
}
