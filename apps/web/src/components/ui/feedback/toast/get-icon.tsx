import {
  Alert02Icon,
  AlertCircleIcon,
  AlertDiamondIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Spinner } from "../spinner";
import type { ToastType } from "./types";

export const getIcon = (type: ToastType) => {
  switch (type) {
    case "success":
      return <HugeiconsIcon icon={Tick02Icon} />;
    case "error":
      return <HugeiconsIcon icon={AlertDiamondIcon} />;
    case "info":
      return <HugeiconsIcon icon={AlertCircleIcon} />;
    case "warning":
      return <HugeiconsIcon icon={Alert02Icon} />;
    case "loading":
      return <Spinner size="sm" />;
    default:
      return null;
  }
};
