import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const doors = [
  {
    prompt: "The boat I have in mind has yet to be built.",
    title: "Commissions",
    summary:
      "Complete design, from programme definition to trials and training.",
    href: "/services/commissions",
  },
  {
    prompt: "My boat is fast. I want it to fly.",
    title: "Engineering",
    summary:
      "Packages for existing boats and projects underway: performance studies, appendages, conversion to flight, structures, advisory.",
    href: "/services/engineering",
  },
  {
    prompt: "Who runs it after delivery?",
    title: "Ownership",
    summary:
      "Training, the season programme, documentation, maintenance, telemetry.",
    href: "/services/ownership",
  },
  {
    prompt: "How do you actually work?",
    title: "The Method",
    summary:
      "The engineering chain, the simulator, the measurement of crews, and how to read our numbers.",
    href: "/method",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <div className="px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-10">
            The work
          </h1>

          <hr className="mb-10 border-[#292929]/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#292929]/10 border border-[#292929]/10">
            {doors.map((door) => (
              <Link
                key={door.href}
                href={door.href}
                className="group flex flex-col gap-4 bg-[#f5f5f5] p-8 hover:bg-[#ececec] transition-colors"
              >
                <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed text-balance">
                  {door.prompt}
                </p>
                <h2 className="text-[#292929] font-medium tracking-[0.12em] text-lg">
                  {door.title}
                </h2>
                <p className="text-sm font-light text-[#292929] leading-relaxed">
                  {door.summary}
                </p>
                <span className="mt-auto pt-2 text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase group-hover:text-[#292929] transition-colors">
                  Read {"\u2192"}
                </span>
              </Link>
            ))}
          </div>

          <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed mt-8">
            A project between two doors is normal. Write it as it stands — Loïc or Julien answers. Verifying us first: the exact roles, project by project.{" "}
            <Link
              href="/method/exact-roles"
              className="underline underline-offset-4 decoration-[#292929]/20 hover:text-[#292929] transition-colors not-italic"
            >
              Exact roles {"\u2192"}
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
