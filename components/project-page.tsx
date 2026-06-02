import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ProjectPageProps {
  category: string
  title: string
  subtitle?: string
  description: string[]
  specs?: { label: string; value: string }[]
}

export function ProjectPage({ category, title, subtitle, description, specs }: ProjectPageProps) {
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
            {category}
          </p>

          {/* Title */}
          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-2">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[#292929] font-light italic text-lg mb-8">
              {subtitle}
            </p>
          )}

          {/* Description */}
          <div className="mb-12 space-y-4">
            {description.map((para, i) => (
              <p
                key={i}
                className="text-[#292929] font-light italic text-sm leading-relaxed text-justify"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Specs */}
          {specs && specs.length > 0 && (
            <div className="border-t border-[#e0e0e0] pt-8">
              <h2 className="text-[#292929] font-medium tracking-wider text-sm mb-6">
                Specifications
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {specs.map((spec, i) => (
                  <div key={i}>
                    <p className="text-[#292929] font-light italic text-xs mb-1">
                      {spec.label}
                    </p>
                    <p className="text-[#292929] font-medium text-sm">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
