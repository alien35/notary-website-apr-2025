import type React from "react"
import type { Metadata } from "next/types"
import Script from "next/script"
import { Inter, EB_Garamond } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LocationProvider } from "@/components/LocationProvider"
import { PostHogProvider } from "@/components/PostHogProvider"

const inter = Inter({ subsets: ["latin"] })
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NotaryCentral - The Super App for Notaries",
  description:
    "NotaryCentral gives notaries digital journals, scheduling, compliance tips, and training so every signing stays organized, secure, and aligned with state law.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${ebGaramond.variable}`}>
        <Script id="crisp-widget" strategy="afterInteractive">
          {`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "2dfd4bb0-33ea-47f6-bec1-36b4dd4a83d6";
            (function() {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <LocationProvider>
              <Header />
              <main>{children}</main>
              <Footer />
            </LocationProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
