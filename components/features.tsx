"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Calculator, Car, FileText, Clock, Smartphone, Cloud, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Digital e-Journals",
    description: "Securely record and store all your notary transactions digitally, with easy search and retrieval.",
    href: "/post/e-journal",
  },
  {
    icon: <Calculator className="h-10 w-10 text-primary" />,
    title: "Accounting",
    description: "Track income, expenses, and generate tax reports automatically to maximize deductions.",
    href: "/accounting",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    title: "Mileage Tracking",
    description: "GPS-powered mileage tracking for accurate travel expense records and tax deductions.",
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Interactive Handbooks",
    description: "Access state-specific notary laws and guidelines at your fingertips, always up-to-date.",
    href: "/post/ask-anything",
  },
  /*
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Compliance Tools",
    description: "Stay compliant with automated checks and reminders for commission renewals and requirements.",
    href: "/features/compliance",
  },
  */
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Online Scheduling",
    description: "Create a shareable calendar link where new appointments automatically sync with your existing calendar events.",
    href: "/post/online-scheduler",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Google Calendar Scheduling",
    description: "Manage your appointments with calendar integration and automated reminders.",
    // href: "/features/scheduling",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Friendly",
    description: "Work from anywhere with our fully-featured mobile app for iOS and Android.",
    // href: "/features/mobile",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary" />,
    title: "Cloud Backup",
    description: "Never lose important data with automatic cloud backups and easy restoration.",
    // href: "/features/cloud-backup",
  },
]

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section ref={ref} className="py-20 bg-secondary dark:bg-gray-900">
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need in One Place</h2>
          <p className="text-xl text-muted-foreground">
            NotaryCentral combines all the tools notaries need to run their business efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{feature.description}</p>
              {feature.href ? (
                <div className="mt-auto">
                  <Button variant="outline" size="sm" asChild className="group">
                    <Link href={feature.href}>
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
