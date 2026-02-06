import { LinkButton } from "@olyx/react";
import { Separator } from "@olyx/react/separator";

export default function Particle() {
  return (
    <div>
      <h5>Olyx UI</h5>
      <p>An open-source component library for React.</p>

      <Separator style={{ marginBlock: 6 }} />

      <div style={{ display: "flex", gap: "1rem" }}>
        <LinkButton underline={false}>Docs</LinkButton>
        <Separator orientation="vertical" style={{ height: 18 }} />
        <LinkButton underline={false}>Source</LinkButton>
        <Separator orientation="vertical" style={{ height: 18 }} />
        <LinkButton underline={false}>Changelog</LinkButton>
      </div>
    </div>
  );
}
