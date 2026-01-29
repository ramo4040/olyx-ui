import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@olyx/react/accordion";

export default function Particle() {
  return (
    <Accordion multiple>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Base UI?</AccordionTrigger>
        <AccordionContent>
          Base UI is a library of high-quality unstyled React components for
          design systems and web apps.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How do I get started?</AccordionTrigger>
        <AccordionContent>
          Head to the "Quick start" guide in the docs. If you've used unstyled
          libraries before, you'll feel at home.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
        <AccordionContent>
          Of course! Base UI is free and open source.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
