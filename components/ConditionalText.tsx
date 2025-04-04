"use client"

import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"

interface ConditionalTextProps {
  value: {
    text: string
    state: string // State/province abbreviation passed from Sanity, e.g., "TX" or "BC"
  }
}

export default function ConditionalText({ value }: ConditionalTextProps) {
  const { text, state } = value

  // State to track if the userLocation matches
  const [isMatchingLocation, setIsMatchingLocation] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // First check if we have a country set
      const storedCountry = localStorage.getItem("userCountry") || "US"

      // Get the stored location from localStorage
      const userLocationString = localStorage.getItem("userLocation")
      let userState = "CA" // Default to CA if not found

      // If country is Canada, default to BC instead
      if (storedCountry === "CA") {
        userState = "BC"
      }

      if (userLocationString) {
        try {
          const userLocation = JSON.parse(userLocationString)
          // Extract the stateAbbreviation from the parsed userLocation object
          if (userLocation?.stateAbbreviation) {
            userState = userLocation.stateAbbreviation
          }
        } catch (error) {
          console.error("Error parsing user location:", error)
          // Keep the default state
        }
      } else {
        // If userLocation isn't set in localStorage, set it with the default state
        localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: userState }))
      }

      // For debugging
      console.log("ConditionalText - Current state:", userState, "Target state:", state, "Match:", userState === state)

      // Compare the state to the state passed from Sanity
      setIsMatchingLocation(userState === state)
    }
  }, [state])

  // Render Markdown if the user's location matches the specified state
  return isMatchingLocation ? <ReactMarkdown>{text}</ReactMarkdown> : null
}
