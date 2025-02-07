"use client"

import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "./components/Navbar"
import type React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pt-24 min-h-screen"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  )
}
