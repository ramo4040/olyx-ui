"use client";

import { Button } from "@olyx/react/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerTitle,
  DrawerTrigger,
} from "@olyx/react/drawer";

export default function Particle() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open Drawer</Button>} />
      <DrawerContent>
        <DrawerHandle />
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        <DrawerFooter>
          <Button>Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
