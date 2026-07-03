import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = new Map<string, MetadataRoute.Sitemap[number]>();

  urls.set(siteConfig.url, { url: siteConfig.url });

  for (const page of source.getPages()) {
    urls.set(`${siteConfig.url}${page.url}`, {
      url: `${siteConfig.url}${page.url}`,
    });
  }

  return [...urls.values()];
}
