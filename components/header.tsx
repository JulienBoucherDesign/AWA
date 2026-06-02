'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const navigation = {
  racing: {
    label: "Racing",
    items: [
      { label: "Ferrari Hypersail", href: "/racing/ferrari-hypersail" },
      { label: "Gitana18", href: "/racing/gitana18" },
    ],
  },
  apex: {
    label: "Apex performance",
    items: [
      { label: "75 Skimming trimaran", href: "/apex/75-skimming-trimaran" },
      { label: "72 Skimming catamaran", href: "/apex/72-skimming-catamaran" },
      { label: "50 ft Controlled Foiler", href: "/apex/50-controlled-foiler" },
    ],
  },
  cruising: {
    label: "Cruising",
    items: [
      { label: "78 ACC WING trimaran", href: "/cruising/78-acc-wing" },
      { label: "Alibi Catamarans", href: "/cruising/alibi" },
    ],
  },
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      <header
        className="awa-header flex items-center justify-between py-8 lg:py-0"
        style={{
          paddingLeft: "calc(2 / 42 * 100vw)",
          paddingRight: "calc(3 / 42 * 100vw)",
        }}
      >
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/awa-icon.png" alt="AWA" className="h-6 w-auto lg:h-5" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {Object.entries(navigation).map(([key, { label, items }]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium tracking-wider text-[#292929] hover:opacity-60 transition-opacity">
                {label}
                <ChevronDown size={14} className={`transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === key && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-[#f5f5f5] border border-[#e0e0e0] py-2 min-w-[200px]">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-light italic text-[#292929] hover:bg-[#e8e8e8] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link
            href="/about"
            className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-60 transition-opacity"
          >
            About
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#292929]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col gap-2 px-4 py-4 bg-[#f5f5f5] border-b border-[#e0e0e0]">
          {Object.entries(navigation).map(([key, { label, items }]) => (
            <div key={key}>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium tracking-wider text-[#292929]"
                onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
              >
                {label}
                <ChevronDown size={14} className={`transition-transform ${openDropdown === key ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === key && (
                <div className="pl-4 pb-2">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-2 text-sm font-light italic text-[#292929]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Link
            href="/about"
            className="py-2 text-sm font-medium tracking-wider text-[#292929]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </>
  )
}
