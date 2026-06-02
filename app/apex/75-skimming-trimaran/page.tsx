import { ProjectPage } from "@/components/project-page"

export default function SkimmingTrimaran75Page() {
  return (
    <ProjectPage
      category="Apex Performance"
      title="75 Skimming Trimaran"
      subtitle="Advanced skimming technology"
      description={[
        "The 75 Skimming Trimaran represents AWA's vision for the future of high-performance cruising and racing.",
        "Utilizing advanced skimming technology, this trimaran achieves exceptional speeds while maintaining stability and comfort for long-distance voyages.",
        "The innovative hull design minimizes drag and maximizes efficiency, allowing sailors to harness apparent wind angles for remarkable performance.",
      ]}
      specs={[
        { label: "Length", value: "75 ft" },
        { label: "Type", value: "Skimming Trimaran" },
        { label: "Design", value: "AWA" },
      ]}
    />
  )
}
