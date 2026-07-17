import { ProsePage, P } from "@/components/prose-page"

export default function TheSimPage() {
  return (
    <ProsePage
      eyebrow="The Method"
      title="The Sim"
      backHref="/method"
      backLabel="The Method"
    >
      <P>
        Three uses, in the order they occur in a project. Validation: the boat sailed on its design geometry before tooling, and the deck walked at full scale. Rehearsal: maneuvers and procedures run on the drawn layout, so the corrections cost hours instead of months. Training: the crew or the owner learning the boat before launch. What the simulator does not capture, we state plainly: real loads, real cold, the fortieth hour. The sim prepares; the sea grades.
      </P>
    </ProsePage>
  )
}
