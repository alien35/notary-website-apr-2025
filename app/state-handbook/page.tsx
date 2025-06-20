import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Official notary rules",
}

export default function StateHandbook() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
        Official notary rules by state
      </h1>
      <p className="text-center text-gray-700 mt-2">
        Click on a state to learn more about its notary journal laws
      </p>

      <div className="mt-12 border-t border-gray-200 pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-800 text-lg">
        <div>
          <h2 className="font-semibold mb-2">A–I</h2>
          <ul className="space-y-1">
            {["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa"].map(state => (
              <li key={state} className="hover:underline cursor-pointer">{state}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">K–N</h2>
          <ul className="space-y-1">
            {["Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota"].map(state => (
              <li key={state} className="hover:underline cursor-pointer">{state}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-2">O–W</h2>
          <ul className="space-y-1">
            {["Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"].map(state => (
              <li key={state} className="hover:underline cursor-pointer">{state}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-xs text-gray-500 border-t pt-6 max-w-3xl mx-auto text-center">
        The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information. This website contains links to other third-party websites. Such links are only for the convenience of the reader, user or browser.
      </div>
    </div>
  )
}
