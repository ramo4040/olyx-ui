"use client";

import { Button } from "@olyx/react/button";
import { Field } from "@olyx/react/field";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@olyx/react/popover";
import { Textarea } from "@olyx/react/textarea";

export default function Particle() {
  return (
    <Popover>
      <PopoverTrigger render={<Button mode="stroke" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Send us feedback</PopoverTitle>
          <PopoverDescription>
            Let us know how we can improve.
          </PopoverDescription>
        </PopoverHeader>

        <form>
          <Field>
            <Textarea
              aria-label="Send feedback"
              id="feedback"
              placeholder="How can we improve?"
            />
          </Field>
          <Button type="submit" style={{ marginTop: 10 }}>
            Send feedback
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
}
