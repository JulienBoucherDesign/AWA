import { ProsePage, P } from "@/components/prose-page"

export default function TheManualPage() {
  return (
    <ProsePage
      eyebrow="The Method"
      title="The Manual"
      backHref="/method"
      backLabel="The Method"
    >
      <P>
        The document set that runs the boat: systems descriptions, torque tables, part numbers, spares kits, diagnosis trees for every failure mode on record, and the written flight envelope — with the professional's contractual authority to hold it. The engineering line behind the document answers in hours, from the people who drew the part. The telemetry serves the owner as progression and the professional as proof.
      </P>
    </ProsePage>
  )
}
