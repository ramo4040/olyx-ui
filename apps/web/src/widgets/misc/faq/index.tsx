import "./style.css";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
} from "@olyx/react";

export const Faq = () => {
  return (
    <section data-ui="olyx-faq">
      <div className="details">
        <Badge>FAQ</Badge>
        <h3>Frequently asked questions</h3>
        <p>
          Quick answers to common questions about pricing, privacy, setup, and
          more.
        </p>
      </div>

      <div className="questions-list">
        <Accordion>
          {questions.map(({ question, answer }) => (
            <AccordionItem key={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                <div>{answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const questions = [
  {
    question: "What is Olyx UI?",
    answer:
      "Olyx UI is a modern component library built with React and TypeScript, focusing on accessibility, performance, and design flexibility.",
  },
  {
    question: "Is Olyx UI free to use?",
    answer:
      "Yes, Olyx UI is open-source and free to use for both personal and commercial projects.",
  },
  {
    question: "How do I install Olyx UI?",
    answer:
      "You can install Olyx UI via npm or yarn using the command: npm install @olyx/react or yarn add @olyx/react.",
  },
  {
    question: "Does Olyx UI support theming?",
    answer:
      "Yes, Olyx UI supports theming and allows you to customize the look and feel of components using CSS variables and custom styles.",
  },
  {
    question: "Which version of Tailwind is being used?",
    answer:
      "Olyx UI does not use Tailwind CSS. It is built with native CSS and focuses on providing a clean and efficient styling approach without relying on utility-first frameworks.",
  },
  {
    question: "Do you provide JavaScript (non-TypeScript) snippets?",
    answer:
      "Currently, no. However, if there is enough demand, it could be prioritized in our plans. Please keep an eye on our roadmap for updates.",
  },
];
