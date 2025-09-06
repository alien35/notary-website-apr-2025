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
    <section className="py-4 border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-4 text-center space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl md:text-2xl font-semibold">
            Electronic journal rules in {stateName}
          </h2>
          <p className={`text-sm flex items-center justify-center gap-1 ${color}`}>
            <Icon className="h-4 w-4" />
            {info.value
              ? "An electronic journal may be used exclusively."
              : "An electronic journal may not be used exclusively for an in-person notarization."}
          </p>
          <p className="text-xs text-muted-foreground">
            <a href={info.link} className="underline" target="_blank" rel="noopener noreferrer">
              {info.citation}
            </a>
          </p>
        </div>
        <CountryAndRegionPicker />
      </div>
    </section>
  )
}

