import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@olyx/react";

export const AccordionExample = () => {
  return (
    <div style={{ display: "flex", gap: 10, width: 300 }}>
      <Accordion>
        <AccordionItem>
          <AccordionTrigger>What is Base UI?</AccordionTrigger>
          <AccordionContent>
            <div>
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            <div>
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            <div>
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            <div>
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
          <AccordionContent>
            <div>
              Base UI is a library of high-quality unstyled React components for
              design systems and web apps.
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
