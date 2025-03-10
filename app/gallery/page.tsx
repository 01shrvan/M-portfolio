import { client } from "../lib/sanity"
import type { GalleryItem } from "@/app/lib/galleryItem"
import { GalleryGrid } from "./_components/gallery-grid"
import Link from "next/link"

async function getData() {
    const query = `*[_type == "gallery"] | order(date desc) {
    _id,
    title,
    story,
    date,
    _createdAt,
    "imageUrl": image.asset->url,
    "imageAspect": image.asset->metadata.dimensions.aspectRatio
  }`

    const data = await client.fetch(query)
    return data
}

export default async function GalleryPage() {
    const data: GalleryItem[] = await getData()

    return (
        <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4">
                {/* Header */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-xl font-bold text-black mb-4 md:mb-0">01SHRVAN</h1>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/" className="text-black hover:text-black/70 transition-colors">
                            HOME
                        </Link>
                        <Link href="/projects" className="text-black hover:text-black/70 transition-colors">
                            PROJECTS
                        </Link>
                        <Link href="/gallery" className="text-black hover:text-black/70 font-medium transition-colors">
                            GALLERY
                        </Link>
                    </div>
                </div>

                {/* Gallery Header */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-6">
                    <h1 className="text-3xl font-bold text-black">Gallery!</h1>
                    <p className="mt-2 text-lg text-black/70">A collection of moments and memories</p>
                </div>

                {/* Gallery Grid */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-6">
                    <GalleryGrid items={data} />
                </div>
            </div>
        </div>
    )
}