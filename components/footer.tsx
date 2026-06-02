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
    <footer className="bg-[#f5f5f5] py-16 lg:py-24">
      <div
        className="flex flex-col items-center gap-8"
        style={{
          paddingLeft: "calc(2 / 42 * 100vw)",
          paddingRight: "calc(3 / 42 * 100vw)",
        }}
      >
        <p className="text-sm font-medium tracking-wider text-[#292929]">
          Connect With Us
        </p>

        <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 text-sm font-light italic text-[#292929] bg-transparent border border-[#292929] focus:outline-none focus:ring-1 focus:ring-[#292929]"
          />
          <button
            type="submit"
            className="px-6 py-3 text-sm font-medium tracking-wider text-[#292929] border border-[#292929] hover:bg-[#292929] hover:text-[#f5f5f5] transition-colors"
          >
            {submitted ? "Sent" : "Send"}
          </button>
        </form>

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
