"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '@/app/lib/galleryItem';

interface GalleryGridProps {
    items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleItemClick = (item: GalleryItem, index: number) => {
        setSelectedItem(item);
        setSelectedIndex(index);
    };

    const handleNextItem = () => {
        if (selectedIndex < items.length - 1) {
            setSelectedItem(items[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrevItem = () => {
        if (selectedIndex > 0) {
            setSelectedItem(items[selectedIndex - 1]);
            setSelectedIndex(selectedIndex - 1);
        }
    };

    return (
        <>
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {items.map((item, index) => {
                    const aspectRatio = item.imageAspect || 1;
                    return (
                        <div
                            key={item._id}
                            className="break-inside-avoid group cursor-pointer"
                            onClick={() => handleItemClick(item, index)}
                        >
                            <div
                                className="relative overflow-hidden rounded-xl"
                                style={{
                                    paddingBottom: `${(1 / aspectRatio) * 100}%`
                                }}
                            >
                                <Image
                                    src={item.imageUrl}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-all duration-300 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 p-4 w-full">
                                        <h3 className="text-white font-medium text-lg line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/80 text-sm mt-1">
                                            {format(new Date(item.date), 'MMMM d, yyyy')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Dialog
                open={!!selectedItem}
                onOpenChange={(open) => !open && setSelectedItem(null)}
            >
                <DialogContent className="max-w-6xl w-[95vw] p-0 h-[90vh] overflow-hidden">
                    <div className="grid md:grid-cols-2 h-full">
                        <div className="relative bg-black flex items-center">
                            {selectedIndex > 0 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handlePrevItem();
                                    }}
                                    className="absolute left-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            )}
                            <div className="relative w-full h-full">
                                {selectedItem && (
                                    <Image
                                        src={selectedItem.imageUrl}
                                        alt={selectedItem.title}
                                        fill
                                        className="object-contain"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                )}
                            </div>
                            {selectedIndex < items.length - 1 && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleNextItem();
                                    }}
                                    className="absolute right-4 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            )}
                        </div>
                        <div className="p-6 overflow-y-auto bg-background">
                            {selectedItem && (
                                <>
                                    <div className="flex items-start justify-between">
                                        <h2 className="text-2xl font-semibold">{selectedItem.title}</h2>
                                        <button
                                            onClick={() => setSelectedItem(null)}
                                            className="p-2 hover:bg-secondary rounded-full"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">
                                            {format(new Date(selectedItem.date), "MMMM d, yyyy")}
                                        </span>
                                    </div>
                                    <div className="mt-6 prose dark:prose-invert max-w-none">
                                        <p className="leading-relaxed whitespace-pre-line">
                                            {selectedItem.story}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}