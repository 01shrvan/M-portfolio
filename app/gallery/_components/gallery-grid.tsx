"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import type { GalleryItem } from '@/app/lib/galleryItem';
import { GalleryModal } from './gallery-modal';

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

            <GalleryModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                item={selectedItem}
                onNext={handleNextItem}
                onPrev={handlePrevItem}
                hasNext={selectedIndex < items.length - 1}
                hasPrev={selectedIndex > 0}
            />
        </>
    );
}