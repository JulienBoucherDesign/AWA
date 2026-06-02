'use client'

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add actual form submission
    setSubmitted(true)
    setEmail("")
  }

  return (
    <footer
      className="bg-[#f5f5f5]"
      style={{
        paddingTop: "calc(var(--awa-row, 4rem) * 2)",
        paddingBottom: "calc(var(--awa-row, 4rem) * 2)",
        paddingLeft: "calc(2 / 42 * 100vw)",
        paddingRight: "calc(3 / 42 * 100vw)",
      }}
    >
      {/* "Connect With Us" label */}
      <p className="text-sm font-medium tracking-wider text-[#292929] mb-2">
        Connect With Us
      </p>

      {/* Single-row form: input + send button on one line */}
      <form onSubmit={handleSubmit} className="flex items-center" style={{ width: "calc(17 / 42 * 100vw)" }}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-8 px-0 text-sm font-light italic text-[#292929] bg-transparent border-b border-[#292929] focus:outline-none placeholder:text-[#292929]/50"
        />
        <button
          type="submit"
          className="ml-4 h-8 text-sm font-medium tracking-wider text-[#292929] hover:opacity-60 transition-opacity whitespace-nowrap"
        >
          {submitted ? "Sent" : "Send"}
        </button>
      </form>

      {/* Instagram link */}
      <div className="mt-6">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-light italic text-[#292929] hover:opacity-60 transition-opacity"
        >
          Instagram
        </Link>
      </div>
    </footer>
  )
}
