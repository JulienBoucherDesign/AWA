import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AlibiPage() {
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
            Cruising
          </p>

          {/* Title */}
          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-2">
            Alibi Catamarans — Legacy
          </h1>

          <p className="text-[#292929] font-light italic text-lg mb-8">
            From 2010 to 2017, we designed and built the most cutting-edge cruising cats of our time.
          </p>

          {/* Quote */}
          <div className="mb-12 pl-6 border-l-2 border-[#e0e0e0]">
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-4">
              &quot;I spent a long time looking for the right boat to sail around the world with my family. But at the time, I couldn&apos;t find a model that combined offshore racing-level performance with a truly modern interior. There were plenty of existing designs, but I had the strong feeling that the yachting world needed to evolve, to take advantage of all the advancements happening in offshore racing and in product design.&quot;
            </p>
            <p className="text-[#292929] font-medium text-sm">
              — Loïc Goepfert, Founder of Alibi
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* 2010 - Alibi Creation */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2010 — Alibi Creation
              </h2>
            </div>

            {/* 2010 - Alibi 54 "Difference" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2010 — Alibi 54 &quot;Difference&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  &quot;Difference&quot; was the first Alibi ever produced. At 54 feet long, with a compact saloon and an ultra-lightweight build, it truly embodied the essence of the Alibi spirit at the time.
                </p>
                <p className="text-[#292929] font-medium text-sm mb-2">
                  New technologies introduced with &quot;Difference&quot;:
                </p>
                <ul className="text-[#292929] font-light italic text-base leading-relaxed list-disc ml-6 space-y-1">
                  <li>Canting steering wheel</li>
                  <li>Ackermann steering geometry</li>
                  <li>Asymmetrical daggerboard with custom Alibi profile</li>
                  <li>Alibi signature U-shaped hull and design with bow lift</li>
                  <li>Retractable propellers</li>
                  <li>Retractable rudder</li>
                  <li>6 crashboxes for maximum safety</li>
                  <li>Furniture building custom workflow</li>
                </ul>
              </div>
            </div>

            {/* 2011 - Alibi 54 "Eleven" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2011 — Alibi 54 &quot;Eleven&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Eleven is an even more stripped-down, lighter evolution of the early compact-saloon Alibi models. Since launch, her owner has been solo sailing seriously around the world, regularly posting jaw-dropping numbers on ocean crossings. It&apos;s the kind of owner-boat alliance we love. Free-spirited and fast.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Its owner is also very active in the community, regularly organizing rallies and managing a dedicated group for fellow enthusiasts.
                </p>
                <p className="text-[#292929] font-medium text-sm mb-2">
                  New technologies introduced with &quot;Eleven&quot; (in addition to previous):
                </p>
                <ul className="text-[#292929] font-light italic text-base leading-relaxed list-disc ml-6 space-y-1">
                  <li>E propulsion and hydrogeneration</li>
                  <li>Tender lift and storage on bowsprit</li>
                  <li>Topdown furling spinnaker</li>
                </ul>
              </div>
            </div>

            {/* 2014 - Alibi 54 "Itsara" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2014 — Alibi 54 &quot;Itsara&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Itsara introduces a family-friendly, long-range cruising version of the Alibi 54. Featuring a wider saloon, more comfortable accommodations, and increased automation, including a furling boom and joystick controls at the helm for easy single-handed sailing. It was designed for extended voyages.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  This yacht carried her happy owners around the world for many years, and is now listed for sale with 36°.
                </p>
                <p className="text-[#292929] font-medium text-sm mb-2">
                  New technologies introduced with &quot;Itsara&quot;:
                </p>
                <ul className="text-[#292929] font-light italic text-base leading-relaxed list-disc ml-6 space-y-1">
                  <li>Furling boom</li>
                  <li>Solo sailing dashboard with all winches and daggerboards controllable by joystick</li>
                </ul>
              </div>
            </div>

            {/* 2014 - Alibi 54 "Licence to Chill" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2014 — Alibi 54 &quot;Licence to Chill&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Designed and built for an Australian racer, this boat was created to deliver high-speed thrills in the world&apos;s most beautiful cruising grounds. It strikes a stunning balance between comfort and raw performance.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Like Itsara, it features advanced automation and a wide, open cockpit while benefiting from an overall weight-optimized interior layout for enhanced sailing capabilities.
                </p>
              </div>
            </div>

            {/* 2014 - Alibi 65 "La Surprise" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2014 — Alibi 65 &quot;La Surprise&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Quite possibly the most iconic Alibi ever built, La Surprise is a one-off 65-foot multihull that blends extreme performance with high-end comfort. Since her launch, her owner has been sailing to some of the world&apos;s most stunning destinations, fully enjoying the boat&apos;s exceptional capabilities at the helm.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  The design showcases the full extent of what Alibi is capable of, both in terms of performance and onboard automation.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  La Surprise is also available for seasonal charter:{" "}
                  <a 
                    href="https://lasurprisesailing.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-[#555]"
                  >
                    lasurprisesailing.com
                  </a>
                </p>
              </div>
            </div>

            {/* 2016 - Alibi 55 "Be the First" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2016 — Alibi 55 &quot;Be the First&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  &quot;Be the First&quot; was the very first Alibi 55. A lengthened evolution of the now-iconic hull design. Compact yet exceptionally comfortable, this yacht helped set a new standard in the industry for performance cruising multihulls of this size.
                </p>
              </div>
            </div>

            {/* 2017 - End of Shipyard */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2017 — End of the Alibi Shipyard
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Alibi came to a sudden halt in 2017 after several years of financial difficulties, despite the tremendous help of several investors. Mastering the entire chain from design to sales was not an easy task and the total revenue was not enough to ensure the sustainability of the company.
                </p>
              </div>
            </div>

            {/* 2020 - Alibi 55 "Dakota" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2020 — Alibi 55 &quot;Dakota&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Dakota is a yacht fully designed and built by Alibi. It was originally part of a project to create an &quot;Alibi Ready&quot; — a turn-key model directly available for sale. However, the yard shut down after the hull and interiors were completed. Final fit-out was carried out by the former Alibi composite and paint leads, who had since joined Gunboat, following the original technical specifications.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Dakota features a refined interior, is light and easy to handle. She regularly races in the multihull class and consistently delivers podium finishes, including a 2nd place among trimarans in the 2025 RORC Transatlantic Race.
                </p>
              </div>
            </div>

            {/* Alibi 55 "MACH 2.0" */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                Alibi 55 &quot;MACH 2.0&quot;
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  We don&apos;t have much information about this yacht, its completion, or its actual capabilities.
                </p>
              </div>
            </div>

            {/* 2023 - Thailand */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-4">
                2023 — Things Are Moving in Thailand
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  It appears that an investor has taken over the shipyard and completed the last boat based on the plans left behind, under the name Mach 2.0.
                </p>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="border-t border-[#e0e0e0] pt-8 mt-12">
            <h2 className="text-[#292929] font-medium tracking-wider text-sm mb-6">
              Specifications
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Models
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  54&apos; / 55&apos; / 65&apos;
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Type
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  Luxury Performance Catamaran
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Years Active
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  2010 - 2017
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Founder
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  Loïc Goepfert
                </p>
              </div>
              <div>
                <p className="text-[#292929] font-light italic text-xs mb-1">
                  Boats Built
                </p>
                <p className="text-[#292929] font-medium text-sm">
                  7+
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
