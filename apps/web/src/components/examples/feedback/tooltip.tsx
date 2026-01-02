import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";

export const TooltipExamples = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <h4>Tooltip Examples</h4>

      <div style={{ display: "flex", gap: 8 }}>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="neutral" mode="lighter">
                Hover me (top)
              </Button>
            }
          />
          <TooltipContent side="top">This is a tooltip on top</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="neutral" mode="lighter">
                Hover me (bottom)
              </Button>
            }
          />
          <TooltipContent side="bottom">
            This is a tooltip on bottom
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="neutral" mode="lighter">
                Hover me (Left)
              </Button>
            }
          />
          <TooltipContent side="left">This is a tooltip on left</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="neutral" mode="lighter">
                Hover me (Right)
              </Button>
            }
          />
          <TooltipContent side="right">
            This is a tooltip on right
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
