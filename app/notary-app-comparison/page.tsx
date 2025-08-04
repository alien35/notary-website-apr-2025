import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
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

  return (
    <div className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
