import {
  ExamplesTab,
  Faq,
  FeaturesSection,
  Footer,
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

      <Faq />

      <Footer />
    </div>
  );
}
