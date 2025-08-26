import type { Metadata } from "next"
import manuals, { NotaryManual } from "@/lib/notaryManuals"

interface Props {
  params: { state: string }
}

function formatStateName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const stateName = formatStateName(params.state)
  return {
    title: `Official notary rules for ${stateName}`,
    description: `Browse official ${stateName} notary handbooks and rules in downloadable formats so you can follow the exact laws and procedures for your commission with confidence.`,
  }
}

export default function OfficialNotaryRulesByState({ params }: Props) {
  const stateName = formatStateName(params.state)

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
