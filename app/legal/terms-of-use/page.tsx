import type { Metadata } from "next"
import TermsOfUseClient from "./TermsOfUseClient"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review NotaryCentral's Terms of Service covering user responsibilities, privacy practices, and liability limits so you know the rules for accessing our tools.",
}

export default function TermsOfService() {
  return <TermsOfUseClient />
}
