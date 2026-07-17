import type { Service } from "@/lib/services-data"

export function ServiceSection({
  id,
  number,
  title,
  intro,
  services,
}: {
  id: string
  number: string
  title: string
  intro?: string
  services: Service[]
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 flex flex-col gap-5 lg:gap-6 pt-16 lg:pt-20"
    >
      <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase">
        <span className="text-[#292929]/50">{number}</span>
        {"  \u2014  "}
        {title}
      </h3>

      {intro ? (
        <p className="body-text text-sm font-light italic text-[#292929]/70 leading-relaxed text-pretty max-w-prose">
          {intro}
        </p>
      ) : null}

      <div className="border-t border-[#292929]/10">
        {services.map((service) => (
          <details
            key={service.name}
            className="group border-b border-[#292929]/10"
          >
            <summary className="flex items-start gap-4 py-3 lg:py-3.5 cursor-pointer list-none marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="flex-1 text-sm font-light text-[#292929] leading-relaxed">
                {service.name}
              </span>
              <span
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-[#292929]/40 transition-transform duration-200 group-open:rotate-45 group-hover:text-[#292929]"
              >
                {"\u002B"}
              </span>
            </summary>
            <p className="pb-4 pr-8 text-sm font-light italic text-[#292929]/70 leading-relaxed text-pretty max-w-prose">
              {service.description}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function PartHeader({
  numeral,
  title,
}: {
  numeral: string
  title: string
}) {
  return (
    <div className="pt-24 lg:pt-32 flex flex-col gap-3">
      <p className="text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase">
        {numeral}
      </p>
      <h2 className="text-xl lg:text-2xl font-medium tracking-[0.12em] text-[#292929] uppercase text-balance">
        {title}
      </h2>
      <hr className="mt-2 border-[#292929]/10" />
    </div>
  )
}
