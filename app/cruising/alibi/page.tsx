import { ProjectPage } from "@/components/project-page"

export default function AlibiPage() {
  return (
    <ProjectPage
      category="Cruising"
      title="Alibi Catamarans"
      subtitle="Luxury cruising catamarans"
      description={[
        "Alibi Catamarans represents a legacy of excellence in luxury catamaran design, founded by Loïc Goepfert in 2005.",
        "The Alibi range redefined expectations in the luxury catamaran segment by combining speed, stability, and comfort in a way that had never been achieved before.",
        "Both the Alibi 54' and 65' models remain among the most sought-after catamarans by experienced sailors today, testament to their timeless design and exceptional performance.",
        "These vessels offer unique sailing experiences, with spacious living areas, excellent seakeeping, and the performance to satisfy even the most demanding sailors.",
      ]}
      specs={[
        { label: "Models", value: "54' / 65'" },
        { label: "Type", value: "Luxury Catamaran" },
        { label: "Years", value: "2005 - 2020" },
        { label: "Designer", value: "Loïc Goepfert" },
      ]}
    />
  )
}
