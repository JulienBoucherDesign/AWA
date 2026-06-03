'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HoverVideoLink } from "@/components/hover-video-link"

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

          {/* Desktop: Title at row 3 from page top (padding-top = 2 rows) */}
          <div className="hidden lg:block awa-desktop-title">
            <h1 className="text-[#292929] font-medium tracking-[0.12em] leading-tight text-[1.3rem]">
              APPARENT<br />WIND<br />ACTIVITIES
            </h1>
          </div>

          {/* Desktop: Spacer pushes text to exactly row 13 from page top */}
          <div className="hidden lg:block awa-desktop-spacer" />

          {/* Desktop: Body text at row 13 */}
          <div className="hidden lg:block awa-desktop-text space-y-4">
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              Founded by Loïc Goepfert and Julien Boucher, AWA is a yacht design studio specializing in high-performance sailing vessels. Our team combines decades of experience in naval architecture, industrial design, and professional sailing to create innovative watercraft that push the boundaries of what&apos;s possible on the water.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              AWA operates at the intersection of offshore racing and private yacht design. We provide end-to-end design services for high-performance sailing vessels, from initial concept and naval architecture through to production-ready documentation and builder liaison. We work across three distinct segments: offshore racing, apex performance private yachts, and high-speed cruising. Each project is built on the same technical foundation: race-derived hydrodynamics, lightweight structural engineering, and sailplan optimization for apparent wind performance.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              Our core services cover hull form development and CFD-assisted hydrodynamic analysis, appendage design including daggerboards, rudders, and foiling systems, structural engineering with composite material specification, sailplan and rig configuration, interior volume optimization for cruising vessels, and full production drawing packages. We work directly with builders, suppliers, and class authorities. Our principals are embedded in active racing programmes — which means our design methodology is continuously stress-tested against the most demanding conditions in the sport.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              The apparent wind framework is central to how we design. Forward speed generates a greater and more powerful apparent wind. It means more drive, which increases forward speed further, and so on. The design implications of this loop touch every aspect of the vessel: hull entry, appendage cant, rig geometry, sail camber targets, weight budget. We engineer all of it as a single integrated system.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              The performance ceiling in sailing is rising faster than at any point in the sport&apos;s history. Foiling systems, wingsails, real-time structural monitoring, computational fluid dynamics integrated, VR design and training into the design loop from day one. The technology available to a design studio today would have been inaccessible to the largest professional teams a decade ago. AWA exists to deploy that technology in the service of boats that win.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed text-justify">
              We choose our clients as carefully as they choose us. And it is precisely that selectivity that makes an AWA design mean something. The result, every time, is a boat that does exactly what it was designed to do: go faster than everything around it.
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
                Founded by Loïc Goepfert and Julien Boucher, AWA is a yacht design studio specializing in high-performance sailing vessels. Our team combines decades of experience in naval architecture, industrial design, and professional sailing to create innovative watercraft that push the boundaries of what&apos;s possible on the water.
              </p>
              <p className="text-[#292929] font-light italic text-[0.75rem] leading-relaxed text-justify">
                AWA operates at the intersection of offshore racing and private yacht design. We provide end-to-end design services for high-performance sailing vessels, from initial concept and naval architecture through to production-ready documentation and builder liaison.
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

      {/* ── GITANA SECTION ── */}
      <div className="awa-section border-t border-[#e0e0e0] awa-gitana-section">
        {/* Desktop: Full-page image (cols 3-41, 2-col margins on each side) */}
        <div className="hidden lg:block awa-gitana-image">
          <HoverVideoLink
            imageSrc="/gitana-18.png"
            videoSrc="/gitana-flash.mp4"
            href="/racing/gitana18"
            alt="Gitana 18"
          />
        </div>

        {/* Mobile: Full-width image */}
        <div className="lg:hidden w-full px-4 py-6">
          <HoverVideoLink
            imageSrc="/gitana-18.png"
            videoSrc="/gitana-flash.mp4"
            href="/racing/gitana18"
            alt="Gitana 18"
          />
        </div>
      </div>

      {/* ── FERRARI + ALIBI SECTION ── */}
      <div className="awa-section border-t border-[#e0e0e0] awa-ferrari-section">
        {/* Desktop: Both images in grid */}
        <div className="hidden lg:block awa-ferrari-image">
          <HoverVideoLink
            imageSrc="/ferrari-cover-black.png"
            videoSrc="/ferrari-flash.mp4"
            href="/racing/ferrari-hypersail"
            alt="Ferrari yacht design"
          />
        </div>
        <div className="hidden lg:block awa-alibi-image">
          <HoverVideoLink
            imageSrc="/alibi-yard.png"
            videoSrc="/alibi-flash.mp4"
            href="/cruising/alibi"
            alt="Alibi Catamarans"
          />
        </div>

        {/* Mobile: Stacked images */}
        <div className="lg:hidden w-full px-4 py-6 space-y-6">
          <HoverVideoLink
            imageSrc="/ferrari-cover-black.png"
            videoSrc="/ferrari-flash.mp4"
            href="/racing/ferrari-hypersail"
            alt="Ferrari yacht design"
          />
          <HoverVideoLink
            imageSrc="/alibi-yard.png"
            videoSrc="/alibi-flash.mp4"
            href="/cruising/alibi"
            alt="Alibi Catamarans"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
