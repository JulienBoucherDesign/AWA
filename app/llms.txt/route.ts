import { parts, totalServices, allSections } from "@/lib/services-data"
import { SITE_URL, ORG } from "@/lib/site"

// Served at /llms.txt — a Markdown summary of the site for large language
// models. Generated from the same data as the Services page so it never drifts.
export const dynamic = "force-static"

export function GET() {
  const lines: string[] = []

  lines.push(`# ${ORG.name}`)
  lines.push("")
  lines.push(`> ${ORG.description}`)
  lines.push("")
  lines.push(
    `AWA was founded by ${ORG.founders.join(" and ")}. The practice designs high-performance sailing yachts and supports them across their whole life: offshore racing, apex-performance private yachts, high-speed cruising, and naval-tech beyond sail.`,
  )
  lines.push("")
  lines.push("## Key pages")
  lines.push("")
  lines.push(`- [Home](${SITE_URL}/): overview of AWA.`)
  lines.push(`- [About](${SITE_URL}/about): the practice, founders and how the work is organised.`)
  lines.push(
    `- [Services](${SITE_URL}/services): the complete catalogue of ${totalServices} services across ${allSections.length} disciplines.`,
  )
  lines.push(`- [Method](${SITE_URL}/method): how AWA works — the engineering chain, the simulator and how to read its numbers.`)
  lines.push("")
  lines.push(`## Services (${totalServices} across ${allSections.length} disciplines)`)
  lines.push("")

  for (const part of parts) {
    lines.push(`### ${part.numeral}. ${part.title}`)
    lines.push("")
    for (const section of part.sections) {
      lines.push(`#### ${section.number} — ${section.title}`)
      lines.push("")
      lines.push(section.intro)
      lines.push("")
      for (const service of section.services) {
        lines.push(`- **${service.name}** — ${service.description}`)
      }
      lines.push("")
    }
  }

  lines.push("## Contact")
  lines.push("")
  lines.push(
    "To start a project, describe the boat you have in mind; Loïc Goepfert or Julien Boucher will reply. A thirty-minute call followed by a feasibility study is the usual first step.",
  )
  lines.push("")

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
