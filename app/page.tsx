'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

/**
 * AWA Landing Page
 * Desktop: 42-column grid with video and text side-by-side
 * Mobile: Hero video first, then title + text
 */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ["Race", "Apex", "Cruise", "Services"]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* ── HEADER ── */}
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
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-60 transition-opacity"
            >
              {item}
            </Link>
          ))}
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
        <nav className="lg:hidden flex flex-col gap-4 px-4 py-4 bg-white border-b">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}

      {/* ── MOBILE: Hero Video ── */}
      <div className="lg:hidden w-full">
        <div className="bg-black w-full" style={{ aspectRatio: "5 / 6" }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover block"
          >
            <source src="/awa-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ── BODY: flex row (desktop grid), title + text (mobile) ── */}
      <div className="awa-section">

        {/* LEFT COLUMN — title top, text bottom (desktop) / hidden on mobile */}
        <div className="awa-left-col">

          {/* Desktop: Title at top */}
          <div className="hidden lg:block awa-desktop-title">
            <h1 className="text-[#292929] font-medium tracking-[0.12em] leading-tight text-[1.3rem]">
              APPARENT<br />WIND<br />ACTIVITIES
            </h1>
          </div>

          {/* Desktop: Body text — padding-top places it at row 13 from page top */}
          <div className="hidden lg:block awa-desktop-text space-y-0">
            {[
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
              "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.",
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
              "Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
              "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse.",
            ].map((para, i) => (
              <p
                key={i}
                className="text-black font-light italic text-sm leading-relaxed text-justify"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Mobile: Title + Text side by side */}
          <div className="lg:hidden awa-mobile-content pt-10 pb-6">
            <div className="awa-mobile-title">
              <h1 className="text-[#292929] font-medium tracking-[0.08em] leading-tight text-[0.9rem]">
                APPARENT<br />WIND<br />ACTIVITIES
              </h1>
            </div>
            <div className="awa-mobile-gap" />
            <div className="awa-mobile-text space-y-4">
              {[
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.",
              ].map((para, i) => (
                <p
                  key={i}
                  className="text-[#292929] font-light italic text-[0.75rem] leading-relaxed text-justify"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — desktop video only (hidden on mobile) */}
        <div className="hidden lg:block awa-video-col">
          <div className="awa-video-inner bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover block"
            >
              <source src="/awa-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </div>
  )
}
