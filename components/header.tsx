"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const menuItems = {
  solutions: [
    {
      title: "Accounting",
      description: "Track income, expenses, and generate tax reports automatically to maximize deductions.",
      href: "/post/accounting",
    },
    {
      title: "Interactive Notary Handbook",
      description: "Access state-specific notary laws and guidelines",
      href: "/post/ask-anything",
    },
    {
      title: "Business Health Insights",
      description: "Get actionable insights to grow your notary business",
      href: "/post/business-insights",
    },
    {
      title: "e-Journal",
      description: "Digitally record and store all your notary transactions",
      href: "/post/e-journal",
    },
    {
      title: "Scheduling",
      description: "Create a shareable calendar link where new appointments automatically sync with your existing calendar events.",
      href: "/post/online-scheduler",
    },
  ],
  features: [
    {
      title: "Expense tracking",
      description: "Track and categorize all your business expenses",
      href: "/post/expense-tracking",
    },
    {
      title: "Import Orders",
      description: "Easily import signing orders from other platforms",
      href: "/post/import-orders",
    },
  ],
  resources: [
    {
      title: "Training",
      href: "/training",
    },
    {
      title: "Official notary rules",
      href: "/official-notary-rules",
    },
    {
      title: "How to become a notary",
      href: "/how-to-become-a-notary",
    },
    {
      title: "Why NotaryCentral is the Best US Notary App",
      href: "/why-notarycentral-is-the-best-us-notary-app",
    },
  ],
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
]

// Canadian Provinces
const canadianProvinces = [
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

const useMobileBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640) // Changed from 768px to 640px
    }
    checkIfMobile()

    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return isMobile
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [country, setCountry] = useState("US")
  const [state, setState] = useState("CA")
  const isMobile = useMobileBreakpoint()
  const { toast } = useToast()

  // Load location from localStorage on mount
  useEffect(() => {
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [inApp, setInApp] = useState(false);

  useEffect(() => {
      if (typeof window !== "undefined") {
          const urlParams = new URLSearchParams(window.location.search);
          setInApp(urlParams.get('inApp') === 'true');
      }
  }, []);

  if (inApp) return null;


  const handleDemoRequest = () => {
    window.open("https://cal.com/notarycentral/30min", "_blank", "noopener,noreferrer")
  }

  const handleSignup = () => {
    const refId = window?.localStorage?.getItem("ref")
    const path = refId
      ? `https://app.notarycentral.org/auth/signup?ref=${refId}`
      : `https://app.notarycentral.org/auth/signup`
    window.open(path, "_blank", "noopener,noreferrer")
  }

  const handleCountryChange = (newCountry: string) => {
    const defaultRegion = newCountry === "US" ? "CA" : "BC"
    setCountry(newCountry)
    setState(defaultRegion)

    localStorage.setItem("userCountry", newCountry)
    localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: defaultRegion }))

    // Refresh the page when the country changes
    window.location.reload()
  }

  const handleStateChange = (newState: string) => {
    setState(newState)
    localStorage.setItem("userLocation", JSON.stringify({ stateAbbreviation: newState }))
    window.location.reload()
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2"
          : "bg-white py-2 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + brand */}
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notary-logo-050225-2.jpg-7xXjRU3TdLwdld0L5IG9bbjjTJbREa.jpeg"
              alt="NotaryCentral Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <Link href="/" className="font-eb-garamond text-xl" style={{ color: "#ac6601" }}>
            NotaryCentral
          </Link>
        </div>

        {/* MOBILE MENU */}
        {isMobile ? (
          <>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 p-4 overflow-y-auto">
                <nav className="flex flex-col min-h-full space-y-4 bg-white dark:bg-gray-900">
                  {/* Standard links */}
                  <Link
                    href="/pricing"
                    className="py-2 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    PRICING
                  </Link>
                  <Link
                    href="/post/why-did-i-start-notarycentral"
                    className="py-2 text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>

                  <div className="pt-2 border-t border-gray-700/20 dark:border-gray-500/20">
                    <h4 className="mb-2 text-md font-semibold">RESOURCES</h4>
                    {menuItems.resources.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-1 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Show SOLUTIONS and FEATURES inline on mobile */}
                  <div className="pt-2 border-t border-gray-700/20 dark:border-gray-500/20">
                    <h4 className="mb-2 text-md font-semibold">SOLUTIONS</h4>
                    {menuItems.solutions.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-1 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-gray-700/20 dark:border-gray-500/20">
                    <h4 className="mb-2 text-md font-semibold">FEATURES</h4>
                    {menuItems.features.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block py-1 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>

                  {/* Country & State/Province */}
                  <div className="flex flex-col space-y-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">COUNTRY:</span>
                      <Select value={country} onValueChange={handleCountryChange}>
                        <SelectTrigger className="w-24">
                          <SelectValue>
                            <div className="flex items-center">
                              <span className="mr-2">{country === "US" ? "🇺🇸" : "🇨🇦"}</span>
                              <span>{country}</span>
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
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">
                        {country === "US" ? "STATE:" : "PROVINCE:"}
                      </span>
                      <Select value={state} onValueChange={handleStateChange}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {(country === "US" ? usStates : canadianProvinces).map((region) => (
                            <SelectItem key={region.value} value={region.value}>
                              {region.value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-4 flex flex-col space-y-2">
                    <Button variant="outline" onClick={handleDemoRequest}>
                      Request Demo
                    </Button>
                    <Button onClick={handleSignup}>SIGN UP</Button>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          /* DESKTOP NAV */
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-6">
              <Link href="/pricing" className="text-sm font-medium hover:text-primary">
                PRICING
              </Link>
              <Link href="/post/why-did-i-start-notarycentral" className="text-sm font-medium hover:text-primary">
                ABOUT
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent hover:text-primary">
                      RESOURCES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="p-4 space-y-2">
                        {menuItems.resources.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {item.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Solutions & Features in a NavigationMenu for desktop */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium bg-transparent hover:bg-transparent hover:text-primary">
                      SOLUTIONS & FEATURES
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-6 p-6 md:w-[600px] lg:w-[700px]" style={{ transform: "translateX(0)" }}>
                        <div className="grid gap-3">
                          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
                            SOLUTIONS
                          </h3>
                          <ul className="grid gap-3 md:grid-cols-2">
                            {menuItems.solutions.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={item.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {item.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid gap-3">
                          <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
                            FEATURES
                          </h3>
                          <ul className="grid gap-3 md:grid-cols-2">
                            {menuItems.features.map((item) => (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={item.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {item.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Desktop Country/State selectors & CTA Buttons */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Select value={country} onValueChange={handleCountryChange}>
                  <SelectTrigger className="w-20 h-8 border-none">
                    <SelectValue>
                      <div className="flex items-center">
                        <span className="mr-1">{country === "US" ? "🇺🇸" : "🇨🇦"}</span>
                        <span>{country}</span>
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
              </div>

              <div className="flex items-center">
                <span className="text-xs font-medium mr-1">
                  {country === "US" ? "STATE:" : "PROVINCE:"}
                </span>
                <Select value={state} onValueChange={handleStateChange}>
                  <SelectTrigger className="w-16 h-8 border-none">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {(country === "US" ? usStates : canadianProvinces).map((region) => (
                      <SelectItem key={region.value} value={region.value}>
                        {region.value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline" size="sm" onClick={handleDemoRequest} className="h-8">
                Request Demo
              </Button>
              <Button onClick={handleSignup} size="sm" className="h-8 bg-primary text-white hover:bg-primary/90">
                SIGN UP
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
