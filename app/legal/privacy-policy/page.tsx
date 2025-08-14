import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how NotaryCentral collects, uses, and protects personal information, what data we store, who has access, and your options for managing or deleting it.",
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyClient />
}
