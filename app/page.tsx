'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

/**
 * AWA Landing Page
 * Desktop: 42-column grid with video and text side-by-side
 * Mobile: Full-width video, then title + text stacked
 */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ["Race", "Apex", "Cruise", "Services"]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* ── HEADER ── */}
      <header
        className="flex items-center justify-between py-5 lg:py-6"
        style={{
          paddingLeft: "calc(2 / 42 * 100vw)",
          paddingRight: "calc(3 / 42 * 100vw)",
        }}
      >
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/awa-icon.png" alt="AWA" className="h-5 w-auto lg:h-5" />
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
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
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

      {/* ── BODY: flex row (desktop grid), stacked (mobile) ── */}
      <div className="awa-section">

        {/* LEFT COLUMN — title top, text bottom (desktop) */}
        <div className="awa-left-col">

          {/* Video + Content Wrapper for Mobile */}
          <div className="lg:hidden w-full">
            {/* Mobile: Video full width */}
            <div className="awa-video-col">
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

            {/* Mobile: Title + Text side by side */}
            <div className="awa-mobile-content">
              <div className="awa-mobile-title">
                <h1 className="text-[#292929] font-medium tracking-[0.12em] leading-tight text-sm">
                  Apparent<br />Wind<br />Activities
                </h1>
              </div>
              <div className="awa-mobile-text space-y-3">
                {[
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
                  "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
                ].map((para, i) => (
                  <p
                    key={i}
                    className="text-black font-light italic text-xs leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Title at top */}
          <div className="hidden lg:block pt-4">
            <h1 className="text-[#292929] font-medium tracking-[0.12em] leading-tight text-[1.3rem]">
              APPARENT<br />WIND<br />ACTIVITIES
            </h1>
          </div>

          {/* Desktop: Spacer pushes text to bottom */}
          <div
            className="hidden lg:block flex-1"
            style={{ minHeight: "calc(17 / 42 * 100vw * 6 / 5 * 0.45)" }}
          />

          {/* Desktop: Body text aligned to bottom of video */}
          <div className="hidden lg:block space-y-0">
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
        </div>

        {/* RIGHT COLUMN — desktop video only (hidden on mobile) */}
        <div className="hidden lg:block awa-video-col">
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

      </div>
    </div>
  )
}
