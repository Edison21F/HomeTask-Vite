import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rock&Reilly's Ecuador",
  description: "Bar Restaurant Rock&Reilly's Ecuador",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Analytics/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

