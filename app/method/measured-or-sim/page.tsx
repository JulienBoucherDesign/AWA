import { ProsePage, P } from "@/components/prose-page"

export default function MeasuredOrSimPage() {
  return (
    <ProsePage
      eyebrow="The Method"
      title="Measured or sim"
      backHref="/method"
      backLabel="The Method"
    >
      <P>
        Every number we publish carries its conditions, its date, and one of three words.{" "}
        <strong className="font-medium">Measured</strong>: it happened, and the file exists.{" "}
        <strong className="font-medium">Sim</strong>: the model says so, and the model is named.{" "}
        <strong className="font-medium">Target</strong>: we intend it, and we will report the outcome either way. A number without its word is not ours.
      </P>
    </ProsePage>
  )
}
