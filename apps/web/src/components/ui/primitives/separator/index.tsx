import "./index.css";

import { Separator as SeparatorPrimititve } from "@base-ui/react/separator";

export function Separator(props: SeparatorPrimititve.Props) {
  return <SeparatorPrimititve data-slot="separator" {...props} />;
}
