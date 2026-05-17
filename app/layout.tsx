import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RENOVE CLEAN | Higienização Profissional de Estofados',
  description: 'Serviço premium de higienização de sofás, colchões, poltronas e bancos de carro em Porto Seguro. +2.000 itens limpos, +5 anos de experiência. Atendimento a domicilio.',
  keywords: ['higienizacao de sofa', 'limpeza de colchao', 'limpeza de estofados', 'Porto Seguro', 'RENOVE CLEAN'],
  authors: [{ name: 'RENOVE CLEAN' }],
  openGraph: {
    title: 'RENOVE CLEAN | Higienizacao Profissional de Estofados',
    description: 'Seu sofa pode estar mais sujo do que parece. Limpeza profissional para eliminar sujeira, odores e acaros.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background light" data-theme="light">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
