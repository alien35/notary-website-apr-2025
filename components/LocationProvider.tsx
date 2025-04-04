"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { locationEventBus } from "./CountryAndRegionPicker"
import { useToast } from "@/hooks/use-toast"

interface LocationContextType {
  country: string
  region: string
  setLocation: (country: string, region: string) => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

export function useLocation() {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider")
  }
  return context
}

interface LocationProviderProps {
  children: ReactNode
}

export function LocationProvider({ children }: LocationProviderProps) {
  const [country, setCountry] = useState("US")
  const [region, setRegion] = useState("CA")
  const { toast } = useToast()

  useEffect(() => {
    // Load from localStorage on mount
    const storedCountry = localStorage.getItem("userCountry")
    const storedLocation = localStorage.getItem("userLocation")

    if (storedCountry) {
      setCountry(storedCountry)
    }

    if (storedLocation) {
      try {
        const { stateAbbreviation } = JSON.parse(storedLocation)
        if (stateAbbreviation) {
          setRegion(stateAbbreviation)
        }
      } catch (e) {
        console.error("Error parsing stored location:", e)
      }
    }
  }, [])

  // Subscribe to location changes from other components
  useEffect(() => {
    const unsubscribe = locationEventBus.subscribe(({ country: newCountry, region: newRegion }) => {
      if (newCountry) setCountry(newCountry)
      if (newRegion) setRegion(newRegion)
    })

    return unsubscribe
  }, [])

  const setLocation = (newCountry: string, newRegion: string) => {
    setCountry(newCountry)
    setRegion(newRegion)

    localStorage.setItem("userCountry", newCountry)
    localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: newRegion }))

    // Notify other components about the location change
    locationEventBus.publish({ country: newCountry, region: newRegion })

    toast({
      title: "Location updated",
      description: `Your location has been updated to ${newCountry === "US" ? "United States" : "Canada"}, ${newRegion}`,
    })
  }

  return <LocationContext.Provider value={{ country, region, setLocation }}>{children}</LocationContext.Provider>
}
