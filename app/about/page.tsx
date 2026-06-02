import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
          {/* Bios Section - Optional, can be re-added later */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
