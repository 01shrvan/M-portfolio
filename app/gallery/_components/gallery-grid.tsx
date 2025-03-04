"use client"

import Image from "next/image"
import { useState } from "react"
import type { GalleryItem } from "@/app/lib/galleryItem"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { format } from "date-fns"

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="cursor-pointer rounded-lg overflow-hidden bg-black/5 hover:opacity-90 transition-opacity"
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-square relative">
              <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-black">{item.title}</h3>
              <p className="text-sm text-black/70">{item.date ? format(new Date(item.date), "MMMM d, yyyy") : ""}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl bg-[#e6dfd1] text-black">
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
            <DialogDescription className="text-black/70">
              {selectedItem?.date ? format(new Date(selectedItem.date), "MMMM d, yyyy") : ""}
            </DialogDescription>
          </DialogHeader>
          {selectedItem && (
            <div className="grid gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={selectedItem.imageUrl || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              {selectedItem.story && <p className="text-black/80">{selectedItem.story}</p>}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

