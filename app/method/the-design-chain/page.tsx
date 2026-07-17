import { ProsePage, SectionTitle, P, More } from "@/components/prose-page"

export default function DesignChainPage() {
  return (
    <ProsePage
      eyebrow="The Method"
      title="The engineering chain"
      backHref="/method"
      backLabel="The Method"
      intro="This page describes the work between the programme and the production package: the tools, the order in which they run, and what each one decides. The chain is the one used in current offshore racing programmes. Parts of it — control laws, failure-mode analysis, hardware-in-the-loop testing, flight envelopes — come from flight-control engineering outside sailing. Nothing on this page is simplified; the vocabulary is the working vocabulary."
    >
      <SectionTitle>1. From programme to design points</SectionTitle>
      <P>
        The written programme becomes a set of design points: the wind ranges and sea states in which the boat will actually sail, weighted by the usage profile. A boat used out of Palma in July and a boat crossing Biscay in October have different design points, and therefore different optimum hulls — before a single line is drawn. The design points also fix the first budgets: target displacement, righting-moment budget, and the sail-area envelope. Every trade-off for the rest of the project is priced against these points, in knots.
      </P>

      <SectionTitle>2. The performance model</SectionTitle>
      <P>
        The velocity prediction program is the arbiter of the whole chain. It solves the equilibrium of the boat — aerodynamic forces against hydrodynamic forces against weight and buoyancy, in six degrees of freedom — and returns the speed at every wind condition. For a flying boat the model has several regimes: hull-borne, skimming, and full flight, each with its own force model and its own stability constraints; the transitions between regimes are themselves design objects, because that is where flying boats are lost or saved.
      </P>
      <P>
        Early in a project the VPP runs on published coefficients and estimates; as the CFD matrices and, later, the trial data arrive, the model is progressively replaced by measured reality. Every candidate geometry in the project — hull, appendage, rig — returns through the VPP as a speed delta at the design points. Decisions are taken on those deltas, not on opinion.
      </P>

      <SectionTitle>3. Hull development</SectionTitle>
      <P>
        The hull is developed in RANS computations with free-surface capture, the hull left free to sink and trim, across a matrix of speeds, heel angles and leeway. The outputs — resistance, wave pattern, spray behaviour, chine immersion — feed response surfaces that the VPP reads. Seakeeping is computed in parallel: added resistance in waves at the design points, and the slamming exposure that will define structural load cases downstream. The hull that wins is not the one with the lowest resistance at one speed; it is the one whose weighted performance across the programme's design points is highest — the difference between those two hulls is the difference between a brochure and a programme.
      </P>

      <SectionTitle>4. Appendages — where the margins live</SectionTitle>
      <P>
        Foil and rudder sections are drawn against cavitation: the pressure distribution over the section is kept inside the cavitation limits at the target speeds, with the margin stated. Planforms are set for the target lift distribution and induced drag; the junction where a foil pierces the surface is treated for ventilation, which arrives without warning and removes lift when it does. Surface finish and profile tolerance are part of the hydrodynamic design, not the yard's problem: the flow the CFD assumed exists only if the built part matches the geometry, which is why finished appendages are 3D-scanned and compared to the file before they touch water.
      </P>
      <P>
        The structure of a composite foil is a design variable, not just a strength check. A foil bends and twists under load; the laminate can be arranged so that the twist unloads the tip as the load rises — the structure itself becomes the first and fastest controller, responding to a gust before any electronic system can. This coupling is engineered in fluid–structure computation and verified in bench load tests. Flutter and vibration margins are checked at the speeds the boat will actually reach, not the speeds brochures assume.
      </P>

      <SectionTitle>5. Structure</SectionTitle>
      <P>
        The load cases come from the physics above: righting-moment cases, appendage cases including impact, the slamming panels identified by the seakeeping work, rig loads from the sailplan. The global structure is computed in finite elements, with local models at the fittings and the foil cases where the load paths concentrate. The laminate schedules — fibre, angle, core, zone by zone — are written with stated safety factors, and the fatigue assumptions are explicit: load cycles are counted, and the telemetry the boat will carry later exists partly to verify them against reality. The output is a calculation file a classification society can check line by line.
      </P>

      <SectionTitle>6. Flight dynamics and control</SectionTitle>
      <P>
        Static equilibrium is enough to predict speed; it is not enough to fly. Flight requires a dynamic model: the boat in six degrees of freedom, in time, in waves. The model is linearised around the flight points, and the control laws — ride height, pitch, roll — are designed on it, with the actuation bandwidth checked against the sea states of the programme.
      </P>
      <P>
        Sensing is a problem in its own right: the height that matters is height above the mean water surface, and every sensor reads the waves instead. The filtering that extracts the one from the other is part of the control design, not an accessory.
      </P>
      <P>
        The failure logic is engineered with the same rigour as the nominal case: what the system does when sensors disagree, when an actuator drops, in each degraded mode, and how the boat lands under manual control. The analysis is a formal failure-modes review. Testing runs in three stages before the boat exists: the control laws against the dynamic model; then hardware-in-the-loop — the real electronics flying the simulated boat; then a human in the loop, in the simulator. The flight envelope that governs the boat for the rest of its life — the one written into the Manual and the captain's authority — is the product of this work, not a disclaimer added at the end.
      </P>
      <More href="/method/the-manual">The Manual</More>

      <SectionTitle>7. One model, three uses</SectionTitle>
      <P>
        The physics model is built once and used three times. It designs the boat. It tests the control system. And it trains the people: the simulator the owner and the crew fly is the design model itself, not an approximation of it. Corrections flow in both directions — trial data updates the model, and the updated model corrects the polars, the control laws and the training. The discipline this imposes is simple to state and rare in practice: there is one version of the truth about the boat, and everything reads from it.
      </P>
      <More href="/method/the-sim">The Sim</More>

      <SectionTitle>8. Weight, centre of gravity, inertia</SectionTitle>
      <P>
        The weight budget is the ledger the whole chain answers to: mass by part, written before design starts, policed through the build with weighing at milestones. For a flying boat the ledger has a second page: centres and inertias. Flight dynamics are sensitive not only to what the boat weighs but to where the mass sits — pitch inertia changes how the boat meets a wave — so the budget tracks both, and an interior arrangement decision is also a flight-dynamics decision. This is one reason the office draws the interior and the appendages under the same roof.
      </P>

      <SectionTitle>9. The production package and metrology</SectionTitle>
      <P>
        The chain ends in documents a yard builds from: drawings, laminate books, tolerances, and the inspection plan. Metrology closes the loop between the file and the object: parts are scanned and compared to the geometry, and the appendages are accepted against the tolerance the hydrodynamics assumed. A calculation is only as real as the part it becomes.
      </P>

      <SectionTitle>10. Trials, correlation, and the model updated</SectionTitle>
      <P>
        The launched boat is instrumented and sailed through a defined test matrix. The measurements are set against the predictions; the residuals are explained or investigated; the polar file, the dynamic model and the simulator are updated to the measured boat. The number the owner receives at the end is not the design target — it is the measured result, with its conditions and its date.
      </P>
      <More href="/method/measured-or-sim">Measured or sim</More>

      <P>
        The chain above is a racing programme's chain. The deliverable is different: a boat one owner runs, with the engineering file, the corrected model and the training that come with it. Questions on any step reach Loïc directly.
      </P>
    </ProsePage>
  )
}
