"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "GuestBook", href: "/guestbook" },
  { name: "Projects", href: "/projects" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-40 px-4 py-4">
      <nav
        className={`relative rounded-2xl backdrop-blur-lg transition-all duration-500 
        ${
          isScrolled ? "bg-background/70 shadow-lg shadow-foreground/[0.03] border border-border" : "bg-background/50"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex h-16 items-center justify-between px-4">
            <Link href="/" className="relative z-10">
              <motion.span
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                01<span className="text-primary">shrvan</span>
              </motion.span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    className={`relative text-sm font-medium ${
                      pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                        layoutId="navbar-underline"
                        transition={{ type: "spring", bounce: 0.25 }}
                      />
                    )}
                  </motion.span>
                </Link>
              ))}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="mailto:benkeshrvan@gmail.com"
                  className="relative inline-flex h-9 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative z-10 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-24 rounded-2xl bg-background/70 backdrop-blur-lg shadow-lg border border-border p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium ${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="mailto:benkeshrvan@gmail.com"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Contact Me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

