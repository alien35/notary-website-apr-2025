// app/(marketing)/e-journal/page.tsx (example path)
import type { Metadata } from "next"
import fs from "node:fs"
import path from "node:path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import EJournalStateInfo from "@/components/EJournalStateInfo"
import WorksOnDevices from "@/components/WorksOnDevices"

const title = "Electronic Journal (e-Journal)"
const description =
  "Learn how NotaryCentral's electronic journal keeps your records organized, secure, and compliant across states and provinces."

export const metadata: Metadata = {
  title,
  description,
}

export default function EJournalPage() {
  // Load & slice the markdown into sections using markers
  let intro = ""
  let beforeDevices = ""
  let afterDevices = ""
  let isoDate: string | undefined

  try {
    const markdownPath = path.join(process.cwd(), "data/blog", "e-journal.md")
    const markdown = fs.readFileSync(markdownPath, "utf8")

    const [introPart, rest = ""] = markdown.split("<!--STATE_PICKER-->")
    intro = introPart || ""

    const [beforeDevicesPart, afterDevicesPart = ""] = rest.split(
      "<!--WORKS_ON_DEVICES-->"
    )
    beforeDevices = beforeDevicesPart || ""
    afterDevices = afterDevicesPart || ""

    const lastUpdatedMatch = markdown.match(
      /Last updated\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/
    )
    isoDate = lastUpdatedMatch
      ? new Date(lastUpdatedMatch[1]).toISOString()
      : undefined
  } catch {
    // If the markdown file is missing in some environments, keep rendering the page gracefully.
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Alexander Leon" },
    datePublished: isoDate,
    dateModified: isoDate,
  }

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="prose lg:prose-lg dark:prose-invert mx-auto max-w-4xl">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {intro && <ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown>}

        <div className="mt-12 space-y-12">
          <EJournalStateInfo />
        </div>

        <div className="relative w-full max-w-2xl mx-auto my-8 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/yUQsJw9C_g4"
            title="Electronic journal overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full rounded-lg shadow-lg"
          />
        </div>

        {beforeDevices && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{beforeDevices}</ReactMarkdown>
        )}

        <WorksOnDevices />

        {afterDevices && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{afterDevices}</ReactMarkdown>
        )}
      </div>
    </div>
  )
}
