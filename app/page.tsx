"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Bug, Droplets, Wind, Eye, Search, Sparkles, Timer, MessageCircle, ShieldCheck, Zap, Award, Phone, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { GlassCard } from "@/components/glass-card"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"

const WHATSAPP_LINK = "https://wa.me/5573988131241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20RENOVE%20CLEAN%20e%20gostaria%20de%20um%20or%C3%A7amento."

const awarenessItems = [
  {
    icon: Bug,
    title: "Acaros",
    description: "Milhoes de acaros microscopicos vivem nos estofados, causando alergias e problemas respiratorios.",
  },
  {
    icon: Droplets,
    title: "Bacterias",
    description: "Bacterias nocivas se acumulam nas fibras, podendo causar infeccoes e doencas de pele.",
  },
  {
    icon: Wind,
    title: "Odores",
    description: "Cheiros impregnados de suor, alimentos e pets que nao saem com limpeza superficial.",
  },
  {
    icon: Eye,
    title: "Manchas Invisiveis",
    description: "Sujeiras profundas que voce nao ve, mas que deterioram o tecido e afetam a saude.",
  },
]

const services = [
  { title: "Sofas", description: "Higienizacao profunda para sofas de todos os tamanhos e tecidos.", image: "/images/service-sofa.jpg" },
  { title: "Colchoes", description: "Elimine acaros e bacterias do lugar onde voce dorme.", image: "/images/service-mattress.jpg" },
  { title: "Poltronas", description: "Limpeza detalhada para poltronas e cadeiras estofadas.", image: "/images/service-armchair.jpg" },
  { title: "Bancos de Carro", description: "Interior automotivo limpo e higienizado.", image: "/images/service-car.jpg" },
  { title: "Protecao de Tecidos", description: "Impermeabilizacao que protege contra manchas futuras.", image: "/images/service-protection.jpg" },
]

const processSteps = [
  {
    icon: Search,
    title: "Inspeção",
    description: "Avaliamos o estado do estofado e identificamos manchas e sujeiras.",
  },
  {
    icon: Sparkles,
    title: "Limpeza Profunda",
    description: "Equipamentos profissionais e produtos de alta qualidade.",
  },
  {
    icon: Timer,
    title: "Secagem Rápida",
    description: "Em poucas horas seu estofado está pronto para uso.",
  },
]

const trustItems = [
  { icon: ShieldCheck, label: "Produtos certificados" },
  { icon: Zap, label: "Atendimento rapido" },
  { icon: Award, label: "Garantia de qualidade" },
  { icon: MapPin, label: "Atendimento a domicílio" },
]

const testimonials = [
  {
    name: "Ana Paula",
    neighborhood: "Centro, Porto Seguro",
    image: "/images/testimonial-1.jpg",
    testimonial: "Meu sofa ficou como novo! O atendimento foi excelente e o resultado superou minhas expectativas. Recomendo demais!",
  },
  {
    name: "Carlos Eduardo",
    neighborhood: "Taperapua, Porto Seguro",
    image: "/images/testimonial-2.jpg",
    testimonial: "Profissionais muito competentes. Limparam meus colchoes e o cheiro de novo ficou incrivel. Minha familia dormiu muito melhor!",
  },
  {
    name: "Dona Maria",
    neighborhood: "Arraial d'Ajuda",
    image: "/images/testimonial-3.jpg",
    testimonial: "Servico impecavel! Vieram ate minha casa e fizeram tudo com muito cuidado. As manchas antigas sumiram completamente!",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-16 lg:pb-0">
      <Header />

      {/* Hero Section */}
      <section id="sobre" className="relative pt-16 md:pt-20">
        <div className="relative bg-gradient-to-br from-sky-50 via-background to-cyan-50/30">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Hero Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="mb-6">
  <Image
    src="/images/logo.png"
    alt="RENOVE CLEAN - Higienizacao de Estofados"
    width={160}
    height={160}
    className="h-16 md:h-20 w-auto object-contain mx-auto lg:mx-0"
    priority
  />
</div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-4">
                  Seu sofa pode estar{" "}
                  <span className="text-primary">mais sujo</span>{" "}
                  do que parece
                </h1>

                <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 text-pretty">
                  Limpeza profissional para eliminar sujeira, odores e acaros. Agende sua higienizacao agora mesmo.
                </p>

                {/* CTA - Immediately visible on mobile */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px]"
                >
                  <MessageCircle className="w-6 h-6" />
                  Agende sua higienizacao agora mesmo
                </a>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full max-w-lg lg:max-w-none"
              >
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-sofa.jpg"
                    alt="Sofa antes e depois da higienizacao profissional RENOVE CLEAN"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip / Social Proof */}
      <section className="py-6 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {[
              { value: "+2.000", label: "itens higienizados" },
              { value: "+5", label: "anos de experiencia" },
              { value: "100%", label: "atendimento a domicilio" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              O que esta dentro do seu sofa agora?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Voce pode nao ver, mas seu estofado acumula muito mais do que poeira.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awarenessItems.map((item, index) => (
              <GlassCard key={item.title} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Nossos Servicos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Higienizacao profissional para todos os tipos de estofados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Como Funciona
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e eficiente para resultados incriveis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-9 h-9 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A satisfacao dos nossos clientes e nossa maior recompensa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contato" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-3xl p-8 md:p-12 text-center shadow-lg"
          >
            <div className="mb-6">
              <Image
                src="/images/sofalimpofooter.jpeg"
                alt="RENOVE CLEAN"
                width={80}
                height={30}
                className="h-10 object-contain mx-auto"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
              Pronto para renovar seus estofados?
            </h2>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Entre em contato agora pelo WhatsApp e solicite seu orcamento gratuito. Atendemos Porto Seguro e regiao.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px]"
            >
              <MessageCircle className="w-6 h-6" />
              Falar no WhatsApp
            </a>

            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(73) 98813-1241</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="RENOVE CLEAN"
                width={80}
                height={32}
                className="h-6 object-contain brightness-200"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="flex items-center gap-6 text-sm text-background/60">
              <a href="#sobre" className="hover:text-background transition-colors">Sobre</a>
              <a href="#servicos" className="hover:text-background transition-colors">Servicos</a>
              <a href="#depoimentos" className="hover:text-background transition-colors">Depoimentos</a>
              <a href="#contato" className="hover:text-background transition-colors">Contato</a>
            </div>
            <div className="text-sm text-background/50">
              Porto Seguro, BA
            </div>
          </div>
          <div className="border-t border-background/10 mt-6 pt-6 text-center text-xs text-background/40">
            &copy; {new Date().getFullYear()} RENOVE CLEAN. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  )
}
