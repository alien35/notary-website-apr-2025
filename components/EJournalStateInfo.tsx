"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { useLocation } from "./LocationProvider"
import { eJournalStateData, type EJournalStateInfo } from "@/data/e-journal-state-data"
import CountryAndRegionPicker from "@/components/CountryAndRegionPicker"

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

export default function EJournalStateInfo() {
  const { region } = useLocation()
  const info = eJournalStateData[region as keyof typeof eJournalStateData] as EJournalStateInfo | undefined
  const stateName = STATE_MAP[region]

  if (!info || !stateName) {
    return null
  }

  const Icon = info.value ? CheckCircle : XCircle
  const color = info.value ? "text-green-600" : "text-red-600"

  return (
    <section className="py-6 border-t border-gray-200 dark:border-gray-800 bg-secondary dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">
            Electronic journal rules in {stateName}
          </h2>
          <p className={`text-lg ${color}`}>
            <Icon className="inline-block mr-1 h-5 w-5" />
            {info.value ? "An electronic journal may be used exclusively." : "An electronic journal may not be used exclusively for an in-person notarization."}
          </p>
          

          <p className="text-s text-muted-foreground italic">
            Source:{" "}
            <a
              href={info.link}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.citation}
            </a>
          </p>



        </div>
        <CountryAndRegionPicker />
      </div>
    </section>
  )
}

