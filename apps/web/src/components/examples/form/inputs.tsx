import { Setting06Icon, User02FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Input,
  InputAffix,
  InputIcon,
  InputWrapper,
  Kbd,
} from "@/components/ui";

export const InputsExample = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 250,
      }}
    >
      <h4>Valid Input</h4>
      <Input placeholder="Text input" />
      <h4>Invalid Input</h4>
      <Input placeholder="Text input" data-invalid />
      <h4>Disabled Input</h4>
      <Input type="password" placeholder="Password input" disabled />

      <h4>Icon Input</h4>
      <InputWrapper>
        <InputIcon>
          <HugeiconsIcon icon={User02FreeIcons} />
        </InputIcon>
        <Input placeholder="Text input" />
      </InputWrapper>

      <h4>Affix Input</h4>
      <InputWrapper>
        <InputAffix>https://</InputAffix>
        <Input placeholder="Amount" />
      </InputWrapper>

      <InputWrapper>
        <InputAffix inline>$</InputAffix>
        <Input placeholder="Amount" />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="Icon" />
        <Kbd>F2</Kbd>
      </InputWrapper>

      <InputWrapper>
        <Input placeholder="With icon" />
        <Button asIcon variant="primary" mode="ghost" size="sm">
          <HugeiconsIcon icon={Setting06Icon} />
        </Button>
      </InputWrapper>
    </div>
  );
};
