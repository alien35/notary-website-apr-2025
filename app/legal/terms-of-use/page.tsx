import type { Metadata } from "next"
import TermsOfUseClient from "./TermsOfUseClient"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "These terms were updated and effective as of July 31st, 2024",
}

export default function TermsOfService() {
  return <TermsOfUseClient />
}
