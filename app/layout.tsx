import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohamed Aslam | Full Stack Developer",
  description: "Portfolio of Mohamed Aslam, a Full Stack Developer specializing in React.js and Node.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-gray-100 antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'