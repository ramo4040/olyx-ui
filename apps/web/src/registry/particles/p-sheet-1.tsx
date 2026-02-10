"use client";

import { Button } from "@olyx/react/button";
import { Field, FieldLabel } from "@olyx/react/field";
import { Input } from "@olyx/react/input";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@olyx/react/sheet";

export default function Particle() {
  return (
    <Sheet>
      <SheetTrigger render={<Button>Open Sheet</Button>} />
      <SheetPopup>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <SheetPanel>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input type="text" placeholder="Enter your name" />
            </Field>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" placeholder="Enter your email" />
            </Field>
          </div>
        </SheetPanel>
        <SheetFooter>
          <SheetClose />
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetPopup>
    </Sheet>
  );
}
