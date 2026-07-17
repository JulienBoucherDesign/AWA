import type { Metadata } from "next"
import Link from "next/link"
import { ProsePage } from "@/components/prose-page"
import { ServiceSection, PartHeader } from "@/components/service-section"
import { parts, allSections, totalServices } from "@/lib/services-data"
import { SITE_URL, ORG } from "@/lib/site"

const LAST_UPDATED = "2026-07-17"
const LAST_UPDATED_LABEL = "July 2026"
const PAGE_PATH = "/services"
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const PAGE_DESCRIPTION =
  "AWA is a naval architecture and design practice by Loïc Goepfert and Julien Boucher. Explore 211 yacht design, engineering and campaign services — from feasibility study to flight."

export const metadata: Metadata = {
  title: "Services — Yacht Design, Engineering & Campaign Support",
  description: PAGE_DESCRIPTION,
  keywords: [
    "yacht design",
    "naval architecture",
    "yacht design studio",
    "foiling yacht design",
    "offshore racing yacht design",
    "sailing yacht engineering",
    "CFD hull design",
    "composite structural engineering",
    "flight control system sailing",
    "performance sailing consultancy",
    "AWA Apparent Wind Activities",
    "Loïc Goepfert",
    "Julien Boucher",
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "AWA Services — Yacht Design, Engineering & Campaign Support",
    description: PAGE_DESCRIPTION,
    siteName: ORG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "AWA Services — Yacht Design, Engineering & Campaign Support",
    description: PAGE_DESCRIPTION,
  },
}

const doors = [
  {
    prompt: "You want a boat.",
    title: "Commission",
    href: "#commissions",
  },
  {
    prompt: "You run a race programme or a team.",
    title: "Performance · Race",
    href: "#performance",
  },
  {
    prompt: "You build something else.",
    title: "Studio · Beyond sail",
    href: "#naval-tech",
  },
]

const faqs = [
  {
    q: "What does AWA do?",
    a: "AWA is a naval architecture and design practice founded by Loïc Goepfert and Julien Boucher. It designs high-performance sailing yachts — offshore racers, apex private yachts and fast cruisers — and supports them from the first feasibility study through build, flight and ownership.",
  },
  {
    q: "Can AWA design a boat that flies on foils?",
    a: "Yes. AWA designs foils, flight control systems and complete flight-conversion packages, and runs feasibility studies that tell you honestly whether an existing or planned boat can be made to fly, and at what cost in weight, money and risk.",
  },
  {
    q: "Does AWA only design racing yachts?",
    a: "No. Alongside offshore racers, AWA designs apex-performance private yachts, fast cruisers, foiling commercial vessels such as ferries, and products beyond sailing, applying the same race-derived engineering to each.",
  },
  {
    q: "How many services does AWA offer?",
    a: `AWA offers ${totalServices} distinct services across ${allSections.length} disciplines, grouped into four parts: the boat, the speed, the campaign and the studio. Most projects use only a handful of them, in the right order.`,
  },
  {
    q: "How do I start a project with AWA?",
    a: "Start with a short conversation. Describe the boat you have in mind and Loïc or Julien will reply. A thirty-minute call, followed by a feasibility study, is the usual first step.",
  },
]

