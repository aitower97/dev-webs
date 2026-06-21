import type { Metadata } from "next";
import type { SiteMetadata } from "./types";

export function createMetadata(page: {
  title: string;
  description: string;
  path: string;
  site: SiteMetadata;
  noIndex?: boolean;
}): Metadata {
  const url = `${page.site.url}${page.path}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: page.site.siteName,
      locale: page.site.locale,
      type: "website",
      images: page.site.ogImage
        ? [{ url: page.site.ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}
