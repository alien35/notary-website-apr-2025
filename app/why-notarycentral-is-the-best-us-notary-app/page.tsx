import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Why NotaryCentral is the Best U.S. Notary App: FAQ",
  description:
    "Frequently asked questions about NotaryCentral and how it streamlines notary work."
}

export default function WhyNotaryCentralFaqPage() {
  const markdownPath = path.join(
    process.cwd(),
    "data",
    "why-notarycentral-is-the-best-us-notary-app.md"
  )
  const markdown = fs.readFileSync(markdownPath, "utf8")

  return (
    <div className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
