"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { canadianProvinces, locationEventBus } from "./CountryAndRegionPicker"
import { maybeRedirectToStatePage } from "@/lib/state-url"

export default function StatePicker() {
  const [state, setState] = useState("CA")
  const [country, setCountry] = useState("US")

  const usStates = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
    ...canadianProvinces
  ]

  useEffect(() => {
    // Get from localStorage on mount
    const storedCountry = localStorage.getItem("userCountry")
    const storedLocation = localStorage.getItem("userLocation")

    if (storedCountry) {
      setCountry(storedCountry)
    }

    if (storedLocation) {
      try {
        const { stateAbbreviation } = JSON.parse(storedLocation)
        if (stateAbbreviation) {
          setState(stateAbbreviation)
        }
      } catch (e) {
        console.error("Error parsing stored location:", e)
      }
    }
  }, [])

  const handleStateChange = (newState: string) => {
    console.log(newState, "state selected")
    setState(newState)
    localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: newState }))

    // Debug log
    console.log("StatePicker - Setting state:", {
      state: newState,
      stored: JSON.stringify({ stateAbbreviation: newState }),
    })

    // Notify other components about the location change
    locationEventBus.publish({ country, region: newState })

    // Only redirect when the route pattern matches (e.g., on e-journal pages)
    maybeRedirectToStatePage(newState)
  }

  return (
    <div className="my-4">
      <label className="block text-sm font-medium mb-1">Select State</label>
      <Select value={state} onValueChange={handleStateChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select state" />
        </SelectTrigger>
        <SelectContent>
          {usStates.map((state) => (
            <SelectItem key={state.value} value={state.value}>
              {state.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
