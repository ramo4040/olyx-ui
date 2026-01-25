import "./style.css";

import { SourceCodeIcon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BaseUI } from "@/assets/svg/base-ui";

const data = [
  {
    icon: <BaseUI />,
    title: "Base UI Foundation",
    description:
      "Built on React's official unstyled primitives. WAI-ARIA compliant, keyboard navigation, focus management—all handled.",
  },
  {
    icon: <HugeiconsIcon icon={SourceCodeIcon} />,
    title: "Native CSS. No Tailwind Bullshit",
    description:
      "Modern CSS with HCT color variables. No 47-class div soup. No build-time bloat.",
  },
  {
    icon: <HugeiconsIcon icon={SparklesIcon} />,
    title: "Unique By Design",
    description:
      "Tired of every site looking like ******? We too. Fresh components, bold patterns, zero template fatigue.",
  },
];

export function WhyOlyxSection() {
  return (
    <section data-ui="why-olyx-section">
      <div className="section-header">
        <p>Why Olyx?</p>
        <h2>Built different. Not another Library clone.</h2>
      </div>

      <div className="cards-grid">
        {data.map(({ icon, title, description }) => (
          <div className="why-card" key={title}>
            <div className="card-icon">{icon}</div>
            <div className="card-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
