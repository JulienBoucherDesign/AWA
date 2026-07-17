// Central site configuration. Set NEXT_PUBLIC_SITE_URL in the project's
// environment variables to the production domain so canonical URLs, the
// sitemap, robots.txt and JSON-LD all resolve correctly.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://apparent-wind-activities.com")
).replace(/\/$/, "")

export const SITE_NAME = "AWA — Apparent Wind Activities"

export const ORG = {
  name: "AWA — Apparent Wind Activities",
  legalName: "Apparent Wind Activities",
  url: SITE_URL,
  description:
    "AWA is a naval architecture and design practice founded by Loïc Goepfert and Julien Boucher, specialising in high-performance sailing yachts: offshore racing, apex performance private yachts and high-speed cruising.",
  founders: ["Loïc Goepfert", "Julien Boucher"],
}
