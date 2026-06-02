import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header / Navigation */}
      <header className="flex items-center justify-between px-8 py-6 lg:px-16">
        {/* AWA Icon */}
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/awa-icon.png"
            alt="AWA Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="flex items-center gap-8 lg:gap-12">
          <Link
            href="/race"
            className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-70 transition-opacity"
          >
            Race
          </Link>
          <Link
            href="/apex"
            className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-70 transition-opacity"
          >
            Apex
          </Link>
          <Link
            href="/cruise"
            className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-70 transition-opacity"
          >
            Cruise
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium tracking-wider text-[#292929] hover:opacity-70 transition-opacity"
          >
            Services
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-88px)] relative">
        {/* Left Side - Text Content */}
        <div className="flex-1 px-8 lg:px-16 py-8 lg:py-12">
          {/* Title */}
          <h1 className="text-[#292929] font-medium text-2xl lg:text-3xl tracking-[0.2em] leading-tight mb-32 lg:mb-48">
            APPARENT
            <br />
            WIND
            <br />
            ACTIVITIES
          </h1>

          {/* Lorem Ipsum Text */}
          <div className="max-w-xl">
            <p className="text-black font-light italic text-sm leading-relaxed tracking-wide text-justify">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed tracking-wide text-justify mt-0">
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </p>
            <p className="text-black font-light italic text-sm leading-relaxed tracking-wide text-justify mt-0">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
            </p>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="lg:absolute lg:right-0 lg:top-20 lg:w-[48%] lg:h-[calc(100vh-80px)]">
          <div className="w-full h-full bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{ aspectRatio: '5/6' }}
            >
              <source
                src="/awa-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  )
}
