import { client } from "../lib/sanity"
import type { GalleryItem } from "@/app/lib/galleryItem"
import { GalleryGrid } from "./_components/gallery-grid"

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
        <div className="min-h-screen bg-background">
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-8 md:py-12">
                    <h1 className="text-4xl font-bold tracking-tight">Gallery</h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        A collection of moments and memories
                    </p>
                </div>
                <GalleryGrid items={data} />
            </section>
        </div>
    )
}