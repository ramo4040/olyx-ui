import {
  Button,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui";

export function PopoverExamples() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Popover>
        <PopoverTrigger
          render={
            <Button variant="primary" mode="stroke">
              Open Popover
            </Button>
          }
        />
        <PopoverContent>
          <p>This is a simple popover content.</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger
          render={
            <Button variant="primary" mode="stroke">
              Open Popover
            </Button>
          }
        />
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Popover Title</PopoverTitle>
            <PopoverDescription>
              This is a description of the popover. hhh wiefh oeif woiehf owehf
            </PopoverDescription>
          </PopoverHeader>
          <Button variant="primary" mode="filled">
            Action
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
