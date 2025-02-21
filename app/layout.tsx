import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Shrvan | Portfolio",
  description: "Showcasing my projects, skills, and experience in web development.",
  metadataBase: new URL("https://01shrvan.tech"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} ${plexSans.className}`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
