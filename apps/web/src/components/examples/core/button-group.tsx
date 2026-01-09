import { ButtonGroup, ButtonGroupItem } from "@/components/ui";

export const ButtonGroupExample = () => {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      <ButtonGroup orientation="horizontal">
        <ButtonGroupItem>Button 1</ButtonGroupItem>
        <ButtonGroupItem>Button 2</ButtonGroupItem>
        <ButtonGroupItem>Button 3</ButtonGroupItem>
      </ButtonGroup>

      <ButtonGroup size="xs" orientation="horizontal">
        <ButtonGroupItem>Button 1</ButtonGroupItem>
        <ButtonGroupItem>Button 2</ButtonGroupItem>
        <ButtonGroupItem>Button 3</ButtonGroupItem>
      </ButtonGroup>

      <ButtonGroup size="xxs" orientation="horizontal">
        <ButtonGroupItem>Button 1</ButtonGroupItem>
        <ButtonGroupItem>Button 2</ButtonGroupItem>
        <ButtonGroupItem>Button 3</ButtonGroupItem>
      </ButtonGroup>

      <ButtonGroup size="xs" orientation="vertical">
        <ButtonGroupItem>Button 1</ButtonGroupItem>
        <ButtonGroupItem>Button 2</ButtonGroupItem>
        <ButtonGroupItem>Button 3</ButtonGroupItem>
      </ButtonGroup>
    </div>
  );
};
