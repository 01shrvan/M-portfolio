"use client"

import React from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { format } from 'date-fns'
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '@/app/lib/galleryItem'

interface GalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: GalleryItem | null;
    onNext?: () => void;
    onPrev?: () => void;
    hasNext?: boolean;
    hasPrev?: boolean;
}

export function GalleryModal({
    isOpen,
    onClose,
    item,
    onNext,
    onPrev,
    hasNext,
    hasPrev
}: GalleryModalProps) {
    if (!item) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-[#e6dfd1]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 rounded-full 
                               bg-black/10 hover:bg-black/20 transition-colors"
                >
                    <X className="w-6 h-6 text-black" />
                </button>

                <div className="grid md:grid-cols-2 h-full">
                    {/* Image Section */}
                    <div className="relative bg-black/10 flex items-center justify-center h-[40vh] md:h-full">
                        {hasPrev && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPrev?.();
                                }}
                                className="absolute left-4 z-10 p-2 rounded-full 
                                           bg-black/10 text-black hover:bg-black/20 
                                           transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        )}
                        <div className="relative w-full h-full max-w-full max-h-full">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {hasNext && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onNext?.();
                                }}
                                className="absolute right-4 z-10 p-2 rounded-full 
                                           bg-black/10 text-black hover:bg-black/20 
                                           transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}
                    </div>

                    {/* Description Section */}
                    <div className="relative h-[50vh] md:h-full overflow-y-auto">
                        <div className="p-6 space-y-4">
                            <h2 className="text-2xl font-semibold text-black">{item.title}</h2>
                            <div className="flex items-center gap-2 text-black/70">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">
                                    {format(new Date(item.date), "MMMM d, yyyy")}
                                </span>
                            </div>
                            {item.story && (
                                <p className="text-black/80 leading-relaxed whitespace-pre-line">
                                    {item.story}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}