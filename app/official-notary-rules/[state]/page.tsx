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

  const stateManuals: NotaryManual[] | undefined = (manuals as any)[params.state]

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
        Official rules for {stateName}
      </h1>
      {stateManuals && stateManuals.length > 0 ? (
        <ul className="text-center space-y-2">
          {stateManuals.map((manual, idx) => (
            <li key={idx}>
              <a
                href={manual.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {manual.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Manuals not available.</p>
      )}
    </div>
  )
}
