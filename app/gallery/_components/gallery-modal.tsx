"use client"

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '@/app/lib/galleryItem';

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
            <DialogContent className="max-w-6xl w-[95vw] p-0 h-[90vh] overflow-hidden">
                <div className="grid md:grid-cols-2 h-full">
                    <div className="relative bg-black flex items-center">
                        {hasPrev && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onPrev?.();
                                }}
                                className="absolute left-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        )}
                        <div className="relative w-full h-full">
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
                                className="absolute right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                    <div className="p-6 overflow-y-auto bg-background">
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <div className="flex items-center gap-2 mt-3 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">
                                {format(new Date(item.date), "MMMM d, yyyy")}
                            </span>
                        </div>
                        <div className="mt-6 prose dark:prose-invert max-w-none">
                            <p className="leading-relaxed whitespace-pre-line">
                                {item.story}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}   