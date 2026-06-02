'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/**
 * AWA Landing Page
 * Desktop: 42-column grid with video and text side-by-side
 * Mobile: Hero video first, then title + text
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

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
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              AWA : Apparent Wind Activities. The velocity of our watercraft produces its own wind, which we skillfully harness to enhance our performance. A design that is optimized for apparent wind angles not only facilitates remarkable speeds, but also unrivaled flexibility and safety on the water. This allows for sailing exceptionally close to the wind and swiftly downwind under contemporary sailplans.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed text-justify pt-4">
              Founded by Loïc Goepfert and Julien Boucher, AWA is a yacht design studio specializing in high-performance sailing vessels. Our team combines decades of experience in naval architecture, industrial design, and professional sailing to create innovative watercraft that push the boundaries of what&apos;s possible on the water.
            </p>
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
              <p className="text-[#292929] font-light italic text-[0.75rem] leading-relaxed text-justify">
                AWA : Apparent Wind Activities. The velocity of our watercraft produces its own wind, which we skillfully harness to enhance our performance. A design that is optimized for apparent wind angles not only facilitates remarkable speeds, but also unrivaled flexibility and safety on the water.
              </p>
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

      <Footer />
    </div>
  )
}
