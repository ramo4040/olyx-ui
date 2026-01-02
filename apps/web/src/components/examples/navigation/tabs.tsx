import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui";

export const TabsExamples = () => {
  return (
    <div style={{ display: "flex", gap: 40 }}>
      <Tabs defaultValue="overview" orientation="horizontal">
        <TabsList>
          <TabsTab value="overview">Overview</TabsTab>
          <TabsTab value="features">Features</TabsTab>
          <TabsTab value="pricing">Pricing</TabsTab>
        </TabsList>

        <TabsPanel value="overview">
          <p>
            Welcome to our product overview. This section provides a
            comprehensive introduction to what we offer and how it can benefit
            your workflow.
          </p>
        </TabsPanel>

        <TabsPanel value="features">
          <p>
            Discover the powerful features that make our product stand out. From
            advanced analytics to seamless integrations, we've got you covered.
          </p>
        </TabsPanel>

        <TabsPanel value="pricing">
          <p>
            Flexible pricing plans designed to scale with your needs. Choose
            from our starter, professional, or enterprise tiers.
          </p>
        </TabsPanel>
      </Tabs>

      <Tabs defaultValue="overview" orientation="vertical">
        <TabsList>
          <TabsTab value="overview">Overview</TabsTab>
          <TabsTab value="features">Features</TabsTab>
          <TabsTab value="pricing">Pricing</TabsTab>
        </TabsList>

        <TabsPanel value="overview">
          <p>
            Welcome to our product overview. This section provides a
            comprehensive introduction to what we offer and how it can benefit
            your workflow.
          </p>
        </TabsPanel>

        <TabsPanel value="features">
          <p>
            Discover the powerful features that make our product stand out. From
            advanced analytics to seamless integrations, we've got you covered.
          </p>
        </TabsPanel>

        <TabsPanel value="pricing">
          <p>
            Flexible pricing plans designed to scale with your needs. Choose
            from our starter, professional, or enterprise tiers.
          </p>
        </TabsPanel>
      </Tabs>
    </div>
  );
};
