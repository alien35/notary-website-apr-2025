import type { Metadata } from "next"
import EJournalPageContent from "@/components/EJournalPageContent"

const title = "Electronic Journal (e-Journal)"
const description =
  "Learn how NotaryCentral's electronic journal keeps your records organized, secure, and compliant across states and provinces."

export const metadata: Metadata = {
  title,
  description,
}

export default function EJournalPage() {
  return <EJournalPageContent title={title} description={description} />
}
