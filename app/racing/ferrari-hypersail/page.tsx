import { ProjectPage } from "@/components/project-page"

export default function FerrariHypersailPage() {
  return (
    <ProjectPage
      category="Racing"
      title="Ferrari Hypersail"
      subtitle="High-performance racing yacht"
      description={[
        "A revolutionary racing yacht developed in collaboration with Ferrari, pushing the boundaries of speed and aerodynamics on the water.",
        "The Ferrari Hypersail represents the pinnacle of racing yacht design, incorporating cutting-edge materials and innovative hull geometry to achieve unprecedented performance.",
        "Designed as part of the Guillaume Verdier team, this project showcases AWA's expertise in high-performance sailing vessels.",
      ]}
      specs={[
        { label: "Type", value: "Racing Yacht" },
        { label: "Design Team", value: "Guillaume Verdier / AWA" },
        { label: "Status", value: "In Development" },
      ]}
    />
  )
}
