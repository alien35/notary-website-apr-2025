"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const onTry = () => {
    const refId = window?.localStorage?.getItem("ref")
    const path = refId
      ? `https://app.notarycentral.org/auth/signup?ref=${refId}`
      : `https://app.notarycentral.org/auth/signup`
    window.open(path, "_blank", "noopener,noreferrer")
  }

  const handleDemoRequest = () => {
    window.open("https://cal.com/notarycentral/30min", "_blank", "noopener,noreferrer")
  }

  return (
    <section ref={ref} className="py-20 bg-primary text-primary-foreground">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Notary Business?</h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Join thousands of notaries who are saving time, increasing earnings, and simplifying their business with
            NotaryCentral.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={onTry} size="lg" variant="secondary" className="text-lg px-8">
              Try it FREE
            </Button>
            <Button
              onClick={handleDemoRequest}
              size="lg"
              className="text-lg px-8"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            No credit card required. Free for first 15 signings.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
