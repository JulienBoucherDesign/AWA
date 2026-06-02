import { ProjectPage } from "@/components/project-page"

export default function Gitana18Page() {
  return (
    <ProjectPage
      category="Racing"
      title="Gitana18"
      subtitle="Ultim class trimaran"
      description={[
        "The Gitana 18 is an Ultim class ocean racing trimaran, designed for the most demanding offshore races in the world.",
        "AWA contributed to this prestigious project as part of the Guillaume Verdier design team, bringing expertise in hull optimization and foil design.",
        "This vessel represents the ultimate expression of multihull racing technology, capable of sailing at speeds exceeding 40 knots.",
      ]}
      specs={[
        { label: "Class", value: "Ultim 32/23" },
        { label: "Length", value: "32m" },
        { label: "Beam", value: "23m" },
        { label: "Design Team", value: "Guillaume Verdier / AWA" },
      ]}
    />
  )
}
