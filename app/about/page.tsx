import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

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
            AWA — Apparent Wind Activities
          </h1>

          {/* Intro */}
          <div className="mb-16">
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify mb-6">
              The velocity of our watercraft produces its own wind, which we skillfully harness to enhance our performance. A design that is optimized for apparent wind angles not only facilitates remarkable speeds, but also unrivaled flexibility and safety on the water. This allows for sailing exceptionally close to the wind and swiftly downwind under contemporary sailplans.
            </p>
            <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
              <em>Loïc & Julien</em>
            </p>
          </div>

          {/* Bios Section */}
          <div className="space-y-16">
            {/* Loïc Goepfert */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-6">
                Loïc Goepfert — Naval Architect
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  His academic background consists of a double degree completed in 1995 at UTC Compiègne and prestigious Southampton University, which allowed him to acquire solid technical expertise and a capacity to innovate.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Founder and CEO of{" "}
                  <Link href="/cruising/alibi" className="underline hover:text-[#555]">
                    Alibi Catamarans
                  </Link>{" "}
                  from 2005 to 2020. He created a new state of the art in the luxury catamaran segment by combining speed, stability, and comfort, offering unique sailing experiences. The Alibi 54&apos; and 65&apos; catamarans are still among the most sought after by experienced sailors today.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  He is currently working as part of Guillaume Verdier&apos;s team for the{" "}
                  <Link href="/racing/gitana18" className="underline hover:text-[#555]">
                    GITANA Ultim
                  </Link>
                  , Ferrari Hypersail, 11th Hour Ocean Race and Magic Carpet E.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Former professional sailor on SOPRA trimaran, participated in the French Match Racing Championship and the Tour Voile.
                </p>
              </div>
            </div>

            {/* Julien Boucher */}
            <div>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-xl mb-6">
                Julien Boucher — Designer
              </h2>
              <div className="space-y-4">
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Graduated from the renowned Institut Supérieur de Design for product design and from Politecnico di Genova for naval architecture in 2012.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  He began his career as a design leader at the{" "}
                  <Link href="/cruising/alibi" className="underline hover:text-[#555]">
                    Alibi Catamaran
                  </Link>{" "}
                  shipyard, under the direction of Loïc Goepfert, and then took the design lead at Decathlon Kiteboarding.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Currently supporting several startups in the naval tech sector (Alloy, Accwing, Taaroa...).
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Julien is also developing new innovative design approaches on several offshore racing projects, including the{" "}
                  <Link href="/racing/gitana18" className="underline hover:text-[#555]">
                    Gitana Ultim trimaran
                  </Link>{" "}
                  and Ferrari Hypersail alongside Loïc and Guillaume Verdier.
                </p>
                <p className="text-[#292929] font-light italic text-base leading-relaxed text-justify">
                  Julien was a student athlete from the age of 12 to 19. He spent his youth racing in catamarans up to the international level.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 pt-8 border-t border-[#e0e0e0]">
            <p className="text-[#292929] font-medium text-base mb-2">
              Contact
            </p>
            <a 
              href="mailto:contact@awa.yachts" 
              className="text-[#292929] font-light italic text-base underline hover:text-[#555]"
            >
              contact@awa.yachts
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
