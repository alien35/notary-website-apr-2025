import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "General. We will not share or sell your personal information or information that can be used to identify you without your permission.",
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
