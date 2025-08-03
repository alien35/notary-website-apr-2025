import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ask AI",
  description:
    "Get instant answers to state-specific notary law questions"
}

export default function WhyNotaryCentralFaqPage() {
  const markdownPath = path.join(
    process.cwd(),
    "data/blog",
    "ask-ai.md"
  )
  const markdown = fs.readFileSync(markdownPath, "utf8")

  return (
    <div className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
