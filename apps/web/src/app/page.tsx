import {
  ExamplesTab,
  FeaturesSection,
  Hero,
  MainNavbar,
  WhyOlyxSection,
} from "@/widgets/misc";

export default function Page() {
  return (
    <div>
      <MainNavbar />

      <Hero />

      <ExamplesTab />

      <WhyOlyxSection />

      <FeaturesSection />
    </div>
  );
}
