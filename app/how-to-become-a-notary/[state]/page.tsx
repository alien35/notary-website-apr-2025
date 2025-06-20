import type { Metadata } from 'next'
import { getStateData } from '@/lib/howToBecome'

export const metadata: Metadata = {
  title: 'How to become a notary',
}

interface Props {
  params: { state: string }
}

function formatStateName(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function HowToBecomeState({ params }: Props) {
  const data = getStateData(params.state)
  const stateName = formatStateName(params.state)

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
        How to become a notary in {stateName}
      </h1>
      {data ? (
        <div className="space-y-8">
          {data.sections.map((section, idx) => (
            <div key={idx} className="prose">
              <h2>{section.title}</h2>
              {section.content_html.map((html, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Information not available.</p>
      )}
    </div>
  )
}
