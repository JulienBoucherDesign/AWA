import { ProjectPage } from "@/components/project-page"

export default function ControlledFoiler50Page() {
  return (
    <ProjectPage
      category="Apex Performance"
      title="50 ft Controlled Foiler"
      subtitle="Foiling technology"
      description={[
        "The 50 ft Controlled Foiler represents the cutting edge of foiling technology, designed for sailors seeking the ultimate in speed and excitement.",
        "Advanced control systems ensure stable and predictable foiling behavior, making this technology accessible to experienced sailors.",
        "This vessel demonstrates AWA's commitment to pushing the boundaries of what's possible in yacht design.",
      ]}
      specs={[
        { label: "Length", value: "50 ft" },
        { label: "Type", value: "Controlled Foiler" },
        { label: "Design", value: "AWA" },
      ]}
    />
  )
}
