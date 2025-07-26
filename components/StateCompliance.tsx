"use client"

import Link from "next/link"
import { CheckCircle, XCircle } from "lucide-react"
import { useLocation } from "./LocationProvider"

interface EJInfo {
  state: string
  compliant: boolean
  quote: string
  link: string
}

const EJ_STATES: EJInfo[] = [
  {
    state: "Colorado",
    compliant: true,
    quote: "Colorado Revised Statutes 24-21-519 allows electronic notary journals.",
    link: "https://www.sos.state.co.us/pubs/notary/",
  },
  {
    state: "Georgia",
    compliant: true,
    quote: "Georgia law permits electronic journals under OCGA §45-17-6.1.",
    link: "https://sos.ga.gov/",
  },
  {
    state: "Illinois",
    compliant: true,
    quote: "Illinois Notary Public Act authorizes electronic journals (5 ILCS 312).",
    link: "https://www.ilsos.gov/departments/index/notary/",
  },
  {
    state: "Maryland",
    compliant: true,
    quote: "Maryland COMAR 01.02.08 permits e-journal entries.",
    link: "https://sos.maryland.gov/Notary/Pages/default.aspx",
  },
  {
    state: "New Jersey",
    compliant: true,
    quote: "N.J.S.A. 52:7-10 authorizes electronic journals.",
    link: "https://www.nj.gov/state/archives/notary.html",
  },
  {
    state: "Texas",
    compliant: true,
    quote: "Texas Government Code §406.014 requires electronic journals for online notarizations.",
    link: "https://www.sos.state.tx.us/statdoc/notary-public.shtml",
  },
  {
    state: "Virginia",
    compliant: true,
    quote: "Virginia Code §47.1-14 allows electronic journals.",
    link: "https://www.commonwealth.virginia.gov/official-documents/notary/",
  },
  {
    state: "Washington",
    compliant: true,
    quote: "RCW 42.45.180 authorizes electronic notarial records.",
    link: "https://www.sos.wa.gov/",
  },
  {
    state: "Alabama",
    compliant: false,
    quote: "Alabama currently does not permit electronic notary journals.",
    link: "https://www.sos.alabama.gov/",
  },
  {
    state: "Arizona",
    compliant: false,
    quote: "Arizona statutes require a physical paper journal.",
    link: "https://azsos.gov/",
  },
  {
    state: "California",
    compliant: false,
    quote: "California notary law mandates a paper journal only.",
    link: "https://notary.cdn.sos.ca.gov/forms/notary-handbook-2023.pdf",
  },
  {
    state: "Massachusetts",
    compliant: false,
    quote: "Massachusetts has not adopted electronic journal provisions.",
    link: "https://www.mass.gov/commission-notary-public",
  },
  {
    state: "New York",
    compliant: false,
    quote: "New York requires paper journals for notaries.",
    link: "https://dos.ny.gov/notary-public",
  },
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

  const info = EJ_STATES.find((s) => s.state === displayName)
  const compliant = info ? info.compliant : false

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
          {info && (
            <p className="text-sm text-muted-foreground">
              “{info.quote}”{' '}
              <Link href={info.link} target="_blank" rel="noopener" className="underline">
                Official Source
              </Link>
            </p>
          )}
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

