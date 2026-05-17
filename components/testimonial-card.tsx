"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  neighborhood: string
  image: string
  testimonial: string
  delay?: number
}

export function TestimonialCard({
  name,
  neighborhood,
  image,
  testimonial,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{neighborhood}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {`"${testimonial}"`}
      </p>
    </motion.div>
  )
}