function StructuredData() {
  const serviceItems = allSections.flatMap((section) =>
    section.services.map((service) => ({
      "@type": "Service",
      name: service.name,
      description: service.description,
      category: section.title,
      provider: { "@id": `${SITE_URL}/#organization` },
    })),
  )

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: ORG.name,
        legalName: ORG.legalName,
        url: SITE_URL,
        description: ORG.description,
        founder: ORG.founders.map((name) => ({ "@type": "Person", name })),
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: PAGE_URL,
        name: "AWA Services — Yacht Design, Engineering & Campaign Support",
        description: PAGE_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
        dateModified: LAST_UPDATED,
        breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "ItemList",
        name: "AWA services",
        description: `The complete catalogue of ${totalServices} AWA services across ${allSections.length} disciplines.`,
        numberOfItems: totalServices,
        itemListElement: serviceItems.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: service,
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData />
      <ProsePage
        wide
        eyebrow="Services"
        title="We design boats that fly. Then we teach you to fly them."
        intro={
          <>
            AWA is a naval architecture and design practice founded by Loïc
            Goepfert and Julien Boucher. This page is everything we do — {totalServices}{" "}
            services across {allSections.length} disciplines, from the first
            feasibility study to the captain who runs the boat after delivery.
            It is long, because the work is.
          </>
        }
      >
        <div className="flex flex-col">
          {/* Freshness signal */}
          <p className="text-[10px] tracking-[0.3em] text-[#292929]/40 uppercase">
            Updated{" "}
            <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
            {"  ·  "}
            {totalServices} services
          </p>

          {/* The three doors */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#292929]/10 border border-[#292929]/10">
            {doors.map((door) => (
              <a
                key={door.href}
                href={door.href}
                className="group flex flex-col gap-4 bg-[#f5f5f5] p-6 lg:p-8 hover:bg-[#ececec] transition-colors"
              >
                <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed text-balance">
                  {door.prompt}
                </p>
                <h2 className="text-[#292929] font-medium tracking-[0.12em] text-sm">
                  {door.title}
                </h2>
                <span className="mt-auto pt-4 text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase group-hover:text-[#292929] transition-colors">
                  Go {"\u2192"}
                </span>
              </a>
            ))}
          </div>

          {/* Section index */}
          <nav
            id="index"
            aria-label="Services index"
            className="pt-16 lg:pt-20 scroll-mt-28"
          >
            <hr className="mb-8 border-[#292929]/10" />
            <ul className="columns-1 lg:columns-2 gap-8">
              {allSections.map((section) => (
                <li key={section.id} className="mb-3 break-inside-avoid">
                  <a
                    href={`#${section.id}`}
                    className="section-title inline-block text-[11px] tracking-[0.2em] uppercase text-[#292929]/50 hover:text-[#292929] transition-colors"
                  >
                    <span className="text-[#292929]/50">{section.number}</span>
                    {"  \u2014  "}
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Parts & sections */}
          {parts.map((part) => (
            <div key={part.numeral}>
              <PartHeader numeral={part.numeral} title={part.title} />
              {part.sections.map((section) => (
                <ServiceSection
                  key={section.id}
                  id={section.id}
                  number={section.number}
                  title={section.title}
                  intro={section.intro}
                  services={section.services}
                />
              ))}
            </div>
          ))}

          {/* FAQ */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="pt-24 lg:pt-32 scroll-mt-28"
          >
            <p className="text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase">
              Common questions
            </p>
            <h2
              id="faq-heading"
              className="mt-3 text-xl lg:text-2xl font-medium tracking-[0.12em] text-[#292929] uppercase text-balance"
            >
              Before you write
            </h2>
            <hr className="mt-4 mb-8 border-[#292929]/10" />
            <dl className="flex flex-col">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="border-b border-[#292929]/10 py-6 first:pt-0"
                >
                  <dt className="text-sm font-medium text-[#292929] tracking-wide">
                    {faq.q}
                  </dt>
                  <dd className="mt-3 text-sm font-light italic text-[#292929]/70 leading-relaxed text-pretty max-w-prose">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Close */}
          <div className="pt-24 lg:pt-32 flex flex-col gap-6">
            <p className="body-text text-sm leading-relaxed text-justify">
              {totalServices} services. You will need perhaps five, in the right
              order — and the order matters more than the list. Naming what you
              need is our job, not yours.
            </p>
            <h2 className="text-xl lg:text-2xl font-medium tracking-[0.12em] text-[#292929] text-balance">
              Which boat is in your head?
            </h2>
            <p className="text-sm tracking-wider">
              <Link
                href="/about"
                className="text-[#292929]/70 hover:text-[#292929] transition-colors underline underline-offset-4 decoration-[#292929]/20 hover:decoration-[#292929] italic font-light"
              >
                Thirty minutes with Loïc. That is the next step, if you want
                one. {"\u2192"}
              </Link>
            </p>
            <a
              href="#index"
              className="pt-4 text-[10px] tracking-[0.3em] text-[#292929]/50 hover:text-[#292929] transition-colors uppercase"
            >
              {"\u2191"} Index
            </a>
          </div>
        </div>
      </ProsePage>
    </>
  )
}
