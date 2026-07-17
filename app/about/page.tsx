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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <main className="py-16 lg:py-24">
        <div
          className="max-w-4xl mx-auto"
          style={{
            paddingLeft: "calc(2 / 42 * 100vw)",
            paddingRight: "calc(3 / 42 * 100vw)",
          }}
        >
          {/* Page Title */}
          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-12">
            AWA
          </h1>

          {/* Intro */}
          <div className="mb-16">
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-6">
              Founded by Loïc Goepfert and Julien Boucher, AWA is a yacht design studio specializing in high-performance sailing vessels. Our team combines decades of experience in naval architecture, industrial design, and professional sailing to create innovative watercraft that push the boundaries of what's possible on the water.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-6">
              AWA operates at the intersection of offshore racing and private yacht design. We provide end-to-end design services for high-performance sailing vessels, from initial concept and naval architecture through to production-ready documentation and builder liaison. We work across three distinct segments: offshore racing, apex performance private yachts, and high-speed cruising. Each project is built on the same technical foundation: race-derived hydrodynamics, lightweight structural engineering, and sailplan optimization for apparent wind performance.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-6">
              Our core services cover hull form development and CFD-assisted hydrodynamic analysis, appendage design including daggerboards, rudders, and foiling systems, structural engineering with composite material specification, sailplan and rig configuration, interior volume optimization for cruising vessels, and full production drawing packages. We work directly with builders, suppliers, and class authorities. Our principals are embedded in active racing programmes — which means our design methodology is continuously stress-tested against the most demanding conditions in the sport.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-6">
              The apparent wind framework is central to how we design. Forward speed generates a greater and more powerful apparent wind. It means more drive, which increases forward speed further, and so on. The design implications of this loop touch every aspect of the vessel: hull entry, appendage cant, rig geometry, sail camber targets, weight budget. We engineer all of it as a single integrated system.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-6">
              The performance ceiling in sailing is rising faster than at any point in the sport's history. Foiling systems, wingsails, real-time structural monitoring, computational fluid dynamics integrated, VR design and training into the design loop from day one. The technology available to a design studio today would have been inaccessible to the largest professional teams a decade ago. AWA exists to deploy that technology in the service of boats that win.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
              We choose our clients as carefully as they choose us. And it is precisely that selectivity that makes an AWA design mean something. The result, every time, is a boat that does exactly what it was designed to do: go faster than everything around it.
            </p>
          </div>

          {/* The work — entry cards */}
          <section>
            <h2 className="text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase mb-8">
              The work
            </h2>

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
                  <h3 className="text-[#292929] font-medium tracking-[0.12em] text-lg">
                    {door.title}
                  </h3>
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
