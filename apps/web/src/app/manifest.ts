import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olyx UI",
    short_name: "Olyx",
    description:
      "50+ accessible, composable React components built on Base UI with native CSS and HCT color system.",
    start_url: "/",
    display: "browser",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
