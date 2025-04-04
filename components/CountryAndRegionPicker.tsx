"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

// State name to abbreviation mapping
const stateNameToAbbreviation = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
  "District of Columbia": "DC",
}

// US States
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
  { value: "DC", label: "District of Columbia" },
]

// Canadian Provinces
export const canadianProvinces = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" },
]

// Event bus for syncing location changes across components
export const locationEventBus = {
  listeners: new Set(),
  subscribe(listener) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  },
  publish(data) {
    this.listeners.forEach((listener) => listener(data))
  },
}

interface CountryAndRegionPickerProps {
  onChange?: (data: { country: string; region: string }) => void
  showLabels?: boolean
  variant?: "default" | "compact"
}

export default function CountryAndRegionPicker({
  onChange,
  showLabels = true,
  variant = "default",
}: CountryAndRegionPickerProps) {
  const [selectedCountry, setSelectedCountry] = useState("US") // Default to US
  const [selectedRegion, setSelectedRegion] = useState("CA") // Default to California
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const storedCountry = localStorage.getItem("userCountry")
        const storedRegion = localStorage.getItem("userLocation")
          ? JSON.parse(localStorage.getItem("userLocation") || "{}").stateAbbreviation || ""
          : ""

        if (storedCountry && storedRegion) {
          setSelectedCountry(storedCountry)
          setSelectedRegion(storedRegion)
          setLoading(false)
          return
        }

        // Fetch user location if not in localStorage
        const response = await fetch("https://ipapi.co/json/")
        if (!response.ok) throw new Error("Failed to fetch location data")

        const data = await response.json()
        const detectedCountry = data.country_code === "CA" ? "CA" : "US"
        const detectedRegion =
          detectedCountry === "US"
            ? stateNameToAbbreviation[data.region] || "CA" // Default to California
            : data.region_code || "BC" // Default to British Columbia

        setSelectedCountry(detectedCountry)
        setSelectedRegion(detectedRegion)

        localStorage.setItem("userCountry", detectedCountry)
        localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: detectedRegion }))

        // Notify other components about the location change
        locationEventBus.publish({ country: detectedCountry, region: detectedRegion })

        // Force reload to apply changes
        window.location.reload()
      } catch (err) {
        console.error("Error fetching location:", err)
        setError("Failed to retrieve location data")
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  const handleCountryChange = (country: string) => {
    const defaultRegion = country === "US" ? "CA" : "BC" // Default: California for US, British Columbia for Canada
    setSelectedCountry(country)
    setSelectedRegion(defaultRegion)

    localStorage.setItem("userCountry", country)
    localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: defaultRegion }))

    // Debug log
    console.log("CountryPicker - Setting location:", {
      country,
      region: defaultRegion,
      stored: JSON.stringify({ stateAbbreviation: defaultRegion }),
    })

    // Notify other components about the location change
    locationEventBus.publish({ country, region: defaultRegion })

    onChange?.({ country, region: defaultRegion })

    // Refresh the page when the country changes
    window.location.reload()
  }

  const handleRegionChange = (region: string) => {
    console.log(region, "region selected")
    setSelectedRegion(region)
    localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: region }))

    // Debug log
    console.log("CountryPicker - Setting region:", {
      region,
      stored: JSON.stringify({ stateAbbreviation: region }),
    })

    // Notify other components about the location change
    locationEventBus.publish({ country: selectedCountry, region })

    onChange?.({ country: selectedCountry, region })

    // Refresh the page when the region changes
    window.location.reload()
  }

  if (loading) {
    return <p className="text-sm text-muted-foreground">Detecting location...</p>
  }

  if (error) {
    return <p className="text-sm text-red-500">{error}</p>
  }

  const regions = selectedCountry === "US" ? usStates : canadianProvinces

  if (variant === "compact") {
    return (
      <div className="flex items-center space-x-2">
        <Select value={selectedCountry} onValueChange={handleCountryChange}>
          <SelectTrigger className="w-20 h-8 border-none">
            <SelectValue>
              <div className="flex items-center">
                <span className="mr-1">{selectedCountry === "US" ? "🇺🇸" : "🇨🇦"}</span>
                <span>{selectedCountry}</span>
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="US">
              <div className="flex items-center">
                <span className="mr-2">🇺🇸</span>
                <span>US</span>
              </div>
            </SelectItem>
            <SelectItem value="CA">
              <div className="flex items-center">
                <span className="mr-2">🇨🇦</span>
                <span>CA</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center">
          <span className="text-xs font-medium mr-1">{selectedCountry === "US" ? "STATE:" : "PROVINCE:"}</span>
          <Select value={selectedRegion} onValueChange={handleRegionChange}>
            <SelectTrigger className="w-16 h-8 border-none">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    )
  }

  return (
    <Card className="my-6">
      <CardContent className="pt-6">
        <h3 className="text-xl font-medium mb-6">Looking for info on a different state/province?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {showLabels && <label className="block text-sm font-medium mb-2">Country</label>}
            <Select value={selectedCountry} onValueChange={handleCountryChange}>
              <SelectTrigger className="w-full">
                <SelectValue>{selectedCountry === "US" ? "United States" : "Canada"}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            {showLabels && (
              <label className="block text-sm font-medium mb-2">
                {selectedCountry === "US" ? "State" : "Province"}/Region
              </label>
            )}
            <Select value={selectedRegion} onValueChange={handleRegionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
