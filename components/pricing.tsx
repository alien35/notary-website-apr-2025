"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function Pricing() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  // 🟢 Default to annual
  const [journalAnnual, setJournalAnnual] = useState(true)
  const [businessAnnual, setBusinessAnnual] = useState(true)

  const journalPlans = {
    monthly: {
      name: "Journal (Monthly)",
      price: 1.95,
      billing: "month",
      description: "Digital journal for notaries on the go",
      badge: "First 5 entries free",
      features: ["Digital e-Journal", "Mobile app access", "Email support"],
    },
    yearly: {
      name: "Journal (Yearly)",
      price: 19.95,
      billing: "year",
      description: "Save more with the annual journal subscription",
      badge: "First 5 entries free",
      features: ["Digital e-Journal", "Mobile app access", "Email support"],
    },
  }

  const businessPlans = {
    monthly: {
      name: "Business Tools (Monthly)",
      price: 11.95,
      billing: "month",
      description: "All-in-one tools for active notary businesses",
      badge: "15 free appointments included",
      features: [
        "Digital e-Journal",
        "Automated accounting",
        "Mileage tracking",
        "Appointment scheduling",
        "Priority support",
      ],
      popular: true,
    },
    yearly: {
      name: "Business Tools (Yearly)",
      price: 119.95,
      billing: "year",
      description: "Full suite + annual savings",
      badge: "15 free appointments included",
      features: [
        "Digital e-Journal",
        "Automated accounting",
        "Mileage tracking",
        "Appointment scheduling",
        "Priority support",
      ],
    },
  }

  const onStart = () => {
    const refId = window?.localStorage?.getItem("ref")
    const path = refId
      ? `https://app.notarycentral.org/auth/signup?ref=${refId}`
      : `https://app.notarycentral.org/auth/signup`
    window.open(path, "_blank", "noopener,noreferrer")
  }

  return (
    <section ref={ref} id="pricing" className="py-20 bg-secondary dark:bg-gray-900">
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">Choose the tools that work best for your notary needs</p>
        </div>

        
        {/* Business Tools Section */}
        <div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Label htmlFor="business-toggle" className={businessAnnual ? "text-muted-foreground" : "font-medium"}>
              Monthly
            </Label>
            <Switch id="business-toggle" checked={businessAnnual} onCheckedChange={setBusinessAnnual} />
            <div className="flex items-center">
              <Label htmlFor="business-toggle" className={businessAnnual ? "font-medium" : "text-muted-foreground"}>
                Annual
              </Label>
              <span className="ml-2 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 max-w-3xl mx-auto">
            {(() => {
              const plan = businessAnnual ? businessPlans.yearly : businessPlans.monthly
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden ${
                    !businessAnnual && businessPlans.monthly.popular ? "ring-2 ring-primary relative" : ""
                  }`}
                >
                  {!businessAnnual && businessPlans.monthly.popular && (
                    <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 absolute right-0 top-0 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                    <p className="text-muted-foreground mb-2">{plan.description}</p>
                    <span className="inline-block text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 px-2 py-1 rounded-full mb-4">
                      {plan.badge}
                    </span>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">
                        {plan.billing === "year" ? `$${(plan.price / 12).toFixed(2)}` : `$${plan.price}`}
                      </span>
                      <span className="text-muted-foreground">
                        /month{plan.billing === "year" && <span className="text-sm"> (billed annually)</span>}
                      </span>
                    </div>
                    <Button onClick={onStart} className="w-full mb-6" variant={businessAnnual ? "outline" : "default"}>
                      Get Started
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })()}
          </div>
        </div>

        {/* Journal Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Label htmlFor="journal-toggle" className={journalAnnual ? "text-muted-foreground" : "font-medium"}>
              Monthly
            </Label>
            <Switch id="journal-toggle" checked={journalAnnual} onCheckedChange={setJournalAnnual} />
            <div className="flex items-center">
              <Label htmlFor="journal-toggle" className={journalAnnual ? "font-medium" : "text-muted-foreground"}>
                Annual
              </Label>
              <span className="ml-2 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">
                Save 15%
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 max-w-3xl mx-auto">
            {(() => {
              const plan = journalAnnual ? journalPlans.yearly : journalPlans.monthly
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                    <p className="text-muted-foreground mb-2">{plan.description}</p>
                    <span className="inline-block text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 px-2 py-1 rounded-full mb-4">
                      {plan.badge}
                    </span>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">
                        {plan.billing === "year" ? `$${(plan.price / 12).toFixed(2)}` : `$${plan.price}`}
                      </span>
                      <span className="text-muted-foreground">
                        /month{plan.billing === "year" && <span className="text-sm"> (billed annually)</span>}
                      </span>
                    </div>
                    <Button onClick={onStart} className="w-full mb-6">
                      Get Started
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )
            })()}
          </div>
        </div>

      </motion.div>
    </section>
  )
}
