import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const baseUrl = "https://olyxui.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const docPages = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.url.includes("/components/") ? 0.8 : 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...docPages,
  ];
}
