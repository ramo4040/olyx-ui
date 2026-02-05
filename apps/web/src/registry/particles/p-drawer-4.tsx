"use client";

import { Button } from "@olyx/react/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@olyx/react/drawer";

export default function Particle() {
  return (
    <Drawer direction="top">
      <DrawerTrigger
        render={
          <Button variant="neutral" mode="stroke">
            Open Top Drawer
          </Button>
        }
      />
      <DrawerContent>
        <DrawerTitle>Quick Search</DrawerTitle>
        <DrawerDescription>Start typing to find anything.</DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
}
