"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { navigationItems } from "./Navbar"
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'

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

    return (
        <>
            <div
                className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b">
                    <span className="text-lg font-semibold">Menu</span>
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`group relative flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 ${isActive
                                                ? "bg-gray-100 text-primary"
                                                : "text-muted-foreground hover:text-primary"
                                            }`}
                                        onClick={onClose}
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight
                                            className={`h-4 w-4 transition-transform ${isActive ? "text-primary" : "opacity-0 group-hover:opacity-100"
                                                }`}
                                        />
                                        {isActive && (
                                            <span
                                                className="absolute inset-y-0 left-0 w-1 rounded-full bg-primary"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="mt-8">
                        <Button
                            className="w-full font-medium hover:bg-primary/90"
                            onClick={onClose}
                        >
                            Contact Me
                        </Button>
                    </div>
                </nav>
            </div>
        </>
    )
}