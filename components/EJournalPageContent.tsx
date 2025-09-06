import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import EJournalStateInfo from "@/components/EJournalStateInfo"

interface Props {
  title: string
  description: string
  stateAbbreviation?: string
}

export default function EJournalPageContent({ title, description, stateAbbreviation }: Props) {
  const markdownPath = path.join(process.cwd(), "data/blog", "e-journal.md")
  const markdownFile = fs.readFileSync(markdownPath, "utf8")
  const pdfSuffix = stateAbbreviation ? `${stateAbbreviation.toLowerCase()}` : ""
  const markdown = markdownFile.replace(
    /\/blog-pdf\/ejournal\.pdf/g,
    `/blog-pdf/ejournal/${pdfSuffix}.pdf`,
  )
  const [intro, rest] = markdown.split("<!--STATE_PICKER-->")
  const introWithoutHeading = intro.replace(/^# .+\n/, "")
  const lastUpdatedMatch = markdown.match(/Last updated\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/)
  const isoDate = lastUpdatedMatch ? new Date(lastUpdatedMatch[1]).toISOString() : undefined
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <h1>{title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{introWithoutHeading}</ReactMarkdown>
        <div className="mt-12 space-y-12">
          <EJournalStateInfo stateAbbreviation={stateAbbreviation} />
        </div>
        <div className="relative w-full max-w-2xl mx-auto my-8 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/yUQsJw9C_g4"
            title="Electronic journal overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{rest}</ReactMarkdown>
      </div>

    </div>
  )
}
