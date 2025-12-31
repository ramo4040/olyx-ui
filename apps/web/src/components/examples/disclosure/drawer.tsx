import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui";

export const DrawerExample = () => {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <Drawer direction="right">
        <DrawerTrigger
          render={
            <Button size="md" variant="primary" mode="lighter">
              Open Drawer
            </Button>
          }
        />

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is the drawer description. You can put any content here. You
              can put any content here.
            </DrawerDescription>
            <DrawerClose />
          </DrawerHeader>
          <DrawerHandle />

          {/* <div>test</div> */}

          <DrawerFooter>
            <Button size="md" variant="primary" mode="filled">
              Accept
            </Button>
            <Button size="md" variant="primary" mode="lighter">
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
