import Image from "next/image"
import Link from "next/link"
import type { ProjectsCard } from "../lib/interface"
import { client } from "../lib/sanity"
import { ExternalLink } from "lucide-react"

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
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
                {/* Header */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-xl font-bold text-black mb-4 md:mb-0">01SHRVAN</h1>
                    <div className="flex gap-6">
                        <Link href="/" className="text-black hover:text-black/70 transition-colors">
                            HOME
                        </Link>
                        <Link href="/projects" className="text-black hover:text-black/70 font-medium transition-colors">
                            PROJECTS
                        </Link>
                        <Link href="/gallery" className="text-black hover:text-black/70 transition-colors">
                            GALLERY
                        </Link>
                    </div>
                </div>

                {/* Projects Header */}
                <div className="col-span-full bg-[#e6dfd1] rounded-xl p-6">
                    <h1 className="text-3xl font-bold text-black mb-2">Work!</h1>
                    <p className="text-lg text-black/70">Exploring innovative solutions and creative technologies</p>
                </div>

                {/* Projects Grid */}
                <div className="col-span-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((project) => (
                        <div
                            key={project._id}
                            className="bg-[#e6dfd1] rounded-xl overflow-hidden shadow-lg transform transition-all 
                                        duration-300 hover:-translate-y-2 hover:shadow-xl group"
                        >
                            {/* Project Image */}
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={project.imageUrl || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <Link 
                                    href={project.link} 
                                    target="_blank"
                                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 
                                               group-hover:opacity-100 transition-all duration-300"
                                    aria-label="External Link"
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-medium text-black">{project.title}</h2>
                                </div>
                                
                                <p className="text-black/70 line-clamp-3 mb-4">{project.description}</p>
                                
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs bg-black/10 text-black rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State Handling */}
                {data.length === 0 && (
                    <div className="col-span-full bg-[#e6dfd1] rounded-xl p-12 text-center">
                        <p className="text-black/70 text-xl">No projects to display at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    )
}