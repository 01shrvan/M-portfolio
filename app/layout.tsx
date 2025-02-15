import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shrvan | Portfolio",
  description: "Showcasing my projects, skills, and experience in web development.",
  metadataBase: new URL("https://01shrvan.tech"),
  keywords: ["web development", "portfolio", "frontend developer", "Shrvan"],
  authors: [{ name: "Shrvan" }],
  creator: "Shrvan",
  publisher: "Shrvan",
  alternates: {
    canonical: "https://01shrvan.tech",
  },
  openGraph: {
    title: "Shrvan | Portfolio",
    description: "Explore my web development journey, projects, and technical expertise.",
    type: "website",
    url: "https://01shrvan.tech",
    siteName: "Shrvan Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://01shrvan.tech/waiting.png",
        width: 800,
        height: 600,
        alt: "Shrvan Portfolio - Web Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrvan | Portfolio",
    description: "Explore my web development journey, projects, and technical expertise.",
    images: {
      url: "https://01shrvan.tech/waiting.png",
      alt: "Shrvan Portfolio - Web Developer",
      width: 800,
      height: 600,
    },
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cpath d="M20 30C20 20 30 10 40 10H60C70 10 80 20 80 30C80 40 70 50 60 50H40C30 50 20 60 20 70C20 80 30 90 40 90H60C70 90 80 80 80 70" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/%3E%3C/svg%3E',
        type: "image/svg+xml",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

