import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["about", "services", "process", "projects", "technology", "contact"].map(
      (section) => ({
        url: `${SITE.url}/#${section}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })
    ),
  ];
}
