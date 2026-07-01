import type { Metadata } from "next";

export const siteConfig = {
  name: "Holiday Road Map",
  tagline: "Plan the season. Find the gifts. Enjoy the road.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://holidayroadmap.com",
  description:
    "Holiday Road Map helps people plan Christmas with gift matching, printables, local holiday guides, wrapping tutorials, and practical seasonal planning."
};

type SeoArgs = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({ title, description, path = "/", image = "/og-default.jpg", noIndex = false }: SeoArgs): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: new URL(image, siteConfig.url).toString(),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} seasonal planning preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [new URL(image, siteConfig.url).toString()]
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true }
  };
}
