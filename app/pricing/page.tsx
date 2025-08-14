import type { Metadata } from "next"
import PricingView from "@/components/pricing"

export const metadata: Metadata = {
  title: "Pricing | NotaryCentral",
  description:
    "See how NotaryCentral pricing fits your budget with plans that include journals, scheduling, and compliance tools that scale as your notary business grows.",
}

export default function Pricing() {

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <PricingView />
    </div>
  )
}
