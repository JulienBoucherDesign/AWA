import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

// Explicitly welcome the major AI answer-engine crawlers alongside classic
// search bots. GPTBot / OAI-SearchBot (ChatGPT), ClaudeBot (Claude),
// PerplexityBot (Perplexity) and Google-Extended (Gemini/AI Overviews) are
// allowed so AWA content can be retrieved and cited by generative engines.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bytespider",
  "Amazonbot",
  "cohere-ai",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
