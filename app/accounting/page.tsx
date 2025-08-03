import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accounting",
  description:
    "Easily generate and export year-end tax reports. Stay compliant and get the best tax breaks for notaries."
}

export default function WhyNotaryCentralFaqPage() {
  const markdownPath = path.join(
    process.cwd(),
    "data/blog",
    "accounting.md"
  )
  const markdown = fs.readFileSync(markdownPath, "utf8")

  return (
    <div className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
