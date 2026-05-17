"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  delay?: number
}

const WHATSAPP_LINK = "https://wa.me/5573988131241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20RENOVE%20CLEAN%20e%20gostaria%20de%20um%20or%C3%A7amento."

export function ServiceCard({ title, description, image, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors duration-200"
        >
          Solicitar orçamento &rarr;
        </a>
      </div>
    </motion.div>
  )
}
