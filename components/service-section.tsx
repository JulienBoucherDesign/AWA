export function ServiceSection({
  id,
  number,
  title,
  services,
}: {
  id: string
  number: string
  title: string
  services: string[]
}) {
  return (
    <section id={id} className="scroll-mt-28 flex flex-col gap-5 lg:gap-6 pt-16 lg:pt-20">
      <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase">
        <span className="text-[#292929]/50">{number}</span>
        {"  \u2014  "}
        {title}
      </h3>

      <ul className="border-t border-[#292929]/10">
        {services.map((service) => (
          <li
            key={service}
            className="border-b border-[#292929]/10 py-3 lg:py-3.5"
          >
            <span className="text-sm font-light text-[#292929] leading-relaxed">
              {service}
            </span>
          </li>
        ))}
      </ul>
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
