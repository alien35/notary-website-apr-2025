"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const onTry = () => {
    const refId = window?.localStorage?.getItem("ref")
    const path = refId
      ? `https://app.notarycentral.org/auth/signup?ref=${refId}`
      : `https://app.notarycentral.org/auth/signup`
    window.open(path, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The super app for notaries
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything from e-Journals, accounting, mileage tracking, interactive handbooks and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={onTry} size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                Try it FREE
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">No credit card required. Free for first 15 signings</p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] shadow-2xl rounded-xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nc-splash-zoom.jpg-o72ERwYUs3Heq1ZpTUOnj5WKBZ0kTW.jpeg"
                alt="NotaryCentral Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
            >
              <p className="font-medium">Save 10+ hours weekly</p>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
            >
              <p className="font-medium">Ensure you get paid</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
