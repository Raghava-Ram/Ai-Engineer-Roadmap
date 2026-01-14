import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Inter, Geist_Mono, IBM_Plex_Sans as V0_Font_IBM_Plex_Sans, Geist_Mono as V0_Font_Geist_Mono, IBM_Plex_Serif as V0_Font_IBM_Plex_Serif } from 'next/font/google'

// Initialize fonts
const _ibmPlexSans = V0_Font_IBM_Plex_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _ibmPlexSerif = V0_Font_IBM_Plex_Serif({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })

const _inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "AI Engineer Roadmap 2026 | Learn AI, ML & Gen AI",
  description:
    "A comprehensive 8-month roadmap to become an AI Engineer, ML Engineer, or Gen AI Engineer. Free learning resources, interactive checklists, and progress tracking.",
  generator: "v0.app",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "Gen AI", "Roadmap", "Career", "Python", "LLM"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "AI Engineer Roadmap 2026",
    description: "Your complete guide to becoming an AI Engineer in 8 months",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-serif antialiased min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
