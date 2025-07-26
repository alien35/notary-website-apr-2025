"use client"

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

  const ejCompliant = EJ_COMPLIANT_STATES.includes(displayName)
  const ejNonCompliant = EJ_NON_COMPLIANT_STATES.includes(displayName)

  let ejAnswer = "Varies – check local rules"
  if (ejCompliant) ejAnswer = "Yes"
  if (ejNonCompliant) ejAnswer = "No"

  return (
    <section className="py-12 border-t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Is NotaryCentral compliant in {displayName}?
        </h2>
        <div className="space-y-1 text-lg">
          <p>
            <strong>Electronic journal:</strong> {ejAnswer}
          </p>
          <p>
            <strong>Business management:</strong> Yes
          </p>
        </div>
      </div>
    </section>
  )
}

