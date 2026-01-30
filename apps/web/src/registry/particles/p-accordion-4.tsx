"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@olyx/react/accordion";
import { Button } from "@olyx/react/button";
import { useState } from "react";

export default function Particle() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div>
      <Accordion onValueChange={setValue} value={value}>
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

      <div>
        <Button onClick={() => setValue(["item-1", "item-2"])} mode="stroke">
          Open First Two
        </Button>
        <p>Open items: {value.length > 0 ? value.join(", ") : "None"}</p>
      </div>
    </div>
  );
}
