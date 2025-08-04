import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NotaryCentral vs NotaryGadget vs NotaryAssist vs CloseWise: A Fair Notary Software Comparison",
  description:
    "This article compares four notable options—NotaryCentral, NotaryGadget, NotaryAssist, and CloseWise—to help you identify the platform that best fits your needs."
}

export default function WhyNotaryCentralFaqPage() {
  const markdownPath = path.join(
    process.cwd(),
    "data/blog",
    "notary-app-comparison.md"
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  )
}
