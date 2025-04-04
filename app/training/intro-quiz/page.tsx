"use client"

import React from "react"
import QuizForm from "@/components/QuizForm"
import Footer from "@/components/footer"
import Header from "@/components/header"

/**
 * TrainingMaterials
 * 
 * - Removes the old inline `styles` object
 * - Uses Tailwind classes for layout and spacing
 * - Wraps content in a <main> with sensible defaults
 */
export default function TrainingMaterials() {
  return (
    <>
      <main className="container mx-auto px-4 py-24 md:py-32">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Quiz: What is a Notary Journal?
        </h1>
        <QuizForm
          nextLink="https://www.notarycentral.org/post/ejournal-creating-your-first-journal-entry"
          link="https://www.notarycentral.org/post/what-is-a-notary-journal"
          title="Quiz: What is a Notary Journal?"
        />
      </main>
    </>
  )
}
