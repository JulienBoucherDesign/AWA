import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

const routes = [
  "/",
  "/about",
  "/services",
  "/services/commissions",
  "/services/engineering",
  "/services/ownership",
  "/method",
  "/method/the-design-chain",
  "/method/process",
  "/method/the-loop",
  "/method/the-sim",
  "/method/the-other-half",
  "/method/measured-or-sim",
  "/method/exact-roles",
  "/method/what-broke",
  "/method/the-manual",
  "/apex/50-controlled-foiler",
  "/apex/72-skimming-catamaran",
  "/apex/72-skimming-trimaran",
  "/apex/75-skimming-trimaran",
  "/cruising/78-acc-wing",
  "/cruising/alibi",
  "/racing/ferrari-hypersail",
  "/racing/gitana18",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "/" || route === "/services" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route === "/services" ? 0.9 : 0.6,
  }))
}
