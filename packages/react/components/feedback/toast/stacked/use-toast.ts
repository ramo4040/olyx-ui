import { createToastApi } from "../create-toast-api";
import { stackedToastManager } from "./stacked-toast-provider";

export const stackedToast = createToastApi(stackedToastManager);
