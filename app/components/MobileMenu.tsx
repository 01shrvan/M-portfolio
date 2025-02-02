// "use client"

// import { useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { navigationItems } from "./Navbar"

// interface MobileMenuProps {
//   isOpen: boolean
//   onClose: () => void
// }

// export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
//   const pathname = usePathname()

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "visible"
//     }

//     return () => {
//       document.body.style.overflow = "visible"
//     }
//   }, [isOpen])

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
//       <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gray-100 p-6 shadow-lg">
//         <div className="flex items-center justify-between mb-8">
//           <span className="text-lg font-semibold">Menu</span>
//           <Button variant="ghost" size="icon" onClick={onClose}>
//             <X className="h-5 w-5" />
//             <span className="sr-only">Close menu</span>
//           </Button>
//         </div>
//         <nav>
//           <ul className="space-y-4">
//             {navigationItems.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={`block py-2 text-lg font-medium transition-colors hover:text-primary ${
//                     pathname === item.href ? "text-primary" : "text-muted-foreground"
//                   }`}
//                   onClick={onClose}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-8">
//             <Button className="w-full" onClick={onClose}>
//               Contact Me
//             </Button>
//           </div>
//         </nav>
//       </div>
//     </div>
//   )
// }

