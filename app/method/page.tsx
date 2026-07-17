import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const chain = [
  {
    title: "The engineering chain",
    summary: "From the programme to the production package, tool by tool.",
    href: "/method/the-design-chain",
  },
  {
    title: "The Sim",
    summary: "Validation, rehearsal and training before the first panel is cut.",
    href: "/method/the-sim",
  },
  {
    title: "Measured or sim",
    summary:
      "The three words attached to every number we publish, and what each one commits us to.",
    href: "/method/measured-or-sim",
  },
  {
    title: "Exact roles",
    summary: "The record, project by project.",
    href: "/method/exact-roles",
  },
  {
    title: "What broke",
    summary: "The failures, documented in the same format as the results.",
    href: "/method/what-broke",
  },
  {
    title: "The process",
    summary: "A commission, phase by phase, with the owner's time stated.",
    href: "/method/process",
  },
  {
    title: "The Manual",
    summary: "How the boat is run after delivery.",
    href: "/method/the-manual",
  },
  {
    title: "The other half",
    summary: "The system includes the human. Racing rarely measures the crew — we do.",
    href: "/method/the-other-half",
  },
  {
    title: "The loop",
    summary: "The name is the method. Apparent wind, and the limits that come with it.",
    href: "/method/the-loop",
  },
]

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <div className="px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-3 uppercase">
            Services
          </p>
          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-8">
            The Method
          </h1>

          <hr className="mb-10 border-[#292929]/10" />

          <div className="space-y-5 mb-12">
            <p className="text-sm font-light text-[#292929] leading-relaxed text-justify">
              <strong className="font-medium">The design loop.</strong> A boat that accelerates adds its own speed to the true wind; the sail sees more wind and makes more drive; more drive, more speed. The implications of that loop — hull entry, appendage cant, rig geometry, camber targets, weight budget — are engineered as one system, because optimising them separately produces a slower boat.
            </p>
            <p className="text-sm font-light text-[#292929] leading-relaxed text-justify">
              <strong className="font-medium">The system includes the human.</strong> Racing measures the boat to the tenth of a knot and rarely measures the crew at all. The gap between a boat's predicted and achieved performance has a human share; we measure it and design with it.
            </p>
            <p className="text-sm font-light text-[#292929] leading-relaxed text-justify">
              <strong className="font-medium">The working chain.</strong> Measure the system. Design with the measurement. Rehearse before building. Train before launching. Each step documented below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#292929]/10 border border-[#292929]/10">
            {chain.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 bg-[#f5f5f5] p-6 hover:bg-[#ececec] transition-colors"
              >
                <h2 className="text-[#292929] font-medium tracking-[0.08em] text-base">
                  {item.title}
                </h2>
                <p className="text-sm font-light text-[#292929] leading-relaxed">
                  {item.summary}
                </p>
                <span className="mt-auto pt-2 text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase group-hover:text-[#292929] transition-colors">
                  Read {"\u2192"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
