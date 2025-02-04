// app/metadata.ts
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shrvan | Web Developer & Designer",
  description: "Building sleek, functional websites with a focus on design and performance.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.01shrvan.tech/",
    siteName: "Shrvan's Portfolio",
    title: "Shrvan | Web Developer & Designer",
    description: "Clean code, smooth interfaces, and well-crafted digital experiences.",
    images: [
      {
        url: "https://www.yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shrvan's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shrvan | Web Developer & Designer",
    description: "Minimal, fast, and functional web solutions.",
    images: ["https://www.yourdomain.com/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  keywords: ["web development", "portfolio", "React", "Next.js", "UI/UX", "frontend"],
  authors: [{ name: "Shrvan", url: "https://www.01shrvan.tech/" }],
  creator: "Shrvan",
  publisher: "Shrvan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
