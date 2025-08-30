"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface Plan {
  name?: string
  price?: number
}

interface JournalBillingWidgetProps {
  value: {
    monthly?: Plan
    yearly?: Plan
    description?: string
    badge?: string
    annualSavingsLabel?: string
    features?: string[]
  }
}

export default function JournalBillingWidget({ value }: JournalBillingWidgetProps) {
  const { monthly, yearly, description, badge, annualSavingsLabel, features } = value
  const [annual, setAnnual] = useState(true)
  const plan = annual ? yearly : monthly

  const onStart = () => {
    const refId = window?.localStorage?.getItem("ref")
    const path = refId
      ? `https://app.notarycentral.org/auth/signup?ref=${refId}`
      : `https://app.notarycentral.org/auth/signup`
    window.open(path, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center space-x-4 mb-6">
        <Label
          htmlFor="journal-widget-toggle"
          className={annual ? "text-muted-foreground" : "font-medium"}
        >
          Monthly
        </Label>
        <Switch
          id="journal-widget-toggle"
          checked={annual}
          onCheckedChange={setAnnual}
        />
        <div className="flex items-center">
          <Label
            htmlFor="journal-widget-toggle"
            className={annual ? "font-medium" : "text-muted-foreground"}
          >
            Annual
          </Label>
          {annualSavingsLabel && (
            <span className="ml-2 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-2 py-1 rounded-full">
              {annualSavingsLabel}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            {plan?.name && <h4 className="text-xl font-bold mb-2">{plan.name}</h4>}
            {description && <p className="text-muted-foreground mb-2">{description}</p>}
            {badge && (
              <span className="inline-block text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 px-2 py-1 rounded-full mb-4">
                {badge}
              </span>
            )}
            {plan?.price !== undefined && (
              <div className="mb-6">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">
                  /month{annual && <span className="text-sm"> (billed annually)</span>}
                </span>
              </div>
            )}
            <Button onClick={onStart} className="w-full mb-6">
              Get Started
            </Button>
            {features && (
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
