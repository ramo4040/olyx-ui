"use client";

import { Button } from "@olyx/react/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@olyx/react/drawer";

export default function Particle() {
  return (
    <Drawer direction="right">
      <DrawerTrigger
        render={
          <Button variant="neutral" mode="stroke">
            Open Right Drawer
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>Your recent notifications.</DrawerDescription>
          <DrawerClose />
        </DrawerHeader>
        <DrawerFooter>
          <Button>Mark All as Read</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
