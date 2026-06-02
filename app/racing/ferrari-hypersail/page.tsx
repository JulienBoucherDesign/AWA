"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// Animated message component - messages appear one by one when scrolling into view
function AnimatedTranscript({ 
  messages, 
  darkMode = false 
}: { 
  messages: { sender: string; time: string; text: string; indent?: boolean }[]
  darkMode?: boolean 
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (hasStarted && visibleCount < messages.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [hasStarted, visibleCount, messages.length])

  const bgColor = darkMode ? "bg-[#f5f5f5]/10" : "bg-[#f5f5f5]"
  const textColor = darkMode ? "text-[#f5f5f5]" : "text-[#292929]"
  const mutedColor = darkMode ? "text-[#f5f5f5]/50" : "text-[#292929]/50"
  const labelColor = darkMode ? "text-[#f5f5f5]/30" : "text-[#292929]/30"

  return (
    <div ref={containerRef} className={`${bgColor} p-6 font-mono`}>
      <p className={`text-[10px] ${labelColor} tracking-wider mb-4`}>TRANSCRIPT — WHATSAPP</p>
      
      <div className="space-y-3 min-h-[120px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`transition-all duration-500 ${msg.indent ? "pl-8" : ""} ${
              i < visibleCount 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className={`text-[10px] ${mutedColor}`}>
              <span className="font-medium">{msg.sender}</span> — {msg.time}
            </p>
            <p className={`text-xs ${textColor} mt-1 whitespace-pre-line`}>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FerrariHypersailPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      
      <main className="relative">
        {/* Single column thread layout */}
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          
          {/* Hero */}
          <section className="pt-20 pb-12">
            <p className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-4">
              Ferrari Hypersail design Prequel
            </p>
            <h1 className="text-3xl lg:text-4xl font-medium tracking-[0.08em] text-[#292929] leading-tight">
              Ferrari Hypersail
            </h1>
            <p className="mt-2 text-sm font-light italic text-[#292929]/60">
              — Prequel
            </p>
          </section>

          {/* Epigraph */}
          <section className="py-8 border-t border-[#292929]/10">
            <p className="text-xs font-light italic text-[#292929]/50 leading-relaxed">
              This page is not a case study.<br />
              It is a record.
            </p>
          </section>

          {/* The People */}
          <section className="py-12">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE PEOPLE</h2>
            
            <div className="space-y-6 text-sm font-light italic text-[#292929] leading-relaxed">
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
              </p>
              <p className="text-[#292929]/50 pl-4 border-l border-[#292929]/20">
                A habit more than a method.<br />
                A way of keeping the thinking sharp.
              </p>
            </div>

            <div className="mt-8 text-xs font-light italic text-[#292929]/50 leading-relaxed pl-4 border-l-2 border-[#292929]/10">
              <p className="text-[10px] tracking-wider text-[#292929]/30 mb-2 not-italic">NOTE</p>
              When Loïc joined Verdier&apos;s team, he brought that background with him.
              Verdier&apos;s office runs lean — there is no designer on staff.
              There has never needed to be one.<br />
              <span className="font-medium not-italic text-[#292929]/70">Until there was.</span>
            </div>
          </section>

          {/* The Call */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE CALL</h2>
            
            <p className="text-sm font-light italic text-[#292929] leading-relaxed mb-6">
              In 2022, Guillaume had been in conversation
              with John Elkann and Giovanni Soldini.
              How exactly the idea of a Ferrari sailing vessel
              first surfaced between them
              is not something we can say with certainty.
              That part of the story belongs to others.
            </p>

            <p className="text-sm font-light italic text-[#292929] leading-relaxed mb-8">
              What is known is what Guillaume needed:
              a document that could make the idea tangible.
              Something Ferrari could look at and understand immediately.
              Precise enough to be credible.
              Resolved enough to feel real.
            </p>

            <AnimatedTranscript
              messages={[
                { sender: "Loïc", time: "08:42", text: "you got time this week" },
                { sender: "Julien", time: "08:45", text: "depends. what's up", indent: true },
                { sender: "Loïc", time: "08:46", text: "Ferrari. offshore race boat.\nGuillaume is on it with Soldini and Elkann.\nthey want the fastest sailing vessel ever built." },
                { sender: "Julien", time: "08:50", text: "ok. I'm in.", indent: true },
              ]}
            />

            <p className="mt-8 text-sm font-light italic text-[#292929]/70 leading-relaxed">
              Julien said yes before he had asked a single question.
              The excitement was immediate.
              Underneath it, quietly,
              the awareness of the room this project lived in.
            </p>

            <p className="mt-4 text-sm font-medium text-[#292929]">
              Guillaume Verdier. Giovanni Soldini. John Elkann.
            </p>
            <p className="text-xs tracking-wider text-[#292929]/40">
              Names that carry weight in very different worlds.
            </p>
          </section>

          {/* The Brief */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE BRIEF</h2>
            
            <p className="text-sm font-light italic text-[#292929] leading-relaxed">
              Loïc laid out what he knew.
              The ambition. The names involved. The timeline.
            </p>
            
            <p className="text-3xl font-medium text-[#292929] my-8">
              One month.
            </p>

            <p className="text-sm font-light italic text-[#292929]/60 leading-relaxed mb-8">
              Confidentiality was understood from the start —
              it always is, between them.
              Nothing leaked during the project.
              Nothing has leaked since.
              That is simply how they work.
            </p>

            <div className="border border-[#292929]/20 p-6 mb-6">
              <p className="text-[10px] tracking-[0.3em] text-[#292929]/40 mb-3">REQUIREMENT</p>
              <p className="text-base font-light italic text-[#292929] leading-relaxed">
                The fastest offshore racing sailing vessel ever built.
              </p>
              <p className="text-sm font-light italic text-[#292929]/50 mt-3 leading-relaxed">
                A vessel that would carry the Ferrari name
                the way a Ferrari road car carries it —
                earned through the object itself,
                through what it is and how it moves.
              </p>
            </div>

            <div className="bg-[#292929] text-[#f5f5f5] p-6">
              <p className="text-[10px] tracking-[0.3em] text-[#f5f5f5]/40 mb-3">THE QUESTION</p>
              <p className="text-base font-light italic leading-relaxed">
                What does a Ferrari sailing vessel actually look like?
              </p>
              <p className="text-xs font-light italic text-[#f5f5f5]/50 mt-3">
                Not a boat with Ferrari&apos;s logo on it.<br />
                A boat that Ferrari made.
              </p>
            </div>
          </section>

          {/* Two Directions */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">TWO DIRECTIONS</h2>
            
            <p className="text-sm font-light italic text-[#292929] leading-relaxed mb-8">
              Julien developed two visual directions.
              Both started from Ferrari&apos;s history.
              Both attempted to translate automotive presence into hull form.
            </p>

            {/* Direction 1 */}
            <div className="mb-8">
              <div className="aspect-[16/10] bg-[#292929]/5 overflow-hidden mb-4">
                <Image
                  src="/ferrari-hypersail-sketch-1.png"
                  alt="Ferrari Hypersail design sketch - Testarossa direction"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed">
                The first drew from the Testarossa —
                the 1990s road car, its wide haunches,
                its particular quality of presence.
              </p>
              <p className="text-xs text-[#292929]/40 mt-2 line-through">
                Too 90s. Discarded.
              </p>
            </div>

            {/* Direction 2 */}
            <div className="mb-8">
              <div className="aspect-[16/10] bg-[#292929] overflow-hidden mb-4">
                <Image
                  src="/ferrari-hypersail-concept.png"
                  alt="Ferrari Hypersail concept - 1960s direction"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-light italic text-[#292929] leading-relaxed">
                The second looked further back.
                The Ferrari racing cars of the 1960s.
                The closed cockpits. The plexiglass bubbles.
              </p>
              <p className="text-xs font-medium text-[#292929] mt-2">
                This direction won.
              </p>
            </div>

            <AnimatedTranscript
              messages={[
                { sender: "Julien", time: "14:38", text: "Testarossa feels too 90s\nthe 60s stuff is cleaner\nand the closed cockpit actually solves\nthe crew protection problem at speed", indent: true },
                { sender: "Julien", time: "14:39", text: "it's not just an aesthetic choice", indent: true },
                { sender: "Loïc", time: "14:40", text: "send it to Guillaume" },
              ]}
            />
          </section>

          {/* How The Month Ran */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">HOW THE MONTH RAN</h2>
            
            <p className="text-sm font-light italic text-[#292929] leading-relaxed mb-6">
              Every morning. WhatsApp.
              Julien at the farm in the north.
              Loïc near the surf in Brittany.
              Screenshots of sketches.
              Technical notes.
              Short messages that required long thinking.
            </p>

            <div className="pl-4 border-l border-[#292929]/20 mb-8">
              <p className="text-xs font-light italic text-[#292929]/60 leading-loose">
                Guillaume was present throughout —<br />
                asking questions that dismantled assumptions.<br />
                A single question from Guillaume<br />
                could make a week of work look uncertain.<br />
                <span className="text-[#292929] font-medium not-italic">That was useful.</span>
              </p>
            </div>

            <div className="bg-[#292929]/5 p-6 mb-8">
              <p className="text-[10px] tracking-[0.3em] text-[#292929]/30 mb-3">OBSERVATION</p>
              <p className="text-sm font-light italic text-[#292929]/60 leading-relaxed">
                Underneath all of it, a tension that never fully lifted.
                Not crisis. Not paralysis.
                The particular discomfort of working on something
                where the answer does not yet exist
                and the deadline does not move.
              </p>
            </div>

            <AnimatedTranscript
              messages={[
                { sender: "Loïc", time: "17:44", text: "Guillaume has a question about the foil geometry\nwhy that configuration and not the other one" },
                { sender: "Julien", time: "17:49", text: "honestly it's a fair question\nI'm not sure we fully justified that choice", indent: true },
                { sender: "Loïc", time: "17:52", text: "let's revisit it tomorrow" },
              ]}
            />
          </section>

          {/* The Hull */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE HULL</h2>
            
            <p className="text-lg font-light italic text-[#292929] leading-relaxed mb-6">
              The hull changed more than anything else in the project.
            </p>

            <p className="text-sm font-light italic text-[#292929]/60 leading-relaxed mb-8">
              Each version was informed by the last.
              The process was progressive resolution —
              moving toward a form that felt settled
              rather than arrived at through effort.
            </p>

            <div className="grid grid-cols-8 gap-1 mb-8">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div key={i} className="aspect-square bg-[#292929]/10 flex items-center justify-center">
                  <span className="text-[10px] text-[#292929]/30">{i}</span>
                </div>
              ))}
            </div>

            <div className="aspect-[16/9] bg-[#292929] overflow-hidden mb-8">
              <Image
                src="/ferrari-hypersail-concept.png"
                alt="Ferrari Hypersail hull - final iteration"
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm font-light italic text-[#292929]/60 leading-relaxed mb-6">
              In a resolved hull, there is nothing left to argue with.
              The proportions hold.
              The transitions are clean.
              The eye moves across the surface without stopping.
            </p>

            <p className="text-base font-medium text-[#292929] mb-8">
              Loïc and Julien reached that point in the third week.
            </p>

            <AnimatedTranscript
              messages={[
                { sender: "Julien", time: "09:33", text: "[image — iteration 8]", indent: true },
                { sender: "Loïc", time: "09:35", text: "that's it" },
              ]}
            />
          </section>

          {/* The Red */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE RED</h2>
            
            <p className="text-lg font-light italic text-[#292929] leading-relaxed mb-6">
              Julien applied Ferrari red to the surfaces.
            </p>

            <div className="aspect-[16/10] overflow-hidden mb-8" style={{ backgroundColor: '#c41e3a' }}>
              <Image
                src="/ferrari-hypersail-wing.png"
                alt="Ferrari Hypersail in red"
                width={600}
                height={375}
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              />
            </div>

            <p className="text-sm font-light italic text-[#292929]/60 leading-relaxed mb-6">
              Metallic red on a complex hull
              exposes everything that is not resolved.
              Every transition slightly off.
              Every proportion not fully settled.
            </p>

            <p className="text-xl font-medium text-[#292929] my-8 leading-relaxed">
              If the surfaces hold in that colour, they hold.
            </p>

            <AnimatedTranscript
              messages={[
                { sender: "Loïc", time: "16:09", text: "send it to Guillaume" },
              ]}
            />
          </section>

          {/* The Document */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">THE DOCUMENT</h2>
            
            <p className="text-sm font-light italic text-[#292929] leading-relaxed mb-6">
              At the end of the month,
              Loïc and Julien delivered a document.
              Renderings. Sections. Surface analyses.
              Enough for Ferrari to see what was possible.
            </p>

            <p className="text-sm font-light italic text-[#292929]/60 leading-relaxed mb-8">
              What happened next belongs to others.
              The decision to proceed.
              The conversations that followed.
              The build process that eventually began.
            </p>

            <div className="bg-[#292929] text-[#f5f5f5] p-6">
              <p className="text-base font-light italic leading-relaxed">
                Loïc and Julien went back to their other projects.
                The document they made became the basis
                for everything that came after.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-12 border-t border-[#292929]/10">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-8">TIMELINE</h2>
            
            <div className="space-y-4 text-xs font-light">
              <div className="flex gap-4">
                <span className="text-[#292929]/40 w-12 shrink-0">2002</span>
                <span className="text-[#292929]/60">Loïc and Guillaume begin working together</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#292929]/40 w-12 shrink-0">2007</span>
                <span className="text-[#292929]/60">Loïc and Julien begin working together</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#292929]/40 w-12 shrink-0">2022</span>
                <span className="text-[#292929]">Ferrari Hypersail prequel — one month</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[#292929]/40 w-12 shrink-0">2024</span>
                <span className="text-[#292929]/60">Ferrari Hypersail announced</span>
              </div>
            </div>
          </section>

          {/* Credits */}
          <section className="py-12 border-t border-[#292929]/10 mb-12">
            <h2 className="text-[10px] tracking-[0.4em] text-[#292929]/40 mb-6">ON THE RECORD</h2>
            
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-medium text-[#292929]">Naval Architecture</p>
                <p className="text-[#292929]/50">Guillaume Verdier, Loïc Goepfert</p>
              </div>
              <div>
                <p className="font-medium text-[#292929]">Design</p>
                <p className="text-[#292929]/50">Julien Boucher</p>
              </div>
              <div>
                <p className="font-medium text-[#292929]">Project Lead</p>
                <p className="text-[#292929]/50">Giovanni Soldini</p>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  )
}
