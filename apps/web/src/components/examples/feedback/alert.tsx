import {
  Alert02Icon,
  AlertCircleIcon,
  AlertDiamondIcon,
  StarsIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Alert,
  AlertClose,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@olyx/react";

const status = [
  "error",
  "warning",
  "success",
  "information",
  "feature",
] as const;

const examples = ["filled", "light", "lighter", "stroke"] as const;

const size = ["sm", "md", "lg"] as const;

const iconsExample = {
  error: AlertDiamondIcon,
  warning: Alert02Icon,
  success: Tick02Icon,
  information: AlertCircleIcon,
  feature: StarsIcon,
};

export const AlertExample = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {examples.map((v) => {
        return status.map((s) => {
          const Icon = iconsExample[s];
          return (
            <Alert key={`${v}-${s}`} variant={v} status={s} size="md">
              <AlertIcon>
                <HugeiconsIcon icon={Icon} />
              </AlertIcon>
              <AlertContent>
                <AlertTitle>
                  This is a {s} alert with {v} variant.
                </AlertTitle>
              </AlertContent>
              <AlertClose />
            </Alert>
          );
        });
      })}

      {size.map((sz) => {
        return (
          <Alert key={sz} variant="lighter" status="success" size={sz}>
            <AlertIcon>
              <HugeiconsIcon icon={AlertCircleIcon} />
            </AlertIcon>
            <AlertContent>
              <AlertTitle>
                This is an information alert with {sz} size.
              </AlertTitle>
            </AlertContent>
            <AlertClose />
          </Alert>
        );
      })}

      <Alert variant="lighter" status="information" size="lg">
        <AlertIcon>
          <HugeiconsIcon icon={AlertCircleIcon} />
        </AlertIcon>
        <AlertContent>
          <AlertTitle>This is a alert.</AlertTitle>
          <AlertDescription>
            This is an example of an alert description providing additional
          </AlertDescription>
        </AlertContent>

        <AlertClose />
      </Alert>
    </div>
  );
};
