"use client"

import { CheckCircle, XCircle } from "lucide-react"
import { useLocation } from "./LocationProvider"
import { eJournalStateData, type EJournalStateInfo } from "@/data/e-journal-state-data"
import CountryAndRegionPicker from "@/components/CountryAndRegionPicker"
import { STATE_MAP, isCanadianAbbr } from "@/lib/states"
import { useEffect } from "react"

interface Props {
  stateAbbreviation?: string
}

export default function EJournalStateInfo({ stateAbbreviation }: Props) {
  const { region, setLocation } = useLocation()
  const effectiveRegion = stateAbbreviation ?? region

  useEffect(() => {
    if (stateAbbreviation) {
      const inferredCountry = isCanadianAbbr(stateAbbreviation) ? "CA" : "US"
      console.log("EJournalStateInfo: setting location from prop", {
        stateAbbreviation,
        inferredCountry,
      })
      setLocation(inferredCountry, stateAbbreviation)
    }
  }, [stateAbbreviation, setLocation])

  const info = eJournalStateData[effectiveRegion as keyof typeof eJournalStateData] as EJournalStateInfo | undefined
  const stateName = STATE_MAP[effectiveRegion]

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
            Can an e-journal be used as the sole journal for in-person notarizations in {stateName}?
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
