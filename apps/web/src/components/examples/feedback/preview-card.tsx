import {
  Button,
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@olyx/react";

export function PreviewCardExamples() {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <PreviewCard>
        <PreviewCardTrigger
          render={
            <Button variant="link" mode="filled">
              Link Preview
            </Button>
          }
        />
        <PreviewCardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae
          praesentium aperiam ullam quia. Vitae nisi quod aperiam reprehenderit
          sit.
        </PreviewCardContent>
      </PreviewCard>

      <PreviewCard>
        <PreviewCardTrigger
          render={
            <Button variant="link" mode="filled">
              Link Preview (light)
            </Button>
          }
        />
        <PreviewCardContent variant="light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae
          praesentium aperiam ullam quia. Vitae nisi quod aperiam reprehenderit
          sit.
        </PreviewCardContent>
      </PreviewCard>
    </div>
  );
}
