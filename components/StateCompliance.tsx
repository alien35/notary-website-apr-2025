"use client"

import Link from "next/link"
import { CheckCircle, XCircle } from "lucide-react"
import { useLocation } from "./LocationProvider"
import { eJournalStateData } from "@/data/e-journal-state-data"

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
}

interface Props {
  stateName?: string
}

export default function StateCompliance({ stateName }: Props) {
  const { region } = useLocation()
  const regionCode = stateName
    ? (Object.entries(STATE_MAP).find(([abbr, name]) => name === stateName)?.[0] || region)
    : region
  const displayName = STATE_MAP[regionCode] || "your state"

  const info = eJournalStateData[regionCode as keyof typeof eJournalStateData]
  const compliant = info ? info.value : true
  const nonCompliant = !compliant

  const AnswerIcon = compliant ? CheckCircle : XCircle
  const answerText = compliant ? "Yes" : "No"
  const answerClass = compliant ? "text-green-600" : "text-red-600"

  return (
    <section className="py-6 border-t border-b border-gray-200 dark:border-gray-800 bg-secondary dark:bg-gray-900 mb-4">
      <div className="container mx-auto px-4 text-center space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold">
        🔒 Is NotaryCentral compliant in {displayName}?
        </h2>
        <div className="space-y-2 text-lg">
          <p>
            <strong>Electronic journal:</strong>{" "}
            <span className={answerClass}>
              <AnswerIcon className="inline-block mr-1 h-5 w-5" />
              {answerText}
            </span>
          </p>
          {!compliant && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              An e-journal is allowed, but cannot replace the required paper journal.
            </p>
          )}
          <p>
            <Link href="/post/e-journal" className="underline">
              Learn more
            </Link>
          </p>
          <p>
            <strong>Business management:</strong>{" "}
            <span className="text-green-600">
              <CheckCircle className="inline-block mr-1 h-5 w-5" />Yes
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
