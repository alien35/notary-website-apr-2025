"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Youtube, Apple, SmartphoneIcon as Android, Rss, Linkedin, Github } from "lucide-react"
import CompliancePreview from "@/components/CompliancePreview"
import { useEffect, useState } from "react"

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Pricing", href: "/pricing" },
      { name: "Compliance", href: "/compliance" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" },
      { name: "Comparison with NotaryGadget", href: "/notary-app-comparison" },
    ],
  },
  {
    title: "Company",
    links: [{ name: "About", href: "/about" }],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Terms of Use", href: "/legal/terms-of-use" },
      { name: "Security", href: "/security" },
    ],
  },
]

const socialLinks = [
  { icon: <Facebook size={20} />, href: "https://www.facebook.com/notarycentralapp/" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/notarycentral_" },
  { icon: <Youtube size={20} />, href: "https://www.youtube.com/@notarycentral" },
  { icon: <Rss size={20} />, href: "https://www.youtube.com/playlist?list=PL0CPfCjyonNdD4zfsnR8VNpgLUnti0B8-" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/notarycentral" },
  { icon: <Github size={20} />, href: "https://github.com/NotaryCentral/notary-resources" },
]

export default function Footer() {
  const openAppStore = () => {
    window.open("https://apps.apple.com/us/app/notarycentral/id6593684890", "_blank")
  }

  const openGooglePlay = () => {
    window.open("https://play.google.com/store/apps/details?id=my.notary.business&pli=1", "_blank")
  }

    const [inApp, setInApp] = useState(false);
  
    useEffect(() => {
        if (typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            setInApp(urlParams.get('inApp') === 'true');
        }
    }, []);
  
    if (inApp) return null;

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <CompliancePreview />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/notary-logo-050225-2.jpg-7xXjRU3TdLwdld0L5IG9bbjjTJbREa.jpeg"
                  alt="NotaryCentral Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-eb-garamond text-2xl" style={{ color: "#ac6601" }}>
                NotaryCentral
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              The all-in-one platform for notaries to manage their business, increase efficiency, and maximize earnings.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="flex items-center space-x-2" onClick={openAppStore}>
                  <Apple size={20} />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2" onClick={openGooglePlay}>
                  <Android size={20} />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} NotaryCentral. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">1272 SW Evergreen Ln, Florida, 37990</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Visit our social media ${i + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
