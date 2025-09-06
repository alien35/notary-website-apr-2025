import type { Metadata } from "next"
import EJournalPageContent from "@/components/EJournalPageContent"
import { STATE_MAP, STATE_ABBR_BY_SLUG } from "@/lib/states"

const description =
  "Learn how NotaryCentral's electronic journal keeps your records organized, secure, and compliant across states and provinces."

export function generateStaticParams() {
  return Object.keys(STATE_ABBR_BY_SLUG).map((slug) => ({ state: slug }))
}

interface Props {
  params: { state: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const abbr = STATE_ABBR_BY_SLUG[params.state]
  const stateName = STATE_MAP[abbr] ?? params.state
  return {
    title: `Electronic Journal (e-Journal) for ${stateName} notaries`,
    description,
  }
}

export default function StateEJournalPage({ params }: Props) {
  const abbr = STATE_ABBR_BY_SLUG[params.state]
  const stateName = STATE_MAP[abbr] ?? params.state
  const title = `Electronic Journal (e-Journal) for ${stateName} notaries`
  return (
    <EJournalPageContent
      title={title}
      description={description}
      stateAbbreviation={abbr}
    />
  )
}
