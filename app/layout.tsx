import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Shrvan | Portfolio",
  description: "Showcasing my projects, skills, and experience in web development.",
  metadataBase: new URL('https://01shrvan.tech'),
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
        height: 418,
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
      height: 418,
    },
  },
};

const SMonogram = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 30C20 20 30 10 40 10H60C70 10 80 20 80 30C80 40 70 50 60 50H40C30 50 20 60 20 70C20 80 30 90 40 90H60C70 90 80 80 80 70"
      stroke="black"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 30C20 20 30 10 40 10H60C70 10 80 20 80 30C80 40 70 50 60 50H40C30 50 20 60 20 70C20 80 30 90 40 90H60C70 90 80 80 80 70' stroke='black' stroke-width='8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
        />
      </head>
      <body className={`${inter.className} ${plexSans.className}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
