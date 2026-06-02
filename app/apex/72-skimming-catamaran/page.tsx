import { ProjectPage } from "@/components/project-page"

export default function SkimmingCatamaran72Page() {
  return (
    <ProjectPage
      category="Apex Performance"
      title="72 Skimming Catamaran"
      subtitle="Dual-hull performance"
      description={[
        "The 72 Skimming Catamaran combines the stability of a catamaran platform with AWA's innovative skimming technology.",
        "This design offers an exceptional balance between speed, comfort, and seaworthiness, making it ideal for both performance cruising and competitive sailing.",
        "The optimized hull geometry allows for efficient sailing across a wide range of wind conditions.",
      ]}
      specs={[
        { label: "Length", value: "72 ft" },
        { label: "Type", value: "Skimming Catamaran" },
        { label: "Design", value: "AWA" },
      ]}
    />
  )
}
