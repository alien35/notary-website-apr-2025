import type { Metadata } from 'next'
import { getStateData } from '@/lib/howToBecome'
import StateCompliance from '@/components/StateCompliance'

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

// Clean script and style tags out of raw HTML
function sanitizeHtml(html: string): string {
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .trim()
}

export default function HowToBecomeState({ params }: Props) {
  const data = getStateData(params.state)
  const stateName = formatStateName(params.state)

  return (
    <>
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
        How to become a notary in {stateName}
      </h1>

      {data ? (
        <div className="space-y-12">
          {data.sections.map((section, idx) => (
            <section key={idx} className="prose max-w-none">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {section.title}
              </h2>
              {section.content_html.map((html, i) => (
                <div
                  key={i}
                  className="
                    [&_a]:underline [&_a]:text-blue-600 hover:[&_a]:text-blue-800
                    [&_ul]:list-disc [&_ul]:pl-6
                    [&_li]:my-1
                    [&_table]:table [&_table]:w-full [&_table]:border-collapse
                    [&_th]:border [&_th]:bg-gray-100 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
                    [&_td]:border [&_td]:px-3 [&_td]:py-2
                    [&_figure]:my-4 [&_figure]:overflow-x-auto
                  "
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
                />
              ))}
            </section>
          ))}
        </div>
      ) : (
        <p className="text-center">Information not available.</p>
      )}
    </div>
    <StateCompliance stateName={stateName} />
    </>
  )
}
