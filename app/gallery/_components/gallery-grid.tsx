"use client"

import Image from "next/image"
import { useState } from "react"
import type { GalleryItem } from "@/app/lib/galleryItem"
import { GalleryModal } from "./gallery-modal"
import { format } from "date-fns"

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setSelectedItem(items[(currentIndex + 1) % items.length])
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setSelectedItem(items[(currentIndex - 1 + items.length) % items.length])
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={item._id}
            className="cursor-pointer rounded-lg overflow-hidden bg-black/5 
                       hover:opacity-90 transition-all duration-300 
                       transform hover:-translate-y-2 hover:shadow-lg"
            onClick={() => {
              setSelectedItem(item)
              setCurrentIndex(index)
            }}
          >
            <div className="aspect-square relative">
              <Image 
                src={item.imageUrl || "/placeholder.svg"} 
                alt={item.title} 
                fill 
                className="object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <div className="p-3 bg-white/5">
              <h3 className="font-medium text-black truncate">{item.title}</h3>
              <p className="text-sm text-black/70">
                {item.date ? format(new Date(item.date), "MMMM d, yyyy") : ""}
              </p>
            </div>
          </div>
        ))}
      </div>

      <GalleryModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={items.length > 1}
        hasPrev={items.length > 1}
      />
    </>
  )
}