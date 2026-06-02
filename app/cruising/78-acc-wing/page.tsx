import { ProjectPage } from "@/components/project-page"

export default function AccWing78Page() {
  return (
    <ProjectPage
      category="Cruising"
      title="78 ACC WING Trimaran"
      subtitle="Luxury performance cruising"
      description={[
        "The 78 ACC WING Trimaran combines the speed and efficiency of a racing trimaran with the comfort and amenities expected in luxury cruising.",
        "Featuring the innovative ACC WING sail system, this vessel offers exceptional performance with simplified handling, making it ideal for shorthanded sailing.",
        "The spacious interior provides comfortable accommodation for extended voyages, while the trimaran platform ensures stability at anchor and underway.",
      ]}
      specs={[
        { label: "Length", value: "78 ft" },
        { label: "Type", value: "ACC WING Trimaran" },
        { label: "Sail System", value: "ACC WING" },
        { label: "Design", value: "AWA" },
      ]}
    />
  )
}
