import { Input } from "@olyx/react";
import { InputWrapper } from "@olyx/react/input-group";
import { Spinner } from "@olyx/react/spinner";

export default function Particle() {
  return (
    <InputWrapper>
      <Spinner />
      <Input disabled placeholder="Processing…" type="search" />
    </InputWrapper>
  );
}
