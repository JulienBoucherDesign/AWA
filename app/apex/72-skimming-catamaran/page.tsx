import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SkimmingCatamaran72Page() {
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
          {/* Category */}
          <p className="text-[#292929] font-light italic text-sm mb-4">
            Apex Performance
          </p>

          {/* Title */}
          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-2">
            72 Skimming Catamaran — AWA 72F
          </h1>

          {/* Main Intro */}
          <div className="mb-12 space-y-6">
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
              Made to push hard and go fast. Designed to capture the soaring freedom of offshore foiling multihulls and share it with friends. It carries the spirit of offshore racing multihulls, delivering that raw thrill of flight, yet with the comfort of a salon and cabins to bring the crew along for the ride at regattas in the Caribbean or the Aegean. Its architecture is entirely shaped around the T-foil design, the next generation of hydrofoil technology already showcased in offshore racing designs.
            </p>
          </div>

          {/* T-Foil Advantage Section */}
          <div className="mb-12">
            <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-6">
              The T-Foil Advantage
            </h2>
            <div className="space-y-4">
              <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                We chose the T-foil configuration for one simple reason: it delivers more.
              </p>
              <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                Its sleek profile reduces drag and unlocks higher top speeds, cutting through the water with precision. In testing, the T-foil also proved to delay cavitation, extending both efficiency and durability.
              </p>
              <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                Its greatest strength lies in the <strong>600 N.m righting power</strong> it generates. It means <strong>more drive</strong> can be unleashed, <strong>more speed</strong> achieved, all while maintaining a <strong>stable, composed flight through gusts</strong> and aggressive bear-aways.
              </p>
              <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                Purely faster with control.
              </p>
            </div>
          </div>

          {/* Performance Section */}
          <div className="mb-12">
            <div className="space-y-4">
              <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                The demonstration of performance, set to sail at high intensity. Speed is reached in an instant, with fluidity. It becomes possible to enjoy every breeze of power and acceleration while enjoying a comfy flying interior.
              </p>
              <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                Where performance cruising yachts often prioritize comfort at the expense of speed, and where former offshore racing trimarans remain rudimentary, the 72F offers a unique balance: breaking through the 30-knot barrier upwind while still providing a genuine living space on board. More than a compromise, it opens a new path — one of extreme yet shareable sailing, capable of captivating both thrill-seekers and sailors in search of conviviality.
              </p>
            </div>
          </div>

          {/* Specs */}
          <div className="border-t border-[#e0e0e0] pt-8">
            <h2 className="text-[#292929] font-medium tracking-wider text-sm mb-6">
              Specifications
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Length
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  72 ft
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Type
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  T-Foil Catamaran
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Righting Power
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  600 N.m
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Top Speed
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  30+ knots upwind
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Design
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  AWA
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
