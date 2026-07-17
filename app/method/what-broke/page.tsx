import { ProsePage, P } from "@/components/prose-page"

export default function WhatBrokePage() {
  return (
    <ProsePage
      eyebrow="The Method"
      title="What broke"
      backHref="/method"
      backLabel="The Method"
    >
      <P>
        Failures are documented here in the same format as results: what happened, what broke, why, what changed, and the number that will verify the fix. Each report feeds the next revision of the Manual. The record starts with our own.
      </P>
    </ProsePage>
  )
}
