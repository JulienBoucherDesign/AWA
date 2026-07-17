import { ProsePage, SectionTitle, P, More } from "@/components/prose-page"

export default function EngineeringPage() {
  return (
    <ProsePage
      eyebrow="Services"
      title="Engineering"
      backHref="/services"
      backLabel="The work"
      intro="Packages for boats that exist and projects already underway. Each package is documented to racing standard: calculation files, drawings and specifications that a yard can build from and a class office can check. Each begins with a measurement of the current state and ends with numbers you can hold us to."
    >
      <More href="/method/the-design-chain">The toolchain behind every package</More>

      <SectionTitle>Performance</SectionTitle>
      <P>
        <strong className="font-medium">VPP studies.</strong> A velocity prediction program balances the aerodynamic and hydrodynamic forces on a boat and computes its speed for every wind condition. Inputs: hull and appendage geometry, sail inventory, weight and inertia. Outputs: the polar set for the boat as it is, then for each modification considered — options compared in knots. The study is sold alone, before any commitment; some projects sensibly end at this stage, because the numbers show the gain does not justify the spend. Deliverables: polar files, options matrix, written recommendation.
      </P>
      <P>
        <strong className="font-medium">Correlation campaigns.</strong> The simulation is only as good as its correlation. The campaign instruments the boat — position and attitude (GPS, inertial unit), rig loads, appendage loads where fitted, wind data, video — sails a defined test matrix, and sets the measurements against the predictions. Deliverables: the correlation report, the corrected polar file, and a statement of the residual uncertainty. This is where our published numbers come from.
      </P>
      <More href="/method/measured-or-sim">Measured or sim</More>
      <P>
        <strong className="font-medium">Class and rating optimisation.</strong> Inside a frozen rule, the remaining gains are examined in order: appendages, weight and its distribution, configuration, and — usually the largest untouched item — the cockpit and the crew work, which no measurement rule constrains.
      </P>
      <More href="/method/the-other-half">The other half</More>

      <SectionTitle>Appendages and flight</SectionTitle>
      <P>
        <strong className="font-medium">Appendage packages.</strong> Daggerboards, rudders, foil systems. The process: sections and planform derived from the target load cases and cavitation limits; the structure engineered from the load envelope with stated safety factors; the kinematics — bearings, rake and cant ranges — designed with the builder. Deliverables: geometry files, the structural calculation file, build specification with tolerances. New appendages, or replacements engineered to the boat's existing structure.
      </P>
      <P>
        <strong className="font-medium">Conversion to flight.</strong> A feasibility study first. It assesses, in order: righting moment against the lift required; the capacity of the existing structural grid at foil loads; rudder and elevator options; control authority across the speed range; and the crew loads the conversion would create. The conclusion is a go or no-go with the numbers attached. Not every boat can fly; the study establishes which, before the larger money is spent. If the answer is yes: the full package — appendages, structural reinforcement, control system.
      </P>
      <P>
        <strong className="font-medium">Flight control systems.</strong> The architecture: height and attitude sensing, actuation, control laws, and the failure logic — what the system does when a sensor disagrees, and how the boat lands under manual control. Engineered with our electronics partner, tested on the bench and in the simulator before installation. The design lineage runs through current offshore racing programmes; the exact scope of that work is on record.
      </P>
      <More href="/method/exact-roles">Exact roles</More>

      <SectionTitle>Structure and rig</SectionTitle>
      <P>
        <strong className="font-medium">Structures and composites.</strong> Load cases defined — rig loads, slamming, appendage cases — then dimensioning, laminate schedules, material specification, and the calculation files required by class societies and yards. Also sold as an audit of an existing structure or of another office's design, under the etiquette described below.
      </P>
      <P>
        <strong className="font-medium">Sailplan and rig.</strong> Geometry, aerodynamic targets, camber and twist objectives, and the working loop with your sailmaker and spar builder: design, measure on the water, revise — one loop rather than three separate conversations.
      </P>
      <P>
        <strong className="font-medium">Weight budget.</strong> The mass breakdown by work package, written at the start, policed through the build, reported at each milestone. Weight is the discipline that decides whether every other calculation above holds. Sold within a commission, or alone as the audit of a project drifting heavy.
      </P>

      <SectionTitle>Deck, cockpit and crew</SectionTitle>
      <P>
        <strong className="font-medium">Ergonomics and maneuver studies.</strong> The protocol: instrumented sailing days — maneuvers timed on video by station, crew movements mapped, physiological load logged where the crew agrees to it. The analysis separates the time lost to the deck layout from the time lost to practice, and quantifies the human share of the gap between the boat's polars and its results. Deliverables: the audit report, seconds by maneuver with sample sizes stated, and a modification plan ranked by gain.
      </P>
      <More href="/method/the-other-half">The other half</More>
      <P>
        <strong className="font-medium">Deck and cockpit refits.</strong> New deck plan or cockpit on the existing hull: engineering and design as one package, normally preceded by a maneuver study, and rehearsed in the simulator before the yard cuts.
      </P>

      <SectionTitle>Advisory</SectionTitle>
      <P>
        <strong className="font-medium">Design review.</strong> A reading of another office's package — geometry, structure, or the appendage file — at the owner's written mandate and with the other office informed. Deliverable: a written review with the calculations checked, not an opinion. The etiquette is not negotiable; it is what makes the review worth having in a small sport.
      </P>
      <P>
        <strong className="font-medium">Purchase due diligence.</strong> The technical examination of a performance boat before acquisition: structure, appendages, systems, maintenance history against the build specification, and the cost of what the asking price ignores.
      </P>
      <P>
        <strong className="font-medium">Owner's engineer.</strong> Your representative at the yard through someone else's design or build: reviews, milestone inspections, acceptance. The mandate is yours alone.
      </P>
      <P>
        <strong className="font-medium">The insurability file.</strong> The technical dossier an underwriter needs to say yes: the written flight envelope, the redundancy analysis, the training plan, the maintenance schedule. Assembled with your broker.
      </P>

      <P>
        Every package is signed by name and delivered with its calculation files. First step: describe the boat and the problem — Loïc answers.
      </P>
    </ProsePage>
  )
}
