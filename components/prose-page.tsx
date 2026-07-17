import type { ReactNode } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ProsePage({
  eyebrow,
  title,
  intro,
  children,
  backHref = "/about",
  backLabel = "About",
}: {
  eyebrow?: string
  title: string
  intro?: ReactNode
  children: ReactNode
  backHref?: string
  backLabel?: string
}) {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <div className="px-8 lg:px-16 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto">
          {eyebrow && (
            <p className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-3 uppercase">
              {eyebrow}
            </p>
          )}

          <h1 className="text-[#292929] font-medium tracking-[0.12em] text-2xl lg:text-3xl mb-8">
            {title}
          </h1>

          {intro && (
            <p className="text-base font-light italic text-[#292929] leading-relaxed text-justify mb-10">
              {intro}
            </p>
          )}

          <hr className="mb-10 border-[#292929]/10" />

          <div className="space-y-5">{children}</div>

          <hr className="my-12 border-[#292929]/10" />

          <Link
            href={backHref}
            className="text-[10px] tracking-[0.3em] text-[#292929]/50 hover:text-[#292929] transition-colors uppercase"
          >
            {"\u2190"} {backLabel}
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase pt-8">
      {children}
    </h2>
  )
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-light text-[#292929] leading-relaxed text-justify">
      {children}
    </p>
  )
}

export function More({ href, children }: { href: string; children: ReactNode }) {
  return (
    <p className="text-xs tracking-wider">
      <Link
        href={href}
        className="text-[#292929]/60 hover:text-[#292929] transition-colors underline underline-offset-4 decoration-[#292929]/20"
      >
        {children} {"\u2192"}
      </Link>
    </p>
  )
}
