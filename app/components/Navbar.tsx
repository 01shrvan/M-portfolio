"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sidebar } from "./Sidebar"

export const navigationItems = [
  { name: "Home", href: "/" },
  { name: "GuestBook", href: "/guestbook" },
  { name: "Projects", href: "/projects" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-4 mt-4">
        <nav className={`rounded-full bg-gray-100 transition-shadow ${isScrolled ? "shadow-md" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">
                  .<span className="text-primary">shrvan</span>
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button variant="outline" size="sm">
                  Contact Me
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative w-10 h-10 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <div className="absolute w-5 transform transition-all duration-300 ease-in-out">
                  <span
                    className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                      isSidebarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </Button>
            </div>
          </div>
        </nav>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  )
}

