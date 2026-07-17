import { ProsePage, SectionTitle, P, More } from "@/components/prose-page"

export default function CommissionsPage() {
  return (
    <ProsePage
      eyebrow="Services"
      title="Commissions"
      backHref="/services"
      backLabel="The work"
      intro="A commission covers the complete design of one boat: naval architecture, engineering, exterior and interior design, supervision of the build, sea trials, and the owner's training. This page describes the scope, the feasibility study that starts every project, the seven phases, the division of decisions, and the fee structure."
    >
      <SectionTitle>Scope</SectionTitle>
      <P>
        <strong className="font-medium">Offshore racers.</strong> Designed inside a class rule or to an open brief. The work covers hull development, the appendage package, structural engineering to class and category requirements, sailplan and rig geometry, and the deck layout treated as a performance system. The design loop iterates VPP, CFD and structure against the rule and the weight budget until the trade-offs close. Where the campaign allows it, crew training in the simulator runs in parallel with the build, so that the boat and the crew are ready on the same date.
      </P>
      <P>
        <strong className="font-medium">Private builds to racing standard.</strong> The same engineering chain as a race boat — hull and appendages developed in VPP and CFD, composite structure engineered to defined load cases, flight control where the boat flies — combined with an interior and systems specified for private use. Briefs of this kind usually contain requirements that pull against each other: single-handed flight and family accommodation, a racing season and an ocean crossing. The feasibility study exists to quantify those trade-offs in numbers before design money is spent.
      </P>
      <P>
        <strong className="font-medium">Fast cruisers.</strong> Passage-making boats in which speed functions as a safety margin: a faster boat uses shorter weather windows and holds more routing options. Hull proportions chosen for passage speed, systems specified for shorthanded operation, and the same structural and weight discipline as the two categories above.
      </P>

      <SectionTitle>Starting points</SectionTitle>
      <P>
        A commission starts from a blank sheet, or from one of our designs — the Ipsum 45, the Tre Cento — configured to one owner: rig options, appendages, interior arrangement, systems. Configuration is engineering work, not a checklist; every option is recalculated into the weight budget and the performance prediction. The configured route is shorter and costs less. The blank sheet has no ceiling.
      </P>

      <SectionTitle>The feasibility study</SectionTitle>
      <P>
        Every project begins here. The study answers three questions — can the boat exist, what would it cost, how long would it take — and its conclusion can be negative; that conclusion is part of the service.
      </P>
      <P>
        <strong className="font-medium">1. Programme definition.</strong> Interviews with everyone who will use the boat, and where possible a day sailing together. Output: the written programme — who is aboard, in which waters, in which seasons, with which ambitions, and the usage profile in days per year.
      </P>
      <P>
        <strong className="font-medium">2. Candidate architectures.</strong> Two or three concepts run through VPP. Output: predicted speeds by wind range, flight thresholds where relevant, and the trade-off table — performance against accommodation against budget, in numbers.
      </P>
      <P>
        <strong className="font-medium">3. General arrangement.</strong> First lines, drawn far enough to test the life aboard against the structure and the weight estimate.
      </P>
      <P>
        <strong className="font-medium">4. Weight and cost envelope.</strong> A mass estimate by work package; a cost band with its assumptions stated; a register of the main risks.
      </P>
      <P>
        <strong className="font-medium">5. Build path.</strong> A shortlist of yards matched to the project, and a schedule with its uncertainties stated rather than smoothed.
      </P>
      <P>
        A fixed fee, credited against the commission if one follows.
      </P>

      <SectionTitle>The seven phases</SectionTitle>
      <P>
        <strong className="font-medium">1. The conversation.</strong> Thirty minutes with Loïc. The programme in outline; whether the physics agrees; whether a study is worth commissioning. No documents required.
      </P>
      <P>
        <strong className="font-medium">2. Observation.</strong> We sail with you before we draw. The hours aboard inform the programme, the deck layout and the interior; they are also the baseline for the ergonomics work.
      </P>
      <More href="/method/the-other-half">The other half</More>
      <P>
        <strong className="font-medium">3. The feasibility study.</strong> As above.
      </P>
      <P>
        <strong className="font-medium">4. Design.</strong> Preliminary design first — lines plan, appendage geometry, structural definition, general arrangement — then detailed design: laminate schedules, systems engineering, interior construction drawings, the full production package. The engineering underneath this phase is described tool by tool on its own page. One milestone specific to this office: before tooling begins, you walk the deck and the interior at full scale in the simulator, and the maneuvers are rehearsed on the geometry as drawn. Corrections at this stage cost hours; the same corrections after tooling cost months.
      </P>
      <More href="/method/the-design-chain">The engineering chain</More>
      <P>
        <strong className="font-medium">5. The build.</strong> Yard contract negotiated at your side; then engineering follow-up: milestone inspections, weight control with reporting at each stage, non-conformity management, and the build documented for you in photographs as it grows.
      </P>
      <P>
        <strong className="font-medium">6. Launch.</strong> A trials protocol measured against the predictions: the boat is instrumented, the first data is set against the VPP, and the polar file is corrected to reality. Commissioning of systems; handover to the Manual.
      </P>
      <More href="/method/measured-or-sim">Measured or sim</More>
      <P>
        <strong className="font-medium">7. Training and the seasons.</strong> Flight School and the season programme, described on the Ownership page. Your first simulator hours predate the launch.
      </P>
      <P>
        Each phase states its deliverables, its decision gates, and the time it asks of your calendar.
      </P>
      <More href="/method/process">The process, phase by phase</More>

      <SectionTitle>What we decide, what you decide</SectionTitle>
      <P>
        The programme, the life aboard, the ambition and the aesthetics you will live with are your decisions. The structure, the appendages, the flight envelope and the schedule of the build are ours. Where a preference of yours and a result of ours conflict on performance or safety, the data decides, and you see the data. Where the question is taste, you decide, and we say so with the same clarity. This division is written into the commission contract, because it is what keeps the engineering honest through years of close work.
      </P>

      <SectionTitle>Fees</SectionTitle>
      <P>
        The feasibility study is a fixed fee. The build contract is between you and the yard; we negotiate it at your side and supervise against it, which keeps our incentive aligned with yours rather than with the invoice total. Running costs are estimated in the study and updated at each phase gate.
      </P>

      <SectionTitle>The order book</SectionTitle>
      <P>
        Current availability and the next open slot are stated in conversation, with dates. First step: thirty minutes with Loïc.
      </P>
    </ProsePage>
  )
}
