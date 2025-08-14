import type { Metadata } from 'next'
import Link from 'next/link'
import { getAvailableStates } from '@/lib/howToBecome'

export const metadata: Metadata = {
  title: 'How to become a notary',
  description:
    'Select your state to learn the requirements for becoming a notary, including application details, training, and resources to get commissioned quickly.',
}

function formatStateName(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

export default function HowToBecome() {
  const states = getAvailableStates().sort()
  const group1 = states.filter((s) => s[0].toUpperCase() <= 'I')
  const group2 = states.filter((s) => s[0].toUpperCase() >= 'J' && s[0].toUpperCase() <= 'N')
  const group3 = states.filter((s) => s[0].toUpperCase() >= 'O')

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
        How to become a notary by state
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Select your state to see step-by-step instructions
      </p>

      <div className="mt-12 border-t border-gray-200 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-800 text-lg">
        <div>
          <h2 className="font-semibold mb-2">A–I</h2>
          <ul className="space-y-1">
            {group1.map((state) => (
              <li key={state}>
                <Link href={`/how-to-become-a-notary/${state}`} className="hover:underline">
                  {formatStateName(state)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">J–N</h2>
          <ul className="space-y-1">
            {group2.map((state) => (
              <li key={state}>
                <Link href={`/how-to-become-a-notary/${state}`} className="hover:underline">
                  {formatStateName(state)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">O–Z</h2>
          <ul className="space-y-1">
            {group3.map((state) => (
              <li key={state}>
                <Link href={`/how-to-become-a-notary/${state}`} className="hover:underline">
                  {formatStateName(state)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-xs text-gray-500 border-t pt-6 max-w-3xl mx-auto text-center">
        The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.
      </div>
    </div>
  )
}
