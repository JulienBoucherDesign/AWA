import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SkimmingTrimaran75Page() {
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
            75 Skimming Trimaran
          </h1>

          <p className="text-[#292929] font-light italic text-lg mb-8">
            The Future of Fast
          </p>

          {/* Main Content */}
          <div className="mb-12 space-y-6">
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
              The 75S uses a foil-skimming technology capable of partially lifting the hull to reduce drag and significantly increase speed, without the drawbacks of full flight. Extreme safety and extreme performance.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
              It also offers a generous interior volume with three true cabins, each with its own ensuite bathroom, along with a fully aerodynamically optimized deck, continuing the work developed on Ultim trimarans.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
              The semi-recessed helm station beneath the deck delivers a unique steering sensation, reminiscent of an AC75, while providing excellent protection and optimal control at high speed.
            </p>
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
                  75 ft
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Type
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  Skimming Trimaran
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Cabins
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  3 with ensuite
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Technology
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  Foil-Skimming
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
