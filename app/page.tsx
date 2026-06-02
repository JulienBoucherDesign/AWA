import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] overflow-x-hidden">
      {/* Fixed Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 lg:px-16 bg-[#f5f5f5]">
        {/* AWA Icon */}
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/awa-icon.png"
            alt="AWA Logo"
            className="h-6 w-auto"
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

      {/* Video - Fixed on right side */}
      <div className="hidden lg:block fixed top-0 right-0 w-[45%] h-screen z-40">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/awa-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content - Left Side */}
      <div className="lg:w-[55%] min-h-screen pt-20 lg:pt-24">
        {/* Title */}
        <div className="px-8 lg:px-16">
          <h1 className="text-[#292929] font-medium text-xl lg:text-2xl tracking-[0.2em] leading-tight">
            APPARENT
            <br />
            WIND
            <br />
            ACTIVITIES
          </h1>
        </div>

        {/* Spacer to push text to bottom */}
        <div className="h-[30vh] lg:h-[35vh]" />

        {/* Lorem Ipsum Text - Positioned at bottom */}
        <div className="px-8 lg:px-16 pb-8">
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
            <p className="text-black font-light italic text-sm leading-relaxed tracking-wide text-justify mt-4">
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
            <p className="text-black font-light italic text-sm leading-relaxed tracking-wide text-justify mt-4">
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Video */}
      <div className="lg:hidden w-full aspect-[5/6]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/awa-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  )
}
