"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does NotaryCentral help with tax deductions?",
    answer:
      "NotaryCentral automatically tracks all your business expenses, including mileage, supplies, and software subscriptions. Our system categorizes these expenses according to IRS guidelines, making it easy to maximize your deductions at tax time. You can also generate detailed reports for your accountant.",
  },
  {
    question: "Is my notary data secure with NotaryCentral?",
    answer:
      "Absolutely. We use bank-level encryption to protect all your data. We perform regular security audits. Your journal entries and client information are protected with multiple layers of security, and we never share your data with third parties.",
  },
  {
    question: "Can I access NotaryCentral on my mobile device?",
    answer:
      "Yes! NotaryCentral is available on iOS and Android devices. The mobile app includes all the features of the desktop version, allowing you to record journal entries, track mileage, and manage appointments while on the go.",
  },
  {
    question: "Does NotaryCentral work for notaries in all states?",
    answer:
      "Yes, NotaryCentral is designed to work for notaries in all 50 states. Our interactive handbooks include state-specific laws and regulations, and our journal system adapts to the requirements of each state.",
  },
  {
    question: "Is there a limit to how many journal entries I can create?",
    answer:
      "No, all of our plans include unlimited journal entries. Whether you perform 5 or 500 notarizations per month, NotaryCentral can handle your volume without any additional charges.",
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section ref={ref} className="py-20">
      <motion.div style={{ opacity, y }} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Find answers to common questions about NotaryCentral</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  )
}
