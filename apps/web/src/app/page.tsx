import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/config";
import {
  ExamplesTab,
  Faq,
  FeaturesSection,
  Footer,
  Hero,
  MainNavbar,
  WhyOlyxSection,
} from "@/widgets/misc";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    siteConfig.github,
    `https://x.com/${siteConfig.twitter.replace("@", "")}`,
  ],
  foundingDate: "2026",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  codeRepository: siteConfig.github,
  programmingLanguage: ["TypeScript", "React", "CSS"],
  runtimePlatform: "Node.js",
  license: "https://opensource.org/licenses/MIT",
  author: {
    "@type": "Person",
    name: siteConfig.creator,
    url: "https://www.linkedin.com/in/yassir-rouane",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Olyx UI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Olyx UI is a modern component library built with React and TypeScript, focusing on accessibility, performance, and design flexibility.",
      },
    },
    {
      "@type": "Question",
      name: "Is Olyx UI free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Olyx UI is open-source and free to use for both personal and commercial projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Olyx UI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can install Olyx UI via npm or yarn using the command: npm install @olyx/react or yarn add @olyx/react.",
      },
    },
    {
      "@type": "Question",
      name: "Does Olyx UI support theming?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Olyx UI supports theming and allows you to customize the look and feel of components using CSS variables and custom styles.",
      },
    },
    {
      "@type": "Question",
      name: "Which version of Tailwind is being used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Olyx UI does not use Tailwind CSS. It is built with native CSS and focuses on providing a clean and efficient styling approach without relying on utility-first frameworks.",
      },
    },
  ],
};

export default function Page() {
  return (
    <div>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

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
