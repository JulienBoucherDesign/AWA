"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

function AnimatedTranscript({ 
  messages 
}: { 
  messages: { sender: string; time: string; text: string }[]
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

  return (
    <div ref={containerRef} className="space-y-4 my-8 bg-[#292929]/5 p-6 rounded">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`transition-all duration-500 ${
            idx < visibleCount
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs font-mono text-[#292929]/50 mb-1">
            <span className="font-medium">{msg.sender}</span> — {msg.time}
          </p>
          <p className="text-sm font-light text-[#292929] whitespace-pre-wrap">
            {msg.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default function FerrariHypersail() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />

      <div className="px-8 lg:px-16 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-2">
            Ferrari Hypersail — Prequel
          </h1>
          <h2 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-12">
            How the project began.
          </h2>

          <hr className="mb-12 border-[#292929]/10" />

          {/* Epigraph */}
          <blockquote className="mb-12 border-l-2 border-[#292929]/30 pl-4">
            <p className="text-sm font-light italic text-[#292929]">
              This page is not a case study.
            </p>
            <p className="text-sm font-light italic text-[#292929]">
              It is a record.
            </p>
          </blockquote>

          <hr className="mb-12 border-[#292929]/10" />

          {/* The People */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The people</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Loïc Goepfert is a naval architect.
              He has been part of Guillaume Verdier's design team
              for years — the two of them go back to a hydroplane
              project they worked on together in 2002.
              That is where the working relationship started.
              It has held ever since.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Julien Boucher is a designer.
              He and Loïc have worked together for more than fifteen years.
              Alongside their commercial work,
              they developed a private practice —
              concept boats drawn for no one in particular,
              exploring what sailing vessels could look like
              a decade from now.
              A habit more than a method.
              A way of keeping the thinking sharp.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed">
              When Loïc joined Verdier's team,
              he brought that background with him.
              Verdier's office runs lean —
              there is no designer on staff.
              There has never needed to be one.
              Until there was.
            </p>
          </section>

          <hr className="mb-12 border-[#292929]/10" />

          {/* The Call - Intro */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The call</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              In 2022, Guillaume had been in conversation
              with John Elkann and Giovanni Soldini.
              How exactly the idea of a Ferrari sailing vessel
              first surfaced between them
              is not something we can say with certainty.
              That part of the story belongs to others.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-6">
              What is known is what Guillaume needed:
              a document that could make the idea tangible.
              Something Ferrari could look at and understand immediately.
              Precise enough to be credible.
              Resolved enough to feel real.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              Loïc called Julien.
              Julien was at his farm in the north of France,
              in the middle of other projects.
              Loïc was in Brittany, near the surf spots.
            </p>
          </section>

          {/* Transcript 1 */}
          <AnimatedTranscript
            messages={[
              { sender: "Loïc", time: "08:42", text: "you got time this week" },
              { sender: "Julien", time: "08:45", text: "depends. what's up" },
              { sender: "Loïc", time: "08:46", text: "Ferrari. offshore race boat.\nGuillaume is on it with Soldini and Elkann.\nthey want the fastest sailing vessel ever built." },
              { sender: "Julien", time: "08:50", text: "ok. I'm in." },
            ]}
          />

          <p className="text-sm font-light text-[#292929] leading-relaxed mb-4 mt-8">
            Julien said yes before he had asked a single question.
            The excitement was immediate.
            Underneath it, quietly,
            the awareness of the room this project lived in.
            Guillaume Verdier. Giovanni Soldini. John Elkann.
            Names that carry weight in very different worlds.
          </p>

          <p className="text-sm font-light text-[#292929] leading-relaxed mb-12">
            Julien dealt with that the way he deals with most things.
            He started drawing.
            The pressure disappears when the work begins.
          </p>

          <hr className="mb-12 border-[#292929]/10" />

          {/* The Brief */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The brief</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Loïc laid out what he knew.
              The ambition. The names involved. The timeline.
              One month.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Confidentiality was understood from the start —
              it always is, between them.
              Nothing leaked during the project.
              Nothing has leaked since.
              That is simply how they work.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              What the project required was specific:
              the fastest offshore racing sailing vessel ever built.
              A vessel that would carry the Ferrari name
              the way a Ferrari road car carries it —
              earned through the object itself,
              through what it is and how it moves.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-12">
              The harder question was one
              Loïc and Julien had never been asked before:
              what does a Ferrari sailing vessel actually look like?
            </p>
          </section>

          <hr className="mb-12 border-[#292929]/10" />

          {/* The Technical Foundation */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The technical foundation</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Loïc had spent years working with Guillaume
              on foiling IMOCAs —
              boats that circumnavigate the globe and break records.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-12">
              But his work on the America's Cup
              had introduced a different frame of reference.
              The AC75 — a monohull that leaves the water —
              had demonstrated that sustained foiling
              in serious offshore conditions was real.
              Not theoretical. Not experimental.
              Already happening, in increasingly demanding seas.
            </p>
          </section>

          {/* Transcript 2 */}
          <AnimatedTranscript
            messages={[
              { sender: "Loïc", time: "09:15", text: "I think we can get something this size flying offshore\nif we start from the AC75 logic but bigger\nand actually built for open ocean" },
              { sender: "Julien", time: "09:19", text: "and Ferrari on top of that" },
              { sender: "Loïc", time: "09:20", text: "exactly. any visual references in mind" },
              { sender: "Julien", time: "09:24", text: "looking at the 60s right now\nthe closed cockpit prototypes with the plexiglass bubbles\nthere's something there" },
              { sender: "Loïc", time: "09:25", text: "go" },
            ]}
          />

          <hr className="my-12 border-[#292929]/10" />

          {/* Two Directions */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">Two directions</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Julien opened two visual directions in parallel.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The first drew from the Testarossa —
              the 1990s road car, its wide haunches,
              its particular quality of presence.
              What would a hull look like with that DNA?
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The second looked further back.
              The Ferrari racing cars of the 1960s.
              The closed cockpits. The plexiglass bubbles.
              Those prototypes where the driver sat
              inside a sealed, sculpted shell —
              protected from the world moving past them
              at speeds the world wasn't designed for.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              A vessel moving at offshore racing speeds
              needs to protect its crew completely.
              A fully enclosed cockpit had almost no precedent
              in sailing in 2022.
              But the problem it solved was real.
              And those 1960s engineers had addressed
              a version of it sixty years earlier.
            </p>

            <div className="my-8 aspect-video bg-[#292929]/5 overflow-hidden rounded">
              <Image
                src="/ferrari-velarossa-sketch-1.jpg"
                alt="Ferrari Hypersail design sketches - 1960s direction"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Transcript 3 */}
          <AnimatedTranscript
            messages={[
              { sender: "Julien", time: "14:33", text: "[image — sketch, closed cockpit, 60s references]" },
              { sender: "Loïc", time: "14:37", text: "yeah that's it" },
              { sender: "Julien", time: "14:38", text: "Testarossa feels too 90s\nthe 60s stuff is cleaner\nand the closed cockpit actually solves\nthe crew protection problem at speed\nit's not just an aesthetic choice" },
              { sender: "Loïc", time: "14:40", text: "send it to Guillaume" },
            ]}
          />

          <p className="text-sm font-light text-[#292929] leading-relaxed mb-12 mt-8">
            The second direction carried
            both the visual logic and the technical argument.
            It won.
          </p>

          <hr className="mb-12 border-[#292929]/10" />

          {/* The Question */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The question with no answer</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              They could draw a fast boat.
              They had done it many times.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The difficulty was a question that had no reference:
              what does a Ferrari sailing vessel actually look like?
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Not a boat with Ferrari's logo on it.
              A boat that Ferrari made — the way Ferrari makes cars.
              What do the people who love Ferrari expect from it?
              What does the board expect?
              What does the object need to be, in itself,
              to be worth the name?
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              Loïc and Julien had spent fifteen years
              drawing boats that did not yet exist.
              This question was different.
              Nobody had answered it before.
            </p>
          </section>

          {/* Transcript 4 */}
          <AnimatedTranscript
            messages={[
              { sender: "Julien", time: "11:02", text: "I keep coming back to the same thing\nwhat does a Ferrari sailing vessel actually look like\nnot a boat with the logo\nsomething Ferrari would have designed themselves" },
              { sender: "Loïc", time: "11:06", text: "yeah that's the hard part\nnobody's done it before so there's nothing to reference\nwe just have to find it" },
              { sender: "Julien", time: "11:08", text: "working on it" },
            ]}
          />

          <hr className="my-12 border-[#292929]/10" />

          {/* How the Month Ran */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">How the month ran</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Every morning. WhatsApp.
              Julien at the farm in the north.
              Loïc near the surf in Brittany.
              Screenshots of sketches.
              Technical notes.
              Short messages that required long thinking.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Guillaume was present throughout —
              asking questions that dismantled assumptions.
              For Julien, working with Guillaume directly
              was new. The dynamic was different
              from the one he had with Loïc —
              less familiar, more exacting.
              A single question from Guillaume
              could make a week of work look uncertain.
              That was useful.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              Underneath all of it, a tension that never fully lifted.
              Not crisis. Not paralysis.
              The particular discomfort of working on something
              where the answer does not yet exist
              and the deadline does not move.
            </p>
          </section>

          {/* Transcript 5 */}
          <AnimatedTranscript
            messages={[
              { sender: "Loïc", time: "17:44", text: "Guillaume has a question about the foil geometry\nwhy that configuration and not the other one" },
              { sender: "Julien", time: "17:49", text: "honestly it's a fair question\nI'm not sure we fully justified that choice" },
              { sender: "Loïc", time: "17:51", text: "let's look at it again tomorrow morning" },
              { sender: "Julien", time: "17:52", text: "yeah" },
            ]}
          />

          <hr className="my-12 border-[#292929]/10" />

          {/* The Hull */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The hull</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The hull changed more than anything else in the project.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Each version was informed by the last.
              The process was progressive resolution —
              moving toward a form that felt settled
              rather than arrived at through effort.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The distinction matters.
              In a resolved hull, there is nothing left to argue with.
              The proportions hold.
              The transitions are clean.
              The eye moves across the surface without stopping.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              Loïc and Julien reached that point in the third week.
            </p>

            <div className="my-8 aspect-video bg-[#292929]/5 overflow-hidden rounded">
              <Image
                src="/ferrari-velarossa-sketch-2.png"
                alt="Ferrari Hypersail hull concept"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Transcript 6 */}
          <AnimatedTranscript
            messages={[
              { sender: "Julien", time: "09:11", text: "[image — iteration 7]" },
              { sender: "Loïc", time: "09:15", text: "the forward transition is still a bit hard" },
              { sender: "Julien", time: "09:33", text: "[image — iteration 8]" },
              { sender: "Loïc", time: "09:35", text: "that's it" },
            ]}
          />

          <hr className="my-12 border-[#292929]/10" />

          {/* The Red */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The red</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Julien applied Ferrari red to the surfaces.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Metallic red on a complex hull
              exposes everything that is not resolved.
              Every transition slightly off.
              Every proportion not fully settled.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              If the surfaces hold in that colour, they hold.
            </p>

            <div className="my-8 aspect-video bg-[#292929]/5 overflow-hidden rounded">
              <Image
                src="/ferrari-60s-inspired.jpeg"
                alt="Ferrari Hypersail - 1960s inspired cockpit design"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Transcript 7 */}
          <AnimatedTranscript
            messages={[
              { sender: "Julien", time: "16:05", text: "[image — red render, first pass]" },
              { sender: "Loïc", time: "16:09", text: "send it to Guillaume" },
            ]}
          />

          <hr className="my-12 border-[#292929]/10" />

          {/* The Document */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">The document</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The final deliverable was a photorealistic rendering.
              A fully resolved three-dimensional object,
              presented as if it already existed.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-12">
              The document did not propose the Ferrari Hypersail.
              It showed it —
              as something already inevitable,
              already real, already on the water.
            </p>
          </section>

          <hr className="mb-12 border-[#292929]/10" />

          {/* What Happened Next */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">What happened next</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-8">
              Loïc sent Julien a message.
              Short, as always.
            </p>
          </section>

          {/* Transcript 8 */}
          <AnimatedTranscript
            messages={[
              { sender: "Loïc", time: "11:17", text: "Ferrari is in" },
              { sender: "Julien", time: "11:19", text: "good" },
            ]}
          />

          <p className="text-sm font-light text-[#292929] leading-relaxed mb-12 mt-8">
            Two words. One month of work.
            Fifteen years of preparation.
          </p>

          <hr className="mb-12 border-[#292929]/10" />

          {/* What This Was */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">What this was</h3>
            
            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              Verdier's team does not carry a designer.
              When this project needed one,
              Loïc called the person he has worked with
              for fifteen years.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              That is what AWA is —
              Loïc's naval architecture and Julien's design,
              developed together across fifteen years
              and a long series of real vessels and concept boats.
              A shared language that needed no introduction
              when the right project finally arrived.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              The contribution to the Ferrari Hypersail
              was one month of work.
              A document. A concept.
              A visual argument for something
              that had no physical form yet.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              That document is now a vessel under construction.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-4">
              We do not talk about it much.
              The project belongs to others.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-12">
              But the story of how a WhatsApp message
              sent between a farm in northern France
              and a surf spot in Brittany
              became part of the history of Ferrari —
              that is worth recording.
            </p>

            <p className="text-sm font-light text-[#292929] leading-relaxed mb-12">
              Not as a credential.
              As an honest account of how the work happened.
            </p>
          </section>

          <hr className="mb-12 border-[#292929]/10" />

          {/* Timeline */}
          <section className="mb-12">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">Timeline</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2002</p>
                <p className="text-sm font-light text-[#292929]">Loïc Goepfert and Guillaume Verdier meet on a hydroplane project. A working relationship begins.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2005</p>
                <p className="text-sm font-light text-[#292929]">Loïc and Julien start working together. Over fifteen years they build a shared practice alongside their commercial work — concept boats, drawn for themselves.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2022 — The call</p>
                <p className="text-sm font-light text-[#292929]">Guillaume is in conversation with John Elkann and Giovanni Soldini. He needs a document. Loïc messages Julien on a Tuesday morning.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2022 — Week 1</p>
                <p className="text-sm font-light text-[#292929]">Typology defined. AC75 logic applied to offshore. First sketches.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2022 — Week 2</p>
                <p className="text-sm font-light text-[#292929]">Two visual directions explored. 1960s Ferrari references win. Hull iterations begin.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2022 — Week 3</p>
                <p className="text-sm font-light text-[#292929]">Forms converge. Red applied. Surfaces confirmed.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2022 — Week 4</p>
                <p className="text-sm font-light text-[#292929]">Photorealistic renders completed. Document delivered.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">2022 — Later</p>
                <p className="text-sm font-light text-[#292929]">A short message. Ferrari is in.</p>
              </div>
              <div className="grid grid-cols-[auto_1fr] gap-6">
                <p className="text-xs font-medium text-[#292929]/50 whitespace-nowrap">Now</p>
                <p className="text-sm font-light text-[#292929]">Ferrari Hypersail — in construction.</p>
              </div>
            </div>
          </section>

          <hr className="mb-12 border-[#292929]/10" />

          {/* On the Record */}
          <section className="mb-16">
            <h3 className="text-[10px] tracking-[0.3em] text-[#292929]/50 mb-6">On the record</h3>
            
            <div className="space-y-2 text-sm font-light text-[#292929]">
              <p><span className="font-medium">Naval architecture:</span> Guillaume Verdier / Loïc Goepfert</p>
              <p><span className="font-medium">Design concept:</span> AWA — Loïc Goepfert & Julien Boucher</p>
              <p><span className="font-medium">Client:</span> Ferrari</p>
              <p><span className="font-medium">Status:</span> In construction</p>
              <p><span className="font-medium">AWA involvement:</span> Prequel — concept and presentation design</p>
            </div>
          </section>

          {/* Final Quote */}
          <blockquote className="border-l-2 border-[#292929]/30 pl-4 mb-16">
            <p className="text-sm font-light italic text-[#292929]">
              Fifteen years of preparation.
            </p>
            <p className="text-sm font-light italic text-[#292929]">
              One month of work.
            </p>
            <p className="text-sm font-light italic text-[#292929]">
              One short message.
            </p>
          </blockquote>
        </div>
      </div>

      <Footer />
    </main>
  )
}
