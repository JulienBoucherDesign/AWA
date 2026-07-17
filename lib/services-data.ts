export type Service = {
  name: string
  description: string
}

export type Section = {
  id: string
  number: string
  title: string
  intro: string
  services: Service[]
}

export type Part = {
  numeral: string
  title: string
  sections: Section[]
}

export const parts: Part[] = [
  {
    numeral: "I",
    title: "The Boat",
    sections: [
      {
        id: "commissions",
        number: "01",
        title: "Commissions",
        intro:
          "A commission is a boat drawn for one owner and one purpose. We take a project from first ambition to a signed design, whether that is a full one-off or a tailored version of a proven platform.",
        services: [
          {
            name: "Full custom — offshore racer",
            description:
              "A ground-up one-off offshore racing yacht. Every line, appendage and system is drawn for a single boat, a single crew and a single campaign, with rule strategy and build supervision included.",
          },
          {
            name: "Full custom — private build to race standard",
            description:
              "A privately owned one-off engineered to full racing standards. You get race-derived hydrodynamics, structures and systems without the compromises of a production platform.",
          },
          {
            name: "Full custom — fast cruiser",
            description:
              "A one-off fast cruiser that trades nothing between speed and comfort. Drawn around how you actually sail, where you go and who is aboard.",
          },
          {
            name: "Semi-custom on a house model (Ipsum 45, Tre Cento)",
            description:
              "Your boat built on a proven AWA platform, tailored in layout, finish and performance package while keeping the cost and timeline certainty of a known hull.",
          },
          {
            name: "OSA programme",
            description:
              "A turnkey owner programme on a shared one-design platform: matched boats, a common rule and a coordinated calendar of racing and training.",
          },
          {
            name: "Feasibility study",
            description:
              "A short, honest study that answers one question before you commit: can this boat exist within your budget, timeline, rule and performance target?",
          },
          {
            name: "Programme definition",
            description:
              "We turn an ambition into a written brief — intended use, performance targets, budget envelope and constraints — that every later decision is measured against.",
          },
          {
            name: "Concept study",
            description:
              "Early exploration of hull, rig and appendage concepts, comparing directions on performance and feasibility before any one is developed in detail.",
          },
          {
            name: "Preliminary design",
            description:
              "The first coherent version of the whole boat: lines, general arrangement, weight and performance estimate, enough to validate the direction and cost it properly.",
          },
          {
            name: "Class / one-design",
            description:
              "Design of a strict one-design or class boat where every unit is identical, so results come down to the crew rather than the budget.",
          },
          {
            name: "Record programme",
            description:
              "A boat and campaign engineered around a specific record: the route, the expected conditions and the single number you are trying to beat.",
          },
          {
            name: "Series study / model industrialisation",
            description:
              "Turning a one-off or concept into a repeatable production model, resolving tooling, cost and build method without losing the original's character.",
          },
        ],
      },
      {
        id: "design",
        number: "02",
        title: "Design",
        intro:
          "Design is how the boat looks, feels and is lived in. We work the exterior, deck and interior as one language, so the styling and the naval architecture never fight each other.",
        services: [
          {
            name: "Exterior design",
            description:
              "The lines, stance and identity of the boat above the waterline, resolved together with the naval architecture so form and performance agree.",
          },
          {
            name: "Deck design",
            description:
              "The deck as a working and living surface: sightlines, flow, ergonomics and the visual language that ties it to the hull.",
          },
          {
            name: "Interior design",
            description:
              "The volumes you live in below, from layout and circulation to atmosphere, resolved against weight, structure and real use aboard.",
          },
          {
            name: "Volume optimisation",
            description:
              "Extracting the most usable, comfortable interior volume from a given hull without penalising weight, structure or performance.",
          },
          {
            name: "Furniture & joinery design",
            description:
              "Design of fitted furniture and joinery, detailed for weight, build method and life at sea rather than showroom appearance alone.",
          },
          {
            name: "Materials, finishes, light",
            description:
              "Selection and orchestration of materials, finishes and lighting so the interior reads as one considered environment, day and night.",
          },
          {
            name: "Livery, graphics, name",
            description:
              "The exterior graphic identity: livery, sponsor integration, typography and the boat's name, drawn to work at speed and in photographs.",
          },
          {
            name: "Use observation",
            description:
              "We watch how the boat is actually used, then feed those findings back into layout and detail decisions so the design fits real behaviour.",
          },
          {
            name: "Decision visualisation",
            description:
              "High-fidelity visuals produced specifically to let an owner make a design decision with confidence, not just to look good.",
          },
          {
            name: "Renders & project imagery",
            description:
              "Photoreal renders and project imagery for approvals, communication and press, kept faithful to the engineered design.",
          },
        ],
      },
      {
        id: "design-industriel",
        number: "03",
        title: "Industrial & Product Design",
        intro:
          "The same design discipline applied off the boat: hardware, watersports gear, powered foiling craft and products in other industries, from user research to manufacture.",
        services: [
          {
            name: "Marine product design (hardware, equipment)",
            description:
              "Design of marine hardware and equipment, engineered for load, corrosion and manufacture as well as how it looks and feels in the hand.",
          },
          {
            name: "Watersports equipment design — kite, wing, foil, boards",
            description:
              "Product design for kites, wings, foils and boards, drawing on the same hydro and aero tools we use on full-size boats.",
          },
          {
            name: "eFoil & powered foiling craft design",
            description:
              "Design of eFoils and powered foiling craft, coupling foil performance, control and ergonomics into a coherent product.",
          },
          {
            name: "Sports equipment design",
            description:
              "Performance sports equipment design, applying marine-grade structural and aerodynamic method to lighter, faster gear.",
          },
          {
            name: "Product design beyond marine",
            description:
              "Product design for clients outside the marine world who want the rigour of a high-performance design office applied to their object.",
          },
          {
            name: "Design for manufacture",
            description:
              "Reworking a design so it can actually be made at target cost and volume, resolving tooling, tolerances and assembly early.",
          },
          {
            name: "User research & user-centred design",
            description:
              "Structured research into how people use a product, feeding a design process anchored in real needs rather than assumptions.",
          },
          {
            name: "Product roadmap & range architecture",
            description:
              "Planning a coherent family of products — what comes first, what shares parts, how the range grows — over several years.",
          },
          {
            name: "Market study & product positioning",
            description:
              "Where a product sits against competitors and buyers, translated into concrete design and specification targets.",
          },
          {
            name: "Outsourced design studio direction",
            description:
              "We act as your external design studio, running product design end to end under your brand and roadmap.",
          },
          {
            name: "Product sourcing & industrialisation",
            description:
              "Taking a product from design to shipped units: supplier sourcing, tooling and industrialisation of the whole line.",
          },
        ],
      },
    ],
  },
  {
    numeral: "II",
    title: "The Speed",
    sections: [
      {
        id: "performance",
        number: "04",
        title: "Performance",
        intro:
          "Performance work turns a boat into numbers. We predict how fast it will go, where it wins or loses time, and how to get the best rating for how you actually sail.",
        services: [
          {
            name: "VPP study",
            description:
              "A velocity prediction program models how fast the boat sails at every wind angle and strength, giving the polar table that drives every design trade-off.",
          },
          {
            name: "Comparative options study",
            description:
              "A like-for-like performance comparison of design options — keel, rig, foil, displacement — so choices are made on numbers, not opinion.",
          },
          {
            name: "Season performance analysis",
            description:
              "Reviewing a full season of data to find where the boat and crew actually gain or lose, and where to invest next.",
          },
          {
            name: "Rating optimisation",
            description:
              "Tuning the boat and its configuration to get the most competitive handicap rating for its target racecourses.",
          },
          {
            name: "Rating & measurement certificates (IRC, ORC, classes)",
            description:
              "Managing measurement and the paperwork for IRC, ORC and class certificates so the boat is legal and optimally rated.",
          },
          {
            name: "Class rule interpretation",
            description:
              "Reading the class or rating rule closely to find what is genuinely allowed, and designing right up to that line.",
          },
        ],
      },
      {
        id: "hydrodynamique",
        number: "05",
        title: "Hydrodynamics",
        intro:
          "Hydrodynamics is everything the water does to the boat. We develop hull shapes and study resistance, seakeeping and stability using CFD, tank testing and decades of race data.",
        services: [
          {
            name: "Hull form development",
            description:
              "Developing the hull shape for low drag and the right behaviour across the boat's real operating range, not just one flat-water condition.",
          },
          {
            name: "Hydro CFD simulation",
            description:
              "Computational fluid dynamics of the hull and appendages in water, resolving drag, lift and flow long before anything is built.",
          },
          {
            name: "Seakeeping study",
            description:
              "How the boat moves, pitches and stays controllable in a real seaway, so speed on the polar survives contact with waves.",
          },
          {
            name: "Slamming study",
            description:
              "Predicting slamming loads and behaviour when the hull re-enters waves, protecting both structure and crew comfort.",
          },
          {
            name: "Hydrostatics & stability curves",
            description:
              "The fundamental floating and stability behaviour of the boat: trim, heel, righting arm and the limits that keep it safe.",
          },
          {
            name: "Added resistance in waves study",
            description:
              "Quantifying the speed lost to waves versus flat water, a decisive number for offshore and long-course performance.",
          },
          {
            name: "Towing tank testing",
            description:
              "Physical model testing in a towing tank to measure resistance and validate CFD with real water.",
          },
          {
            name: "Scale model testing",
            description:
              "Instrumented scale-model testing to explore behaviour that is expensive or risky to probe at full size.",
          },
          {
            name: "Wake & spray study",
            description:
              "Studying the wake and spray the hull generates, for drag, wetted appendages and, on some boats, class or comfort reasons.",
          },
        ],
      },
      {
        id: "aerodynamique",
        number: "06",
        title: "Aerodynamics",
        intro:
          "Aerodynamics is the engine and the brakes above the water. We develop sail plans and wingsails and hunt down parasitic drag, using CFD and wind-tunnel work.",
        services: [
          {
            name: "Aero CFD simulation",
            description:
              "Computational fluid dynamics of the rig, sails and above-water hull, resolving drive and drag across the wind range.",
          },
          {
            name: "Sail plan study",
            description:
              "Sizing and shaping the sail plan for the target conditions, balancing power, control and the boat's righting moment.",
          },
          {
            name: "Wingsail development",
            description:
              "Design and development of rigid or semi-rigid wingsails, from section choice to control and depower strategy.",
          },
          {
            name: "Windage & parasitic drag study",
            description:
              "Finding and cutting the drag that produces no drive — rig, hull topsides, fittings, crew — which matters most upwind and at speed.",
          },
          {
            name: "Wind tunnel testing",
            description:
              "Physical wind-tunnel testing of rigs and sail plans to validate aero predictions with measured forces.",
          },
          {
            name: "Coupled aero-hydro interaction",
            description:
              "Solving the boat as one system where aero forces set heel and leeway, which change the hydro forces, and back again.",
          },
        ],
      },
      {
        id: "appendices-vol",
        number: "07",
        title: "Appendages & Flight",
        intro:
          "Appendages are where modern speed is won, and flight is the extreme case. We design foils, boards and rudders, and the control systems that turn a boat into a flying one.",
        services: [
          {
            name: "Appendage package — daggerboards, rudders, foils",
            description:
              "The complete set of appendages designed as one system: daggerboards, rudders and foils balanced for lift, drag and control.",
          },
          {
            name: "Section & planform design",
            description:
              "Designing the aerofoil sections and the plan shape of each appendage for the lift, drag and cavitation margins it needs.",
          },
          {
            name: "Cavitation & ventilation study",
            description:
              "Predicting where foils will cavitate or ventilate at speed, the phenomena that set the real top-speed ceiling of a foiling boat.",
          },
          {
            name: "Appendage kinematics (rake, cant, retraction)",
            description:
              "The geometry and mechanism of how appendages rake, cant and retract, defining the boat's usable flight and trim range.",
          },
          {
            name: "Canting keel / righting systems",
            description:
              "Design of canting keels and other righting-moment systems that let a boat carry more sail for its weight.",
          },
          {
            name: "Hydroelastic study (fluid-structure coupling)",
            description:
              "Studying how appendages bend under load and how that bending changes the flow, a coupling that can make or break a foil.",
          },
          {
            name: "Flutter & vibration study",
            description:
              "Predicting flutter and vibration in appendages and structure, dangerous instabilities that appear at high speed.",
          },
          {
            name: "Flight conversion feasibility",
            description:
              "An honest first study of whether an existing or planned boat can be made to fly, and what it would cost in weight, money and risk.",
          },
          {
            name: "Flight conversion package",
            description:
              "The full design package to convert a boat to foiling: foils, structure, control and the systems that tie them together.",
          },
          {
            name: "Flight control system",
            description:
              "The sensors, actuators and logic that keep a foiling boat at a stable ride height and attitude.",
          },
          {
            name: "Control laws & filtering",
            description:
              "The control algorithms and signal filtering behind stable flight, tuned to the boat's dynamics and its sensors.",
          },
          {
            name: "Failure mode analysis (FMEA)",
            description:
              "A systematic study of how the flight and control system could fail and what happens when it does, so the boat stays safe.",
          },
          {
            name: "Hardware-in-the-loop testing",
            description:
              "Testing real control hardware against a simulated boat, so flight software is proven before anyone leaves the dock.",
          },
          {
            name: "Flight envelope",
            description:
              "Defining the safe boundaries of speed, wind and sea state within which the boat can fly, and how it behaves at the edges.",
          },
          {
            name: "Flight HMI",
            description:
              "The human-machine interface that lets the crew read and command the flight system without being overloaded.",
          },
          {
            name: "Impact strategy & appendage protection",
            description:
              "Planning for the hit — debris, groundings, whales — with breakaway or protected appendages that fail safely.",
          },
        ],
      },
      {
        id: "structure",
        number: "08",
        title: "Structure & Composites",
        intro:
          "Structure is the boat's skeleton, and in composites it is designed load path by load path. We define loads, run finite-element analysis and specify laminates and processes.",
        services: [
          {
            name: "Load case definition",
            description:
              "Establishing the loads the boat must survive — rig, foils, slamming, grounding — the foundation every structural calculation depends on.",
          },
          {
            name: "Global finite element analysis",
            description:
              "A full finite-element model of the boat's structure, showing how loads travel and where material is needed or wasted.",
          },
          {
            name: "Local analysis (fittings, foil cases, hard points)",
            description:
              "Detailed analysis of the most loaded regions — fittings, foil cases, chainplates — where failures actually start.",
          },
          {
            name: "Laminate / ply drawings",
            description:
              "The ply-by-ply laminate drawings the yard laminates from, defining exactly what fibre goes where, in which direction.",
          },
          {
            name: "Materials & process specification",
            description:
              "Specifying the composite materials and the build process — resin, cure, cores — that deliver the designed properties.",
          },
          {
            name: "Fatigue study",
            description:
              "Predicting how the structure ages under millions of load cycles, decisive for offshore boats and highly loaded foils.",
          },
          {
            name: "Crash box & safety structure study",
            description:
              "Designing crush structure and safety zones that absorb an impact and protect the crew and the boat's integrity.",
          },
          {
            name: "Calculation files for classification societies",
            description:
              "Preparing the structural calculation dossiers that classification societies require to certify the boat.",
          },
          {
            name: "Third-party structure audit",
            description:
              "An independent review of someone else's structural design, to confirm it is safe, efficient or fit for a new use.",
          },
          {
            name: "Failure analysis & breakage expertise",
            description:
              "Investigating why a structure broke, establishing the root cause for repair, redesign or dispute.",
          },
        ],
      },
      {
        id: "greement",
        number: "09",
        title: "Rig",
        intro:
          "The rig converts wind into drive and feeds huge loads into the boat. We set the sail plan and geometry and engineer mast, spars and rigging as a loaded system.",
        services: [
          {
            name: "Sail plan & rig geometry",
            description:
              "Setting the mast position, height, spreader and stay geometry that define the boat's power, balance and control.",
          },
          {
            name: "Mast & spar study",
            description:
              "Engineering the mast and spars for stiffness, strength and weight aloft, which drives stability and performance.",
          },
          {
            name: "Standing & running rigging",
            description:
              "Specifying the standing and running rigging — material, sizing and terminations — for the loads and the way the boat is sailed.",
          },
          {
            name: "Dynamic rig load study",
            description:
              "Predicting the peak and cyclic loads the rig sees in waves and manoeuvres, not just static dock numbers.",
          },
          {
            name: "Sail wardrobe specification & development",
            description:
              "Defining and developing the set of sails the boat needs across its wind range, in concert with the sailmaker.",
          },
          {
            name: "Sail / rig development loop",
            description:
              "Running an iterative loop between sail shapes, rig tune and measured performance to converge on the fast combination.",
          },
          {
            name: "Sailmaker / spar-maker interface",
            description:
              "Managing the technical interface between designer, sailmaker and spar-maker so the rig they build is the rig we drew.",
          },
        ],
      },
      {
        id: "poids",
        number: "10",
        title: "Weight & Balance",
        intro:
          "Weight and its distribution decide performance and safety. We budget every kilo, track it through the build and verify it by weighing and inclining the finished boat.",
        services: [
          {
            name: "Weight estimate",
            description:
              "A detailed, item-by-item estimate of the boat's weight and its distribution, the number that every performance figure rests on.",
          },
          {
            name: "Centre of gravity & inertias",
            description:
              "Establishing where the mass actually sits and how it resists rotation, which governs stability, pitch and handling.",
          },
          {
            name: "Weight control during build",
            description:
              "Tracking real component weights against the budget throughout construction, before overweight becomes irreversible.",
          },
          {
            name: "Weighing & inclining test",
            description:
              "Physically weighing the finished boat and running an inclining test to confirm mass and centre of gravity.",
          },
          {
            name: "Weight-drift project audit",
            description:
              "Auditing a project that is gaining weight, finding where it is coming from and what can still be recovered.",
          },
        ],
      },
      {
        id: "systemes",
        number: "11",
        title: "Systems & Energy",
        intro:
          "Systems are the boat's nervous and circulatory system. We architect hydraulics, electrics, propulsion and energy so everything works together, reliably, within the energy budget.",
        services: [
          {
            name: "Systems architecture",
            description:
              "The master plan for how every system on the boat connects, is powered and is controlled, decided before detail design begins.",
          },
          {
            name: "Hydraulics",
            description:
              "Design of the hydraulic systems that drive canting keels, foils, winches and rams, sized for load, speed and reliability.",
          },
          {
            name: "Electrical & distribution",
            description:
              "The electrical system and its distribution, from generation to every load, designed for the marine environment.",
          },
          {
            name: "Energy budget & autonomy",
            description:
              "Balancing energy generation against consumption to guarantee the boat's autonomy for its intended use.",
          },
          {
            name: "Electric / hybrid propulsion",
            description:
              "Design and integration of electric or hybrid propulsion, sized against range, weight and charging strategy.",
          },
          {
            name: "Hydrogeneration, solar",
            description:
              "Integrating hydrogenerators and solar into the energy system to extend autonomy and cut reliance on the engine.",
          },
          {
            name: "Handling systems & winches",
            description:
              "Specifying the winches and handling systems that let the crew work the boat at the loads it generates.",
          },
          {
            name: "Deck hardware & layout specification",
            description:
              "Selecting and positioning deck hardware and defining the deck layout for efficient, safe crew work.",
          },
          {
            name: "Steering & transmissions",
            description:
              "Design of the steering system and mechanical transmissions for feel, redundancy and reliability.",
          },
          {
            name: "Navigation electronics & instrumentation",
            description:
              "Specifying and integrating the navigation electronics and instruments the crew relies on to sail and decide.",
          },
          {
            name: "Autopilot integration",
            description:
              "Integrating the autopilot with sensors, steering and, where relevant, the flight system for reliable hands-off performance.",
          },
          {
            name: "Safety & survival systems",
            description:
              "The systems that keep people alive when things go wrong: liferafts, EPIRBs, communications and their integration.",
          },
          {
            name: "Comfort — noise, vibration, thermal",
            description:
              "Engineering out noise, vibration and thermal problems so the boat is liveable, especially on cruising yachts.",
          },
          {
            name: "Tender, garage, retractable systems",
            description:
              "Design of tender garages and retractable systems that hide complexity without wrecking structure or weight.",
          },
        ],
      },
      {
        id: "performance-humaine",
        number: "12",
        title: "Human Performance & Simulator",
        intro:
          "The crew is half the boat. We measure and optimise how people work aboard, and build simulators and digital twins so training and design happen before the boat is even launched.",
        services: [
          {
            name: "Boat ergonomics audit",
            description:
              "A structured audit of how the boat fits the human body at work: reach, force, posture and the injuries waiting to happen.",
          },
          {
            name: "Human performance audit",
            description:
              "Assessing how the crew actually performs against the boat's potential, and where human factors are costing time.",
          },
          {
            name: "Crew baseline",
            description:
              "Establishing a measured baseline of crew physiology and output, the reference every training gain is judged against.",
          },
          {
            name: "Cockpit optimisation & crew choreography",
            description:
              "Optimising the cockpit and the crew's movements so manoeuvres are faster, safer and repeatable under pressure.",
          },
          {
            name: "Crew instrumentation",
            description:
              "Instrumenting the crew themselves — load, heart rate, motion — to turn effort into data you can act on.",
          },
          {
            name: "Load & fatigue study",
            description:
              "Quantifying the physical loads and fatigue the crew accumulates, which sets the real limit on long races.",
          },
          {
            name: "Fatigue-informed design",
            description:
              "Designing the boat around how a tired human behaves at hour forty, not a fresh one at the dock.",
          },
          {
            name: "Visibility & helm station study",
            description:
              "Studying sightlines and the helm station so the driver can see what matters and steer well in every condition.",
          },
          {
            name: "Virtual mock-up before cutting",
            description:
              "Building the boat in virtual reality so owner and crew can walk it, test ergonomics and change things before any material is cut.",
          },
          {
            name: "Pre-launch training",
            description:
              "Training the crew on a simulator of their own boat before it launches, so day one on the water is not day one of learning.",
          },
          {
            name: "Continuous simulator training",
            description:
              "An ongoing simulator programme that keeps the crew sharp and lets them rehearse manoeuvres and failures on demand.",
          },
          {
            name: "Simulator environment development",
            description:
              "Building the simulator environment itself — the boat model, the physics, the conditions — tailored to a specific programme.",
          },
          {
            name: "Boat digital twin",
            description:
              "A living digital twin of the boat, fed by real data, used for prediction, training and maintenance decisions.",
          },
          {
            name: "Simulation as a service",
            description:
              "On-demand access to our simulation capability, so you can answer a design or racing question without owning the toolchain.",
          },
          {
            name: "Ergonomics corpus licence",
            description:
              "Licensing our accumulated ergonomics data and methods for use inside your own design or training organisation.",
          },
        ],
      },
    ],
  },
  {
    numeral: "III",
    title: "The Campaign",
    sections: [
      {
        id: "course",
        number: "13",
        title: "Racing",
        intro:
          "A campaign is a boat kept fast over a season and across years. We run design offices for teams, prepare and refit boats, and provide technical direction on and off the water.",
        services: [
          {
            name: "Outsourced design office",
            description:
              "We become the design office for a racing team, providing the full technical function without the cost of building one in-house.",
          },
          {
            name: "Campaign preparation",
            description:
              "Preparing a boat and its technical package for a specific campaign, from configuration choices to spares and documentation.",
          },
          {
            name: "Deck & cockpit refit",
            description:
              "Reworking the deck and cockpit between programmes to fit new crew, new hardware or new rules.",
          },
          {
            name: "Between-season optimisation",
            description:
              "Using the off-season to make targeted, evidence-based improvements identified from the season's data.",
          },
          {
            name: "On-water technical support",
            description:
              "Technical support at the regatta or on the delivery, keeping the boat legal, reliable and fast in real time.",
          },
          {
            name: "Crew training",
            description:
              "Training the crew on the systems and manoeuvres specific to their boat, on the water and in the simulator.",
          },
          {
            name: "Programme technical direction",
            description:
              "Taking technical ownership of a whole programme, coordinating design, build, suppliers and the racing calendar.",
          },
        ],
      },
      {
        id: "production",
        number: "14",
        title: "Production",
        intro:
          "Production is where the design meets the yard. We deliver the full drawing package, tender and select builders, and police quality, schedule and budget through to acceptance.",
        services: [
          {
            name: "Production drawing package",
            description:
              "The complete set of drawings a yard needs to build the boat exactly as designed, with nothing left to guesswork.",
          },
          {
            name: "Mould & tooling drawings",
            description:
              "The drawings for the moulds and tooling the boat is built on, the master geometry everything else references.",
          },
          {
            name: "Yard selection & tender",
            description:
              "Running a structured tender to find and select the right yard on capability, price and risk, not just reputation.",
          },
          {
            name: "Build specification writing",
            description:
              "Writing the build specification that defines exactly what the yard must deliver, the contract's technical backbone.",
          },
          {
            name: "Yard liaison",
            description:
              "Day-to-day technical liaison with the yard, answering questions and resolving issues so the build keeps moving correctly.",
          },
          {
            name: "Supplier liaison",
            description:
              "Coordinating the specialist suppliers — spars, foils, systems — so their parts arrive right and on time.",
          },
          {
            name: "Classification & measurement liaison",
            description:
              "Managing the relationship with classification societies and measurers so certification does not stall the build.",
          },
          {
            name: "Milestone & non-conformity tracking",
            description:
              "Tracking build milestones and logging non-conformities, so problems are caught and closed rather than buried.",
          },
          {
            name: "3D scan & as-built comparison",
            description:
              "3D scanning the real structure and comparing it to the design file to verify geometry the eye cannot check.",
          },
          {
            name: "Inspection plan",
            description:
              "Defining what gets inspected, when and by whom, so quality is verified at the right moments, not just at the end.",
          },
          {
            name: "Build cost estimate & tracking",
            description:
              "Estimating the build cost and tracking it through construction so budget surprises are seen coming.",
          },
          {
            name: "Build schedule",
            description:
              "Building and maintaining the construction schedule that ties design releases, supplier deliveries and yard work together.",
          },
        ],
      },
      {
        id: "chantier",
        number: "15",
        title: "Yard & Industrialisation",
        intro:
          "Beyond a single build, we help yards make boats repeatably. We set up production, transfer and industrialise it, and audit and train the workforce that delivers quality.",
        services: [
          {
            name: "Yard set-up",
            description:
              "Setting up a yard or production line to build a given boat: layout, process, tooling and the flow between them.",
          },
          {
            name: "Production transfer",
            description:
              "Moving production of a design from one yard or country to another without losing quality or geometry.",
          },
          {
            name: "Series industrialisation",
            description:
              "Turning a design into an efficient series production, resolving cost, cycle time and repeatability.",
          },
          {
            name: "Composite sourcing & supply chain",
            description:
              "Building the composite material supply chain — sourcing, qualification and logistics — that a build depends on.",
          },
          {
            name: "Factory quality control",
            description:
              "Establishing the quality control system inside the factory that keeps every hull to the same standard.",
          },
          {
            name: "Workshop training",
            description:
              "Training the workshop teams in the specific composite and assembly techniques a design requires.",
          },
          {
            name: "Yard capability audit",
            description:
              "An independent audit of whether a yard can actually deliver a given project, on quality, capacity and process.",
          },
          {
            name: "Build direction",
            description:
              "Taking direction of the build on the ground, running the yard's technical effort toward launch.",
          },
        ],
      },
      {
        id: "reglementaire",
        number: "16",
        title: "Regulatory & Safety",
        intro:
          "Every boat must be legal and safe to use. We handle CE marking, stability, flag, commercial coding and the safety and insurability files that let the boat operate.",
        services: [
          {
            name: "CE marking & design categories",
            description:
              "Taking the boat through CE marking and its design category, the legal gateway to selling and using it in Europe.",
          },
          {
            name: "Stability booklet",
            description:
              "Producing the approved stability booklet that documents how the boat floats and stays upright, required for many boats.",
          },
          {
            name: "Flag & registration",
            description:
              "Guiding flag choice and registration so the boat's paperwork matches how and where it will be used.",
          },
          {
            name: "Insurability file",
            description:
              "Preparing the technical file an insurer needs to cover the boat, especially for novel or high-performance designs.",
          },
          {
            name: "Certification & authorities",
            description:
              "Managing certification and the relationship with the relevant authorities from design through to approval.",
          },
        ],
      },
      {
        id: "donnees",
        number: "17",
        title: "Data & Instrumentation",
        intro:
          "A modern boat is an instrument. We fit sensor and monitoring packages, build the platform that captures the data, and turn it into debriefs and predictive maintenance.",
        services: [
          {
            name: "Onboard instrumentation package",
            description:
              "Specifying and fitting the sensor package that measures what the boat and crew are doing, the source of every later insight.",
          },
          {
            name: "Real-time structural monitoring",
            description:
              "Sensors on the structure that report load and stress live, warning the crew before something is overloaded.",
          },
          {
            name: "Data acquisition & platform",
            description:
              "The system that captures, time-stamps and stores all the boat's data reliably, ashore and afloat.",
          },
          {
            name: "Sailing data processing & analysis",
            description:
              "Turning raw logged data into clean, comparable performance metrics the team can actually use.",
          },
          {
            name: "Telemetry debrief",
            description:
              "Structured debriefs built on telemetry, so lessons from each sail are captured objectively, not from memory.",
          },
          {
            name: "Predictive maintenance by telemetry",
            description:
              "Using telemetry to predict when a component will need attention, replacing surprises with planned maintenance.",
          },
          {
            name: "Black box & event recording",
            description:
              "A black box that records the boat's state around critical events, invaluable for safety analysis and disputes.",
          },
        ],
      },
      {
        id: "mise-en-service",
        number: "18",
        title: "Commissioning & Ownership",
        intro:
          "Delivery is the start, not the end. We commission and tune the boat, then support the owner through training, a season programme, captains, maintenance and the resale market.",
        services: [
          {
            name: "Trials & acceptance protocol",
            description:
              "The structured sea-trials and acceptance protocol that proves the boat meets its specification before you take delivery.",
          },
          {
            name: "Systems commissioning",
            description:
              "Bringing every system to life correctly and safely, from first power-up to full operation.",
          },
          {
            name: "Setup & tuning",
            description:
              "The initial rig, foil and systems tuning that turns a technically complete boat into a fast, sailable one.",
          },
          {
            name: "Operating manual & documentation",
            description:
              "A clear operating manual and documentation set so the crew can run the boat safely and correctly.",
          },
          {
            name: "Engineering hotline",
            description:
              "Direct access to the engineers who designed the boat, so questions and problems get authoritative answers fast.",
          },
          {
            name: "Spares kits & parts logistics",
            description:
              "Defining the spares kit and the logistics behind it, so the right part is where you need it, when you need it.",
          },
          {
            name: "Referenced yard network",
            description:
              "Access to a network of vetted yards that can service and repair the boat wherever it sails.",
          },
          {
            name: "Flight School",
            description:
              "A structured programme that teaches an owner and crew to safely fly a foiling boat, on the simulator and the water.",
          },
          {
            name: "Season programme",
            description:
              "Planning and supporting the owner's season, from event choice to logistics and technical readiness.",
          },
          {
            name: "Delivery & transport",
            description:
              "Organising delivery and transport of the boat between yards, events and seasons, by sea or by road.",
          },
          {
            name: "Stepping / unstepping, winter storage management",
            description:
              "Managing rig stepping, unstepping and winter storage so the boat is protected and ready each spring.",
          },
          {
            name: "Warranty follow-up",
            description:
              "Tracking and pursuing warranty issues with the yard and suppliers on the owner's behalf.",
          },
          {
            name: "Owner gatherings",
            description:
              "Organising gatherings for owners of the same boats, mixing racing, learning and community.",
          },
          {
            name: "Secondary market — certification, re-certification, listing",
            description:
              "Supporting the resale of the boat with certification, re-certification and honest technical listing.",
          },
        ],
      },
    ],
  },
  {
    numeral: "IV",
    title: "The Studio",
    sections: [
      {
        id: "conseil",
        number: "19",
        title: "Advisory & Expertise",
        intro:
          "Sometimes you need judgement, not a boat. We act as owner's engineer, give second opinions, run due diligence and provide independent expertise in disputes and investments.",
        services: [
          {
            name: "Design review — second opinion",
            description:
              "An independent review of an existing design, giving you an expert second opinion before you commit money to it.",
          },
          {
            name: "Purchase due diligence",
            description:
              "A technical inspection and analysis before you buy a boat, so you know what you are really getting.",
          },
          {
            name: "Owner's engineer",
            description:
              "We represent the owner's technical interests throughout a build, the expert on your side of the table.",
          },
          {
            name: "Build contract negotiation support",
            description:
              "Technical support during build-contract negotiation, so the specification and risk are fair and clear.",
          },
          {
            name: "Expertise & arbitration",
            description:
              "Independent technical expertise for arbitration, translating engineering fact into terms a tribunal can use.",
          },
          {
            name: "Litigation & damage expertise",
            description:
              "Expert analysis of damage and failures for litigation, establishing what happened and why.",
          },
          {
            name: "Residual value study",
            description:
              "Assessing what a boat is really worth now and later, for owners, buyers and financiers.",
          },
          {
            name: "Product strategy advisory for yards",
            description:
              "Advising yards on which boats to build next and how to position them, grounded in engineering reality.",
          },
          {
            name: "Technical due diligence for investors",
            description:
              "Independent technical due diligence for investors backing a marine project or company.",
          },
        ],
      },
      {
        id: "rd-ip",
        number: "20",
        title: "R&D & Intellectual Property",
        intro:
          "We run research on contract and turn it into protected, transferable technology. That includes patents, licensing and moving race-proven technology into other markets.",
        services: [
          {
            name: "Contract R&D programme",
            description:
              "A dedicated research programme run for a client on a specific technical question, with defined deliverables.",
          },
          {
            name: "Technology watch & foresight",
            description:
              "Systematic monitoring of emerging technology and foresight on where the field is heading, so you are not surprised.",
          },
          {
            name: "Patents — technical drafting & prior art",
            description:
              "Technical drafting for patents and prior-art searches, protecting genuine innovations properly.",
          },
          {
            name: "Technology licensing",
            description:
              "Licensing AWA-developed technology into your products under clear terms.",
          },
          {
            name: "Race → cruising technology transfer",
            description:
              "Moving technology proven in racing into cruising boats, where it is de-risked and made durable.",
          },
          {
            name: "Beyond-marine technology transfer",
            description:
              "Transferring marine-developed technology into other industries that can use lightweight, high-performance engineering.",
          },
        ],
      },
      {
        id: "marque",
        number: "21",
        title: "Brand & Content",
        intro:
          "A boat is also a story. We build the brand language of a product or range and produce the technical content, documentation and press work that carry it credibly.",
        services: [
          {
            name: "Product brand language",
            description:
              "Defining the visual and verbal language of a product so it reads as one coherent, credible brand.",
          },
          {
            name: "Range identity & art direction",
            description:
              "Art direction and identity across a whole range, so each boat belongs to the same family.",
          },
          {
            name: "Technical & editorial project content",
            description:
              "Producing accurate technical and editorial content about a project, credible to experts and readable by everyone.",
          },
          {
            name: "Build documentation (photo, film)",
            description:
              "Documenting the build in photo and film, an asset for marketing, history and owner engagement.",
          },
          {
            name: "Technical press relations",
            description:
              "Managing relations with the technical press so the story told is accurate and well told.",
          },
          {
            name: "Talks & appearances",
            description:
              "Delivering talks and expert appearances that build a project's or brand's authority.",
          },
          {
            name: "Training & teaching",
            description:
              "Teaching and training programmes on yacht design and high-performance engineering, for teams and institutions.",
          },
        ],
      },
      {
        id: "digital",
        number: "22",
        title: "Digital",
        intro:
          "Digital tools sell and support boats. We build configurators, project sites, virtual showrooms and owner apps that connect a client to the boat before and after delivery.",
        services: [
          {
            name: "Product configurator",
            description:
              "An interactive configurator that lets a client build and price their boat or product, accurately and on-brand.",
          },
          {
            name: "Project site & presentation",
            description:
              "A dedicated site and presentation for a project, built to communicate it precisely to owners, partners and press.",
          },
          {
            name: "Virtual showroom / selling through the simulator",
            description:
              "A virtual showroom, including selling through the simulator, so a client can experience the boat before it exists.",
          },
          {
            name: "Owner app (data, progress, maintenance)",
            description:
              "An owner application that follows the boat's data, build progress and maintenance in one place.",
          },
        ],
      },
      {
        id: "naval-tech",
        number: "23",
        title: "Naval-tech & Beyond Sail",
        intro:
          "Our methods are not limited to sailing. We support marine startups, design foiling ferries and electric craft, and back third-party projects, including the technical side of fundraising.",
        services: [
          {
            name: "Feasibility study for marine startups",
            description:
              "A rigorous feasibility study for a marine startup's concept, testing whether the idea holds up technically and commercially.",
          },
          {
            name: "Foiling vessels — ferries, shuttles, workboats",
            description:
              "Design of foiling commercial vessels — ferries, shuttles, workboats — bringing race foil knowledge to transport.",
          },
          {
            name: "Electric & hybrid craft",
            description:
              "Design of electric and hybrid craft where efficiency, weight and energy define the whole vessel.",
          },
          {
            name: "Design & architecture for third-party projects",
            description:
              "Providing design and naval architecture for third-party projects that need our specific expertise.",
          },
          {
            name: "Fundraising support — technical component",
            description:
              "The technical component of a fundraise: the credible engineering story and evidence investors need to commit.",
          },
        ],
      },
    ],
  },
]

export const totalServices = parts.reduce(
  (sum, part) =>
    sum +
    part.sections.reduce((s, section) => s + section.services.length, 0),
  0,
)

export const allSections = parts.flatMap((part) => part.sections)
