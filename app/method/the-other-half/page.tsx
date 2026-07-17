import { ProsePage, P } from "@/components/prose-page"

export default function TheOtherHalfPage() {
  return (
    <ProsePage
      eyebrow="The Method"
      title="The other half"
      backHref="/method"
      backLabel="The Method"
    >
      <P>
        A racing boat is measured to the tenth of a knot; the crew that sails it is, almost everywhere, not measured at all. The gap between predicted and achieved performance has a human share, and that share has numbers: maneuver times by station, movement paths, load and fatigue where the crew agrees to log them. This page describes what we measure, how the analysis separates the deck layout from the practice, and who owns the data.
      </P>
    </ProsePage>
  )
}
