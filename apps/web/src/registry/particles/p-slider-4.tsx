import { Field, FieldLabel } from "@olyx/react/field";
import { Slider, SliderValue } from "@olyx/react/slider";

export default function Particle() {
  return (
    <Field>
      <Slider defaultValue={50}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FieldLabel style={{ font: "var(--font-label-md)" }}>
            Opacity
          </FieldLabel>
          <SliderValue />
        </div>
      </Slider>
    </Field>
  );
}
