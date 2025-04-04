"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import PricingView from "@/components/pricing"

export default function Pricing() {

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <PricingView />
    </div>
  )
}
