import { createToastApi } from "../create-toast-api";
import { anchoredToastManager } from "./anchored-toast-provider";

export const anchoredToast = createToastApi(anchoredToastManager);
