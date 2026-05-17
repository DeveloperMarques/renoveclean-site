"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, Phone, Home, Wrench, Star } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/5573988131241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20RENOVE%20CLEAN%20e%20gostaria%20de%20um%20or%C3%A7amento."

const navLinks = [
  { href: "#sobre", label: "Sobre", icon: Home },
  { href: "#servicos", label: "Servicos", icon: Wrench },
  { href: "#depoimentos", label: "Depoimentos", icon: Star },
  { href: "#contato", label: "Contato", icon: Phone },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="RENOVECLEAN - Higienização de Estofados"
                width={100}
                height={100}
                 className="hidden lg:block h-10 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar Orçamento
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 flex items-center gap-1.5 p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <>
                  <Menu className="w-6 h-6" />
                  <span className="text-xs font-medium">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-72 bg-background border-l border-border shadow-xl flex flex-col pt-24 px-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                >
                  <link.icon className="w-5 h-5 text-muted-foreground" />
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-0.5 py-1 px-3 text-muted-foreground hover:text-primary transition-colors min-w-[44px] min-h-[44px] justify-center"
            >
              <link.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{link.label}</span>
            </Link>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 py-1 px-3 text-[#25d366] min-w-[44px] min-h-[44px] justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-bold">Orçamento</span>
          </a>
        </div>
      </div>
    </>
  )
}
