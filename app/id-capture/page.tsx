import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Secure ID Capture for Notary Journals",
  description:
    "Use NotaryCentral's on-device ID scan to auto-fill journal entries in about six seconds without sending IDs to the cloud.",
}

export default function IdCapturePage() {
  const markdownPath = path.join(
    process.cwd(),
    "data/blog",
    "id-capture.md"
  )
  const markdown = fs.readFileSync(markdownPath, "utf8")
  const lastUpdatedMatch = markdown.match(
    /Last updated\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/
  )
  const isoDate = lastUpdatedMatch
    ? new Date(lastUpdatedMatch[1]).toISOString()
    : undefined
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    author: { "@type": "Person", name: "Alexander Leon" },
    datePublished: isoDate,
    dateModified: isoDate,
  }

  return (
    <div className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

