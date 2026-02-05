"use client";

import { Button } from "@olyx/react/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@olyx/react/drawer";

export default function Particle() {
  return (
    <Drawer direction="left">
      <DrawerTrigger
        render={
          <Button variant="neutral" mode="stroke">
            Open Left Drawer
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
