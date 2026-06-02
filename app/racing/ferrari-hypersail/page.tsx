"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function FerrariHypersailPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      
      <main className="relative">
        {/* Hero Section - Document Header */}
        <section className="pt-16 pb-8 px-8 lg:px-16">
          <div className="max-w-5xl">
            <p className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-2">
              Ferrari Hypersail design Prequel
            </p>
            <h1 className="text-4xl lg:text-6xl font-medium tracking-[0.08em] text-[#292929] leading-none">
              Ferrari Hypersail
            </h1>
            <p className="mt-4 text-sm font-light italic text-[#292929]/70">
              — Prequel
            </p>
            <p className="mt-1 text-xs tracking-wider text-[#292929]/40">
              How the project began.
            </p>
          </div>
        </section>

        {/* Epigraph */}
        <section className="px-8 lg:px-16 py-8 border-t border-[#292929]/10">
          <div className="max-w-xl ml-auto">
            <p className="text-xs font-light italic text-[#292929]/60 text-right leading-relaxed">
              This page is not a case study.<br />
              It is a record.
            </p>
          </div>
        </section>

        {/* The People */}
        <section className="px-8 lg:px-16 py-12 relative">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main text column */}
            <div className="lg:col-span-7">
              <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE PEOPLE</h2>
              
              <div className="space-y-6 text-sm font-light italic text-[#292929] leading-relaxed text-justify">
                <p>
                  <span className="font-medium not-italic">Loïc Goepfert</span> is a naval architect.
                  He has been part of Guillaume Verdier&apos;s design team
                  for years — the two of them go back to a hydroplane
                  project they worked on together in 2002.
                  That is where the working relationship started.
                  It has held ever since.
                </p>
                <p>
                  <span className="font-medium not-italic">Julien Boucher</span> is a designer.
                  He and Loïc have worked together for more than fifteen years.
                  Alongside their commercial work,
                  they developed a private practice —
                  concept boats drawn for no one in particular,
                  exploring what sailing vessels could look like
                  a decade from now.
                  <span className="block mt-2 text-[#292929]/50">A habit more than a method.</span>
                  <span className="block text-[#292929]/50">A way of keeping the thinking sharp.</span>
                </p>
              </div>
            </div>

            {/* Margin note */}
            <div className="lg:col-span-5 lg:pt-24">
              <div className="border-l-2 border-[#292929]/20 pl-4 py-2">
                <p className="text-[10px] tracking-wider text-[#292929]/40 mb-2">NOTE</p>
                <p className="text-xs font-light italic text-[#292929]/60 leading-relaxed">
                  When Loïc joined Verdier&apos;s team, he brought that background with him.
                  Verdier&apos;s office runs lean — there is no designer on staff.
                  There has never needed to be one.<br />
                  <span className="font-medium not-italic">Until there was.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Call - WhatsApp Style */}
        <section className="px-8 lg:px-16 py-16 bg-[#eaeaea]">
          <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">THE CALL</h2>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <p className="text-sm font-light italic text-[#292929] leading-relaxed text-justify mb-8">
                In 2022, Guillaume had been in conversation
                with John Elkann and Giovanni Soldini.
                How exactly the idea of a Ferrari sailing vessel
                first surfaced between them
                is not something we can say with certainty.
                That part of the story belongs to others.
              </p>
              <p className="text-sm font-light italic text-[#292929] leading-relaxed text-justify">
                What is known is what Guillaume needed:
                a document that could make the idea tangible.
                Something Ferrari could look at and understand immediately.
                Precise enough to be credible.
                Resolved enough to feel real.
              </p>
            </div>

            {/* Message Thread */}
            <div className="lg:col-span-6 lg:pl-8">
              <div className="bg-[#f5f5f5] p-6 space-y-4 font-mono">
                <p className="text-[10px] text-[#292929]/30 tracking-wider mb-4">TRANSCRIPT — WHATSAPP</p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] text-[#292929]/50">
                      <span className="font-medium">Loïc</span> — 08:42
                    </p>
                    <p className="text-xs text-[#292929] mt-1">you got time this week</p>
                  </div>
                  
                  <div className="pl-8">
                    <p className="text-[10px] text-[#292929]/50">
                      <span className="font-medium">Julien</span> — 08:45
                    </p>
                    <p className="text-xs text-[#292929] mt-1">depends. what&apos;s up</p>
                  </div>
                  
                  <div>
                    <p className="text-[10px] text-[#292929]/50">
                      <span className="font-medium">Loïc</span> — 08:46
                    </p>
                    <p className="text-xs text-[#292929] mt-1">
                      Ferrari. offshore race boat.<br />
                      Guillaume is on it with Soldini and Elkann.<br />
                      they want the fastest sailing vessel ever built.
                    </p>
                  </div>
                  
                  <div className="pl-8">
                    <p className="text-[10px] text-[#292929]/50">
                      <span className="font-medium">Julien</span> — 08:50
                    </p>
                    <p className="text-xs text-[#292929] mt-1 font-medium">ok. I&apos;m in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed">
              Julien said yes before he had asked a single question.
              The excitement was immediate.
              Underneath it, quietly,
              the awareness of the room this project lived in.
              <span className="block mt-4 text-[#292929]">
                Guillaume Verdier. Giovanni Soldini. John Elkann.
              </span>
              <span className="text-xs tracking-wider text-[#292929]/50">
                Names that carry weight in very different worlds.
              </span>
            </p>
          </div>
        </section>

        {/* The Brief */}
        <section className="px-8 lg:px-16 py-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE BRIEF</h2>
              
              <p className="text-sm font-light italic text-[#292929] leading-relaxed text-justify">
                Loïc laid out what he knew.
                The ambition. The names involved. The timeline.
              </p>
              <p className="text-3xl font-medium text-[#292929] my-8">
                One month.
              </p>
              <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed text-justify">
                Confidentiality was understood from the start —
                it always is, between them.
                Nothing leaked during the project.
                Nothing has leaked since.
                That is simply how they work.
              </p>
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              <div className="border-2 border-[#292929]/20 p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#292929]/40 mb-4">REQUIREMENT</p>
                <p className="text-lg font-light italic text-[#292929] leading-relaxed">
                  The fastest offshore racing sailing vessel ever built.
                </p>
                <p className="text-sm font-light italic text-[#292929]/60 mt-4 leading-relaxed">
                  A vessel that would carry the Ferrari name
                  the way a Ferrari road car carries it —
                  earned through the object itself,
                  through what it is and how it moves.
                </p>
              </div>

              <div className="mt-8 p-6 bg-[#292929] text-[#f5f5f5]">
                <p className="text-[10px] tracking-[0.3em] text-[#f5f5f5]/50 mb-4">THE QUESTION</p>
                <p className="text-base font-light italic leading-relaxed">
                  What does a Ferrari sailing vessel actually look like?
                </p>
                <p className="text-xs font-light italic text-[#f5f5f5]/50 mt-4">
                  Not a boat with Ferrari&apos;s logo on it.<br />
                  A boat that Ferrari made.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Two Directions - Visual Reference */}
        <section className="px-8 lg:px-16 py-16 bg-[#eaeaea]">
          <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">TWO DIRECTIONS</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Direction 1 - Testarossa */}
            <div className="relative">
              <div className="aspect-[4/3] bg-[#292929]/10 flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/ferrari-hypersail-sketch-1.png"
                  alt="Ferrari Hypersail design sketch"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed">
                The first drew from the Testarossa —
                the 1990s road car, its wide haunches,
                its particular quality of presence.
              </p>
              <p className="text-xs text-[#292929]/40 mt-4 line-through">
                Too 90s. Discarded.
              </p>
            </div>

            {/* Direction 2 - 1960s */}
            <div className="relative">
              <div className="aspect-[4/3] bg-[#292929] flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src="/ferrari-hypersail-concept.png"
                  alt="Ferrari 1960s design reference"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-light italic text-[#292929] leading-relaxed">
                The second looked further back.
                The Ferrari racing cars of the 1960s.
                The closed cockpits. The plexiglass bubbles.
              </p>
              <p className="text-xs font-medium text-[#292929] mt-4">
                This direction won.
              </p>
            </div>
          </div>

          {/* Message about the decision */}
          <div className="mt-12 bg-[#f5f5f5] p-6 max-w-xl font-mono">
            <div className="space-y-3">
              <div className="pl-8">
                <p className="text-[10px] text-[#292929]/50">
                  <span className="font-medium">Julien</span> — 14:38
                </p>
                <p className="text-xs text-[#292929] mt-1">
                  Testarossa feels too 90s<br />
                  the 60s stuff is cleaner<br />
                  and the closed cockpit actually solves<br />
                  the crew protection problem at speed<br />
                  <span className="text-[#292929]/50">it&apos;s not just an aesthetic choice</span>
                </p>
              </div>
              
              <div>
                <p className="text-[10px] text-[#292929]/50">
                  <span className="font-medium">Loïc</span> — 14:40
                </p>
                <p className="text-xs text-[#292929] mt-1 font-medium">send it to Guillaume</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Month */}
        <section className="px-8 lg:px-16 py-16">
          <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">HOW THE MONTH RAN</h2>
          
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <p className="text-sm font-light italic text-[#292929] leading-relaxed text-justify">
                Every morning. WhatsApp.
                Julien at the farm in the north.
                Loïc near the surf in Brittany.
                Screenshots of sketches.
                Technical notes.
                Short messages that required long thinking.
              </p>
              
              <div className="my-8 pl-4 border-l border-[#292929]/30">
                <p className="text-xs font-light italic text-[#292929]/60 leading-loose">
                  Guillaume was present throughout —<br />
                  asking questions that dismantled assumptions.<br />
                  A single question from Guillaume<br />
                  could make a week of work look uncertain.<br />
                  <span className="text-[#292929]">That was useful.</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              {/* Tension note */}
              <div className="bg-[#292929]/5 p-6">
                <p className="text-[10px] tracking-[0.3em] text-[#292929]/40 mb-4">OBSERVATION</p>
                <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed">
                  Underneath all of it, a tension that never fully lifted.
                  Not crisis. Not paralysis.
                  The particular discomfort of working on something
                  where the answer does not yet exist
                  and the deadline does not move.
                </p>
              </div>

              {/* Another message */}
              <div className="mt-6 bg-[#f5f5f5] p-4 font-mono border border-[#292929]/10">
                <div className="space-y-2">
                  <div>
                    <p className="text-[10px] text-[#292929]/50">
                      <span className="font-medium">Loïc</span> — 17:44
                    </p>
                    <p className="text-xs text-[#292929] mt-1">
                      Guillaume has a question about the foil geometry<br />
                      why that configuration and not the other one
                    </p>
                  </div>
                  <div className="pl-6">
                    <p className="text-[10px] text-[#292929]/50">
                      <span className="font-medium">Julien</span> — 17:49
                    </p>
                    <p className="text-xs text-[#292929] mt-1">
                      honestly it&apos;s a fair question<br />
                      <span className="text-[#292929]/50">I&apos;m not sure we fully justified that choice</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Hull */}
        <section className="px-8 lg:px-16 py-16 bg-[#292929] text-[#f5f5f5]">
          <h2 className="text-[10px] tracking-[0.4em] text-[#f5f5f5]/40 mb-8">THE HULL</h2>
          
          <div className="max-w-3xl">
            <p className="text-lg font-light italic leading-relaxed mb-8">
              The hull changed more than anything else in the project.
            </p>
            
            <p className="text-sm font-light italic text-[#f5f5f5]/70 leading-relaxed mb-8">
              Each version was informed by the last.
              The process was progressive resolution —
              moving toward a form that felt settled
              rather than arrived at through effort.
            </p>

            <div className="grid grid-cols-8 gap-2 my-12">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="aspect-square bg-[#f5f5f5]/10 flex items-center justify-center">
                  <span className="text-[10px] text-[#f5f5f5]/30">{i}</span>
                </div>
              ))}
            </div>

            <div className="my-12 overflow-hidden">
              <Image
                src="/ferrari-hypersail-concept.png"
                alt="Ferrari Hypersail hull concept"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p className="text-sm font-light italic text-[#f5f5f5]/70 leading-relaxed">
              In a resolved hull, there is nothing left to argue with.
              The proportions hold.
              The transitions are clean.
              The eye moves across the surface without stopping.
            </p>

            <p className="text-base font-medium text-[#f5f5f5] mt-8">
              Loïc and Julien reached that point in the third week.
            </p>
          </div>

          {/* Final iteration message */}
          <div className="mt-12 bg-[#f5f5f5]/10 p-4 max-w-md font-mono">
            <div className="space-y-2">
              <div className="pl-6">
                <p className="text-[10px] text-[#f5f5f5]/50">
                  <span className="font-medium">Julien</span> — 09:33
                </p>
                <p className="text-xs text-[#f5f5f5]/70 mt-1">[image — iteration 8]</p>
              </div>
              <div>
                <p className="text-[10px] text-[#f5f5f5]/50">
                  <span className="font-medium">Loïc</span> — 09:35
                </p>
                <p className="text-xs text-[#f5f5f5] mt-1 font-medium">that&apos;s it</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Red */}
        <section className="px-8 lg:px-16 py-16" style={{ backgroundColor: '#c41e3a' }}>
          <div className="max-w-3xl text-white">
            <h2 className="text-[10px] tracking-[0.4em] text-white/40 mb-8">THE RED</h2>
            
            <p className="text-lg font-light italic leading-relaxed mb-8">
              Julien applied Ferrari red to the surfaces.
            </p>

            <div className="my-12 overflow-hidden rounded">
              <Image
                src="/ferrari-hypersail-wing.png"
                alt="Ferrari Hypersail wing sail detail"
                width={800}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p className="text-sm font-light italic text-white/80 leading-relaxed mb-8">
              Metallic red on a complex hull
              exposes everything that is not resolved.
              Every transition slightly off.
              Every proportion not fully settled.
            </p>

            <p className="text-2xl font-medium leading-relaxed">
              If the surfaces hold in that colour, they hold.
            </p>

            <div className="mt-12 bg-white/10 p-4 max-w-xs font-mono">
              <div>
                <p className="text-[10px] text-white/50">
                  <span className="font-medium">Loïc</span> — 16:09
                </p>
                <p className="text-xs text-white mt-1 font-medium">send it to Guillaume</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="px-8 lg:px-16 py-16">
          <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">WHAT HAPPENED NEXT</h2>
          
          <div className="max-w-2xl">
            <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed mb-12">
              The final deliverable was a photorealistic rendering.
              A fully resolved three-dimensional object,
              presented as if it already existed.
              The document did not propose the Ferrari Hypersail.
              It showed it —
              as something already inevitable,
              already real, already on the water.
            </p>

            <div className="bg-[#292929] text-[#f5f5f5] p-8 my-12 font-mono">
              <div className="space-y-3">
                <div>
                  <p className="text-[10px] text-[#f5f5f5]/50">
                    <span className="font-medium">Loïc</span> — 11:17
                  </p>
                  <p className="text-base text-[#f5f5f5] mt-2 font-medium">Ferrari is in</p>
                </div>
                <div className="pl-8">
                  <p className="text-[10px] text-[#f5f5f5]/50">
                    <span className="font-medium">Julien</span> — 11:19
                  </p>
                  <p className="text-base text-[#f5f5f5] mt-2">good</p>
                </div>
              </div>
            </div>

            <p className="text-xl font-light italic text-[#292929] leading-relaxed text-center">
              Two words. One month of work.<br />
              <span className="font-medium">Fifteen years of preparation.</span>
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-8 lg:px-16 py-16 bg-[#eaeaea]">
          <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">TIMELINE</h2>
          
          <div className="max-w-3xl space-y-4">
            {[
              { year: "2002", text: "Loïc Goepfert and Guillaume Verdier meet on a hydroplane project. A working relationship begins." },
              { year: "2005", text: "Loïc and Julien start working together. Over fifteen years they build a shared practice alongside their commercial work." },
              { year: "2022", text: "The call. Guillaume is in conversation with John Elkann and Giovanni Soldini. He needs a document. Loïc messages Julien on a Tuesday morning." },
              { year: "Week 1", text: "Typology defined. AC75 logic applied to offshore. First sketches." },
              { year: "Week 2", text: "Two visual directions explored. 1960s Ferrari references win. Hull iterations begin." },
              { year: "Week 3", text: "Forms converge. Red applied. Surfaces confirmed." },
              { year: "Week 4", text: "Photorealistic renders completed. Document delivered." },
              { year: "Later", text: "A short message. Ferrari is in." },
              { year: "Now", text: "Ferrari Hypersail — in construction." },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-2">
                  <p className="text-[10px] tracking-wider text-[#292929]/40 font-medium">{item.year}</p>
                </div>
                <div className="col-span-10">
                  <p className="text-sm font-light italic text-[#292929] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* On The Record */}
        <section className="px-8 lg:px-16 py-16 border-t border-[#292929]/10">
          <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">ON THE RECORD</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-3xl">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#292929]/50">Naval architecture</span>
                <span className="font-medium text-[#292929]">Guillaume Verdier / Loïc Goepfert</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#292929]/50">Design concept</span>
                <span className="font-medium text-[#292929]">AWA — Loïc Goepfert & Julien Boucher</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#292929]/50">Client</span>
                <span className="font-medium text-[#292929]">Ferrari</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#292929]/50">Status</span>
                <span className="font-medium text-[#292929]">In construction</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#292929]/50">AWA involvement</span>
                <span className="font-medium text-[#292929]">Prequel — concept and presentation design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final Note */}
        <section className="px-8 lg:px-16 py-24 text-center">
          <p className="text-sm font-light italic text-[#292929]/50 leading-loose">
            Fifteen years of preparation.<br />
            One month of work.<br />
            One short message.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
