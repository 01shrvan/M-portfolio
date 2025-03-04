import Image from "next/image"
import type { ProjectsCard } from "../lib/interface"
import { client } from "../lib/sanity"

async function getData() {
    const query = `*[_type == "project"] | order(_createdAt desc) {
        title,
        _id,
        link,
        description,
        tags,
        "imageUrl": image.asset->url
    }`

    const data = await client.fetch(query)
    return data
}

export default async function ProjectsPage() {
    const data: ProjectsCard[] = await getData()

    return (
        <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4">
                {/* Header */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-4 md:p-6 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-black">01SHRVAN</h1>
                    <div className="flex gap-6">
                        <a href="/" className="text-black hover:text-black/70">
                            HOME
                        </a>
                        <a href="/projects" className="text-black hover:text-black/70 font-medium">
                            PROJECTS
                        </a>
                        <a href="/gallery" className="text-black hover:text-black/70">
                            GALLERY
                        </a>
                    </div>
                </div>

                {/* Projects Header */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-6">
                    <h1 className="text-3xl font-bold text-black">Work!</h1>
                    <p className="mt-2 text-lg text-black/70">Check out what I have created</p>
                </div>

                {/* Projects Grid */}
                <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.map((project) => (
                        <a
                            href={project.link}
                            key={project._id}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e6dfd1] rounded-xl overflow-hidden group"
                        >
                            <div className="aspect-video relative">
                                <Image
                                    src={project.imageUrl || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-medium text-black group-hover:underline">{project.title}</h2>
                                <p className="mt-2 text-black/70 line-clamp-3">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm bg-black/10 text-black rounded-md border border-black/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

