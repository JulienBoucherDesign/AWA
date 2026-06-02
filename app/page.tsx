import Link from "next/link"

/**
 * AWA 42-column grid
 *  col 1–2   : left margin  (2 cols)
 *  col 3–19  : text / title (17 cols) — .awa-left-col
 *  col 20–22 : center gap   (3 cols)
 *  col 23–39 : video        (17 cols) — .awa-video-col  (sticky)
 *  col 40–42 : right margin (3 cols)
 *
 *  Video is sticky on right. Text scrolls on left.
 *  Title is at top of left col, body text is pushed to bottom with flex-1 spacer.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* ── HEADER ── */}
      <header
        className="flex items-center justify-between py-5"
        style={{
          paddingLeft: "calc(2 / 42 * 100vw)",
          paddingRight: "calc(3 / 42 * 100vw)",
        }}
      >
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/awa-icon.png" alt="AWA" className="h-5 w-auto" />
        </Link>
        <nav className="flex items-center gap-10">
          {["Race", "Apex", "Cruise", "Services"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-60 transition-opacity"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* ── BODY: flex row, left text + right sticky video ── */}
      <div className="awa-section">

        {/* LEFT COLUMN — title top, text bottom */}
        <div className="awa-left-col">

          {/* Title at top */}
          <div className="pt-4">
            <h1 className="text-[#292929] font-medium tracking-[0.12em] leading-tight text-[1.3rem]">
              APPARENT<br />WIND<br />ACTIVITIES
            </h1>
          </div>

          {/* Spacer: pushes text block to the bottom of the video height */}
          <div
            className="flex-1"
            style={{ minHeight: "calc(17 / 42 * 100vw * 6 / 5 * 0.45)" }}
          />

          {/* Body text — aligns with bottom of video */}
          <div className="space-y-0">
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

        {/* RIGHT COLUMN — sticky video, aspect 5:6 */}
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

      </div>
    </div>
  )
}
