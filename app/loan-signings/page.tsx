import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Loan Signings",
  description:
    "Automate loan signings from email intake to journaling, mileage logs, and scheduling so every transaction stays organized and compliant from start to finish.",
}

export default function LoanSigningsPage() {
  const markdownPath = path.join(process.cwd(), "data/blog", "loan-signings.md")
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}
