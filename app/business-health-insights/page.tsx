import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Health Insights",
  description:
    "Running a notary business means juggling appointments, mileage, and stacks of receipts. NotaryCentral's Business Health dashboard turns that chaos into clear insights so you always know where you stand."
}

export default function WhyNotaryCentralFaqPage() {
  const markdownPath = path.join(
    process.cwd(),
    "data/blog",
    "business-health-insights.md"
  )
  const markdown = fs.readFileSync(markdownPath, "utf8")

  return (
    <div className="prose lg:prose-lg dark:prose-invert mx-auto px-4 py-24 md:py-32 max-w-4xl">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
