import type { Metadata } from "next"
import manuals, { NotaryManual } from "@/lib/notaryManuals"

export const metadata: Metadata = {
  title: "Official notary rules by state",
}

interface Props {
  params: { state: string }
}

export default function OfficialNotaryRulesByState({ params }: Props) {
  const name = params.state.replace(/-/g, " ")
  const words = name
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  const stateName = words.join(" ")

  const manual: NotaryManual | undefined = (manuals as any)[params.state]

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
        Official rules for {stateName}
      </h1>
      {manual ? (
        <p className="text-center">
          <a
            href={manual.url}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {manual.title}
          </a>
        </p>
      ) : (
        <p className="text-center">Manual not available.</p>
      )}
    </div>
  )
}
