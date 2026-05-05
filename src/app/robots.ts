import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Don't waste crawl budget (or function-invocation quota) on:
        disallow: [
          "/api/",          // server endpoints — no useful content for SEO
          "/thanks",        // form-submission landing pages, if any
          "/_next/",        // build assets — Google ignores these anyway
        ],
      },
    ],
    sitemap: "https://twhcarpetcleaning.co.uk/sitemap.xml",
  };
}
