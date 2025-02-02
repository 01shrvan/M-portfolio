"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { navigationItems } from "./Navbar"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }

    return () => {
      document.body.style.overflow = "visible"
    }
  }, [isOpen])

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  const itemVariants = {
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { opacity: 0, y: 20, transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClose}
        />
      )}
      <motion.div
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg"
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold text-primary">Menu</span>
        </div>
        <nav className="p-4">
          <motion.ul
            className="space-y-2"
            variants={{ open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          >
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.li key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`group relative flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 ${
                      isActive ? "bg-gray-100 text-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                    onClick={onClose}
                  >
                    <span>{item.name}</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        isActive ? "text-primary" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                    {isActive && (
                      <motion.span
                        className="absolute inset-y-0 left-0 w-1 rounded-full bg-primary"
                        layoutId="activeIndicator"
                      />
                    )}
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
          <motion.div className="mt-8" variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 rounded-full bg-primary text-white text-sm font-medium transition-colors hover:bg-primary/90"
              onClick={onClose}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </nav>
      </motion.div>
    </>
  )
}

