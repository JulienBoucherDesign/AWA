import Link from "next/link"
import { ProsePage } from "@/components/prose-page"
import { ServiceSection, PartHeader } from "@/components/service-section"

type Section = {
  id: string
  number: string
  title: string
  services: string[]
}

type Part = {
  numeral: string
  title: string
  sections: Section[]
}

const parts: Part[] = [
  {
    numeral: "I",
    title: "The Boat",
    sections: [
      {
        id: "commissions",
        number: "01",
        title: "Commissions",
        services: [
          "Custom complet — coureur océanique",
          "Custom complet — build privé au standard course",
          "Custom complet — croiseur rapide",
          "Semi-custom sur modèle maison (Ipsum 45, Tre Cento)",
          "Programme OSA",
          "Étude de faisabilité",
          "Définition de programme",
          "Étude de concept",
          "Avant-projet",
          "Conception de classe / monotype",
          "Programme de record",
          "Étude de série / industrialisation d'un modèle",
        ],
      },
      {
        id: "design",
        number: "02",
        title: "Design",
        services: [
          "Design extérieur",
          "Design de pont",
          "Design intérieur",
          "Optimisation des volumes",
          "Design de mobilier et d'aménagement",
          "Matières, finitions, lumière",
          "Livrée, graphisme, nom",
          "Observation d'usage",
          "Visualisation de décision",
          "Rendus et imagerie de projet",
        ],
      },
      {
        id: "design-industriel",
        number: "03",
        title: "Design industriel & produit",
        services: [
          "Design produit marine (accastillage, équipement)",
          "Design d'équipement de glisse — kite, wing, foil, boards",
          "Design de eFoil et engins à foils motorisés",
          "Design d'équipement de sport",
          "Design produit hors nautisme",
          "Design for manufacture",
          "Recherche utilisateur et user-centred design",
          "Roadmap produit et architecture de gamme",
          "Étude de marché et positionnement produit",
          "Direction de studio design externalisée",
          "Sourcing et industrialisation produit",
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
        services: [
          "Étude VPP",
          "Étude d'options comparées",
          "Prédiction de performance en course (routage, polaires météo)",
          "Campagne de corrélation",
          "Analyse de performance de saison",
          "Optimisation de jauge",
          "Certificats de jauge et rating (IRC, ORC, classes)",
          "Interprétation de règles de classe",
        ],
      },
      {
        id: "hydrodynamique",
        number: "05",
        title: "Hydrodynamique",
        services: [
          "Développement de formes de carène",
          "Simulation CFD hydro",
          "Étude de tenue à la mer",
          "Étude de slamming",
          "Hydrostatique et courbes de stabilité",
          "Étude de résistance ajoutée dans la vague",
          "Essais en bassin de carène",
          "Essais sur modèle réduit",
          "Étude de sillage et de spray",
        ],
      },
      {
        id: "aerodynamique",
        number: "06",
        title: "Aérodynamique",
        services: [
          "Simulation CFD aéro",
          "Étude de plan de voilure",
          "Développement de wingsail",
          "Étude de windage et de traînée parasite",
          "Essais en soufflerie",
          "Interaction aéro-hydro couplée",
        ],
      },
      {
        id: "appendices-vol",
        number: "07",
        title: "Appendices & vol",
        services: [
          "Package appendices — dérives, safrans, foils",
          "Dessin de profils et de plans de forme",
          "Étude de cavitation et de ventilation",
          "Cinématique d'appendices (relevage, rake, cant)",
          "Quille pendulaire / systèmes de redressement",
          "Étude hydroélastique (couplage fluide-structure)",
          "Étude de flottement et de vibration",
          "Étude de faisabilité de conversion au vol",
          "Package de conversion au vol",
          "Système de contrôle de vol",
          "Lois de commande et filtrage",
          "Analyse de modes de défaillance (FMEA)",
          "Essais hardware-in-the-loop",
          "Enveloppe de vol",
          "IHM de vol",
          "Stratégie d'impact et protection d'appendices",
        ],
      },
      {
        id: "structure",
        number: "08",
        title: "Structure & composites",
        services: [
          "Définition des cas de charge",
          "Calcul éléments finis global",
          "Calculs locaux (ferrures, puits de foils, points durs)",
          "Plans de drapage",
          "Spécification matériaux et procédés",
          "Étude de fatigue",
          "Étude de crash box et structures de sécurité",
          "Dossiers de calcul pour sociétés de classification",
          "Audit de structure tierce",
          "Analyse de sinistre et expertise de casse",
        ],
      },
      {
        id: "greement",
        number: "09",
        title: "Gréement",
        services: [
          "Plan de voilure et géométrie de gréement",
          "Étude de mât et d'espars",
          "Gréement dormant et courant",
          "Étude de charges dynamiques de gréement",
          "Spécification et développement de garde-robe de voiles",
          "Développement voiles / gréement en boucle",
          "Interface voilier / mâteur",
        ],
      },
      {
        id: "poids",
        number: "10",
        title: "Poids & équilibre",
        services: [
          "Devis de poids",
          "Centrage et inerties",
          "Contrôle de poids en construction",
          "Pesée et essai de stabilité",
          "Audit de projet en dérive de poids",
        ],
      },
      {
        id: "systemes",
        number: "11",
        title: "Systèmes & énergie",
        services: [
          "Architecture des systèmes",
          "Hydraulique",
          "Électrique et distribution",
          "Bilan énergétique et autonomie",
          "Propulsion électrique / hybride",
          "Hydrogénération, solaire",
          "Systèmes de manœuvre et winches",
          "Accastillage et plan de pont — spécification",
          "Direction et transmissions",
          "Électronique de navigation et instrumentation",
          "Intégration pilote automatique",
          "Systèmes de sécurité et de survie",
          "Confort — bruit, vibration, thermique",
          "Annexe, garage, systèmes escamotables",
        ],
      },
      {
        id: "performance-humaine",
        number: "12",
        title: "Performance humaine & simulateur",
        services: [
          "Audit ergonomique du bateau",
          "Audit de performance humaine",
          "Baseline d'équipage",
          "Optimisation cockpit et chorégraphie d'équipage",
          "Instrumentation de l'équipage",
          "Étude de charge et de fatigue",
          "Conception informée par la fatigue",
          "Étude de visibilité et de poste de barre",
          "Maquette virtuelle avant découpe",
          "Entraînement avant mise à l'eau",
          "Entraînement continu en simulateur",
          "Développement d'environnement simulateur",
          "Jumeau numérique du bateau",
          "Simulation à la demande (simulation as a service)",
          "Licence du corpus ergonomie",
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
        title: "Course",
        services: [
          "Bureau d'études externalisé",
          "Préparation de campagne",
          "Refit de pont et de cockpit",
          "Optimisation entre deux saisons",
          "Assistance technique en course",
          "Formation d'équipage",
          "Direction technique de programme",
        ],
      },
      {
        id: "production",
        number: "14",
        title: "Production",
        services: [
          "Package de plans de production",
          "Plans de moules et d'outillage",
          "Sélection de chantier et appel d'offres",
          "Rédaction de cahier des charges de construction",
          "Liaison chantier",
          "Liaison fournisseurs",
          "Liaison sociétés de classification et jauges",
          "Suivi de jalons et non-conformités",
          "Métrologie et recette des pièces",
          "Scan 3D et comparaison au fichier",
          "Plan d'inspection",
          "Chiffrage et suivi de budget de construction",
          "Planning de construction",
        ],
      },
      {
        id: "chantier",
        number: "15",
        title: "Chantier & industrialisation",
        services: [
          "Mise en place de chantier",
          "Transfert de production",
          "Industrialisation de série",
          "Sourcing composite et supply chain",
          "Contrôle qualité usine",
          "Formation d'atelier",
          "Audit de capacité de chantier",
          "Direction de construction",
        ],
      },
      {
        id: "reglementaire",
        number: "16",
        title: "Réglementaire & sécurité",
        services: [
          "Marquage CE et catégories de conception",
          "Livret de stabilité",
          "Pavillon et immatriculation",
          "Codification commerciale (charter, MCA)",
          "Dossier de sécurité et plan de sécurité",
          "Dossier d'assurabilité",
          "Certification et autorités",
        ],
      },
      {
        id: "donnees",
        number: "17",
        title: "Données & instrumentation",
        services: [
          "Package d'instrumentation embarquée",
          "Monitoring structurel temps réel",
          "Acquisition et plateforme de données",
          "Traitement et analyse de données de navigation",
          "Débrief télémétrique",
          "Maintenance prédictive par télémétrie",
          "Boîte noire et enregistrement d'événements",
        ],
      },
      {
        id: "mise-en-service",
        number: "18",
        title: "Mise en service & propriété",
        services: [
          "Protocole d'essais et recette",
          "Mise en service des systèmes",
          "Réglages et tuning",
          "Manual et documentation d'exploitation",
          "Ligne directe ingénierie",
          "Kits de spares et logistique de pièces",
          "Réseau de chantiers référencés",
          "Flight School",
          "Programme de saison",
          "Corps des capitaines — formation, certification, affectation",
          "Convoyage et transport",
          "Mâtage / démâtage, gestion d'hivernage",
          "Suivi de garantie",
          "Rassemblements owners",
          "Marché secondaire — certification, re-certification, liste",
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
        title: "Conseil & expertise",
        services: [
          "Revue de conception — seconde opinion",
          "Due diligence d'achat",
          "Owner's engineer",
          "Assistance à la négociation de contrat de construction",
          "Expertise et arbitrage",
          "Expertise en litige et sinistre",
          "Étude de valeur résiduelle",
          "Conseil stratégique produit pour chantiers",
          "Due diligence technique pour investisseurs",
        ],
      },
      {
        id: "rd-ip",
        number: "20",
        title: "R&D & propriété intellectuelle",
        services: [
          "Programme de R&D sous contrat",
          "Veille et prospective technologique",
          "Brevets — rédaction technique et antériorité",
          "Licence de technologie",
          "Transfert de technologie course → plaisance",
          "Transfert de technologie hors nautisme",
        ],
      },
      {
        id: "marque",
        number: "21",
        title: "Marque & contenu",
        services: [
          "Langage de marque produit",
          "Identité et direction artistique de gamme",
          "Contenu technique et éditorial de projet",
          "Documentation de build (photo, film)",
          "Relations presse technique",
          "Conférences et interventions",
          "Formation et enseignement",
        ],
      },
      {
        id: "digital",
        number: "22",
        title: "Digital",
        services: [
          "Configurateur produit",
          "Site et présentation de projet",
          "Showroom virtuel / vente par le simulateur",
          "Application owner (données, progression, maintenance)",
        ],
      },
      {
        id: "naval-tech",
        number: "23",
        title: "Naval-tech & hors voile",
        services: [
          "Étude de faisabilité pour startups navales",
          "Navires à foils — ferries, navettes, workboats",
          "Engins électriques et hybrides",
          "Design et architecture pour projets tiers",
          "Accompagnement de levée de fonds — volet technique",
        ],
      },
    ],
  },
]

const doors = [
  {
    prompt: "You want a boat.",
    title: "Commission",
    href: "#commissions",
  },
  {
    prompt: "You run a race programme or a team.",
    title: "Performance · Race",
    href: "#performance",
  },
  {
    prompt: "You build something else.",
    title: "Studio · Beyond sail",
    href: "#naval-tech",
  },
]

const indexItems = parts.flatMap((part) => part.sections)

export default function ServicesPage() {
  return (
    <ProsePage
      wide
      eyebrow="Services"
      title="We design boats that fly. Then we teach you to fly them."
      intro="One studio. Two hundred lines of work, from the first feasibility study to the captain who runs the boat after delivery. This page is everything we do. It is long, because the work is."
    >
      <div className="flex flex-col">
        {/* The three doors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#292929]/10 border border-[#292929]/10">
          {doors.map((door) => (
            <a
              key={door.href}
              href={door.href}
              className="group flex flex-col gap-4 bg-[#f5f5f5] p-6 lg:p-8 hover:bg-[#ececec] transition-colors"
            >
              <p className="text-sm font-light italic text-[#292929]/70 leading-relaxed text-balance">
                {door.prompt}
              </p>
              <h2 className="text-[#292929] font-medium tracking-[0.12em] text-sm">
                {door.title}
              </h2>
              <span className="mt-auto pt-4 text-[10px] tracking-[0.3em] text-[#292929]/50 uppercase group-hover:text-[#292929] transition-colors">
                Go {"\u2192"}
              </span>
            </a>
          ))}
        </div>

        {/* Section index */}
        <nav
          id="index"
          aria-label="Services index"
          className="pt-16 lg:pt-20 scroll-mt-28"
        >
          <hr className="mb-8 border-[#292929]/10" />
          <ul className="columns-1 lg:columns-2 gap-8">
            {indexItems.map((section) => (
              <li key={section.id} className="mb-3 break-inside-avoid">
                <a
                  href={`#${section.id}`}
                  className="section-title inline-block text-[11px] tracking-[0.2em] uppercase text-[#292929]/50 hover:text-[#292929] transition-colors"
                >
                  <span className="text-[#292929]/50">{section.number}</span>
                  {"  \u2014  "}
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Parts & sections */}
        {parts.map((part) => (
          <div key={part.numeral}>
            <PartHeader numeral={part.numeral} title={part.title} />
            {part.sections.map((section) => (
              <ServiceSection
                key={section.id}
                id={section.id}
                number={section.number}
                title={section.title}
                services={section.services}
              />
            ))}
          </div>
        ))}

        {/* Close */}
        <div className="pt-24 lg:pt-32 flex flex-col gap-6">
          <p className="body-text text-sm leading-relaxed text-justify">
            Two hundred lines of services. You will need perhaps five, in the
            right order — and the order matters more than the list. Naming what
            you need is our job, not yours.
          </p>
          <h2 className="text-xl lg:text-2xl font-medium tracking-[0.12em] text-[#292929] text-balance">
            Which boat is in your head?
          </h2>
          <p className="text-sm tracking-wider">
            <Link
              href="/about"
              className="text-[#292929]/70 hover:text-[#292929] transition-colors underline underline-offset-4 decoration-[#292929]/20 hover:decoration-[#292929] italic font-light"
            >
              Thirty minutes with Loïc. That is the next step, if you want one.{" "}
              {"\u2192"}
            </Link>
          </p>
          <a
            href="#index"
            className="pt-4 text-[10px] tracking-[0.3em] text-[#292929]/50 hover:text-[#292929] transition-colors uppercase"
          >
            {"\u2191"} Index
          </a>
        </div>
      </div>
    </ProsePage>
  )
}
