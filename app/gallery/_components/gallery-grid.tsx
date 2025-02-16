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
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                {items.map((item, index) => (
                    <div
                        key={item._id}
                        className="relative break-inside-avoid block w-full mb-4 cursor-pointer group"
                        onClick={() => handleItemClick(item, index)}
                    >
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={800}
                                height={item.imageAspect ? 800 / item.imageAspect : 800}
                                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
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
                ))}
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