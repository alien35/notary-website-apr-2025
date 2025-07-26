"use client"

import Link from "next/link"
import { CheckCircle, XCircle } from "lucide-react"
import { useLocation } from "./LocationProvider"

const EJ_COMPLIANT_STATES = [
  "Colorado",
  "Georgia",
  "Illinois",
  "Maryland",
  "New Jersey",
  "Texas",
  "Virginia",
  "Washington",
]

const EJ_NON_COMPLIANT_STATES = [
  "Alabama",
  "Arizona",
  "California",
  "Massachusetts",
  "New York",
]

const STATE_MAP: Record<string, string> = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
}

interface Props {
  stateName?: string
}

export default function StateCompliance({ stateName }: Props) {
  const { region } = useLocation()
  const displayName = stateName || STATE_MAP[region] || "your state"

  const compliant = EJ_COMPLIANT_STATES.includes(displayName)

  const AnswerIcon = compliant ? CheckCircle : XCircle
  const answerText = compliant ? "Yes" : "No"
  const answerClass = compliant ? "text-green-600" : "text-red-600"

  return (
    <section className="py-12 md:py-20 bg-secondary dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Is NotaryCentral compliant in {displayName}?
        </h2>
        <div className="space-y-2 text-lg">
          <p>
            <strong>Electronic journal:</strong>{' '}
            <span className={answerClass}>
              <AnswerIcon className="inline-block mr-1 h-5 w-5" />
              {answerText}
            </span>
          </p>
          <p>
            <Link href="/post/e-journal" className="underline">
              Learn more
            </Link>
          </p>
          <p>
            <strong>Business management:</strong>{' '}
            <span className="text-green-600">
              <CheckCircle className="inline-block mr-1 h-5 w-5" />Yes
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

