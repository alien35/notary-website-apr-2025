"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "It's clear that NotaryCentral is a true game-changer for the industry and an essential resource for every notary",
    author: "Wayne Lewis",
    role: "Notary & Founder of American Notary USA",
    rating: 5,
  },
  {
    quote:
      "this is such a game-changer for notaries here!",
    author: "Sierra Walker",
    role: "Notary & Trainer at The Notary Blueprint",
    rating: 5,
  },
  {
    quote:
      "after looking at the options and trying this out, this will work for me. the concept is great",
    author: "Jennifer",
    role: "Notary Public, Louisiana",
    rating: 4,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={ref} className="py-20">
      <motion.div style={{ opacity, scale }} className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Notaries Nationwide</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of notaries who have transformed their business with NotaryCentral
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
