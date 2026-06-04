import { ProjectPage } from "@/components/project-page"

export default function SkimmingTrimaran72Page() {
  return (
    <ProjectPage
      category="Apex Performance"
      title="72 Skimming Trimaran"
      subtitle="Pure performance, refined"
      description={[
        "The 72 Skimming Trimaran embodies AWA's philosophy of apparent wind optimization in a refined, high-performance package.",
        "Designed for sailors who demand the ultimate in speed and handling, this trimaran leverages advanced skimming technology to achieve exceptional velocities.",
        "Every element of the design has been engineered to work in harmony with the apparent wind, delivering an unparalleled sailing experience.",
      ]}
      specs={[
        { label: "Length", value: "72 ft" },
        { label: "Type", value: "Skimming Trimaran" },
        { label: "Design", value: "AWA" },
      ]}
    />
  )
}
