import { CheckCircle, XCircle } from "lucide-react"
import { eJournalStateData, type EJournalStateInfo } from "@/data/e-journal-state-data"

const STATE_MAP: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa",
  KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland",
  MA: "Massachusetts", MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri",
  MT: "Montana", NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey",
  NM: "New Mexico", NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio",
  OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
  DC: "District of Columbia",
}

export default function EJournalStateTable() {
  const entries = Object.entries(eJournalStateData).sort((a, b) =>
    STATE_MAP[a[0]].localeCompare(STATE_MAP[b[0]])
  )

  return (
    <section className="py-6 border-t border-gray-200 dark:border-gray-800 bg-secondary dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          State electronic journal rules
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr>
                <th className="px-4 py-2">State</th>
                <th className="px-4 py-2">Electronic journal only?</th>
                <th className="px-4 py-2">Citation</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(([abbr, info]: [string, EJournalStateInfo]) => {
                const Icon = info.value ? CheckCircle : XCircle
                const color = info.value ? "text-green-600" : "text-red-600"
                return (
                  <tr key={abbr} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">{STATE_MAP[abbr]}</td>
                    <td className={`px-4 py-2 ${color}`}>
                      <Icon className="inline-block mr-1 h-5 w-5" />
                      {info.value ? "Yes" : "No"}
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href={info.link}
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.citation}
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
