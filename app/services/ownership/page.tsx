import { ProsePage, SectionTitle, P, More } from "@/components/prose-page"

export default function OwnershipPage() {
  return (
    <ProsePage
      eyebrow="Services"
      title="Ownership"
      backHref="/services"
      backLabel="The work"
      intro="The services that run the boat after delivery: training, the season programme, the captains, the documentation, the telemetry, and the resale. Each is described below as it operates."
    >
      <SectionTitle>Flight School</SectionTitle>
      <P>The training is staged, and each stage has entry and exit criteria.</P>
      <P>
        <strong className="font-medium">The simulator stage — before launch.</strong> Your boat exists in the simulator months before it exists in water, built from the design geometry. The content: deck familiarisation, standard procedures, the flight envelope and its limits, and failure drills — what you do when the system hands the boat back to you. First mistakes happen here, at zero cost.
      </P>
      <P>
        <strong className="font-medium">The coached stages — on the water.</strong> First flights with a coach aboard. The envelope opens in defined steps: wind range, sea state, run length. Every session is debriefed against your own telemetry — times, speeds, control inputs — so progress is measured rather than felt.
      </P>
      <P>
        <strong className="font-medium">The handover.</strong> Sign-off criteria for unassisted sailing are written in advance. Your logbook is the data itself.
      </P>

      <SectionTitle>The season programme</SectionTitle>
      <P>
        The operating model: the boat is prepared to a written checklist before each of your windows, positioned where your season is, and maintained between windows to the Manual's schedule. Weather calls are made with you, from the routing data. The purpose is arithmetic: the owner's hours go to sailing; the operation of a small marine logistics business — which is what running such a boat otherwise is — goes to us.
      </P>

      <SectionTitle>The captains</SectionTitle>
      <P>
        The professional who runs your boat works from our documentation, holds the direct engineering line, and carries a written authority: the stated flight envelope, and the contractual right to refuse to exceed it — with anyone aboard. That clause protects the owner, the crew, the boat and the professional, in that order of intent.
      </P>

      <SectionTitle>The Manual and the line</SectionTitle>
      <P>
        The Manual contains the systems descriptions, the torque tables, the part numbers, the spares kits carried aboard, and the diagnosis trees for every failure mode we know of. It is updated from fleet experience: every failure report feeds the next revision.
      </P>
      <More href="/method/what-broke">What broke</More>
      <P>
        Behind the document, the line: an engineering question reaches the people who drew the part, and is answered in hours.
      </P>

      <SectionTitle>The telemetry</SectionTitle>
      <P>
        The boat logs position, speed, attitude, control system state, and loads where sensors are fitted. The data serves three functions. Progression: your sessions reviewed in numbers. Maintenance: load cycles counted, components flagged by usage rather than by calendar. Record: the factual account of what happened, at what speed, inside or outside the envelope — which protects everyone aboard, including the professional who runs the boat. Data access and ownership are stated in the contract.
      </P>

      <SectionTitle>The gatherings</SectionTitle>
      <P>
        Owners, coaches and the boats in one place, on the water and off the record: the environment in which the progression continues among peers.
      </P>

      <SectionTitle>When you sell</SectionTitle>
      <P>
        The resale process: the boat inspected and re-certified by the office that drew it, the refit specified and priced, and the next owner introduced through the same selection as the first. The certification exists because the second owner's confidence sets the residual value of every boat we have drawn.
      </P>

      <P>
        First step, whether the boat is ours or on order elsewhere: describe the boat and the season you want — Julien answers.
      </P>
    </ProsePage>
  )
}
