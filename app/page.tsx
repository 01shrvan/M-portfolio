import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Instagram, Twitter, Linkedin, Github } from "lucide-react"

export default function Home() {
  // Social media links
  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      username: "@juxt.shrvan",
      link: "https://www.instagram.com/juxt.shrvan?igsh=MW91aW9tcDc5ZnhnYg==",
      icon: Instagram
    },
    {
      id: 2,
      name: "Twitter",
      username: "@01shrvan",
      link: "https://x.com/01shrvan",
      icon: Twitter
    },
    {
      id: 3,
      name: "Linkedin",
      username: "@shrvanbenke",
      link: "https://www.linkedin.com/in/shrvanbenke/",
      icon: Linkedin
    },
    {
      id: 4,
      name: "Github",
      username: "@shrvanbenke",
      link: "https://github.com/shrvanbenke",
      icon: Github
    }
  ]

  // Sample projects with more details
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      description: "Full-stack web application with advanced features",
      link: "#",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Mobile-first responsive design solution",
      link: "#",
      tags: ["Next.js", "Tailwind", "TypeScript"]
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "AI-powered data visualization platform",
      link: "#",
      tags: ["Python", "React", "Machine Learning"]
    }
  ]

  return (
    <main className="min-h-screen bg-black p-4 md:p-6 lg:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="bg-[#e6dfd1] rounded-xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-black mb-4 md:mb-0">01SHRVAN</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="text-black hover:text-black/70 transition-colors">
              PROJECTS
            </Link>
            <Link href="/about" className="text-black hover:text-black/70 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-black hover:text-black/70 transition-colors">
              CONTACT
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {/* Intro and Main Content */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Intro Section */}
            <div className="col-span-full bg-[#e6dfd1] rounded-xl p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Hey, I'm Shrvan</h2>
              <p className="text-xl font-medium text-black/80 mb-6">
                Engineering Seamless & Scalable Digital Experiences
              </p>
              <p className="text-black/70 mb-6">
                Passionate about crafting intuitive, high-performance web applications that merge design precision with
                flawless functionality. Let's build something impactful together!
              </p>
              {/* Social Media Links */}
              <div className="flex flex-wrap items-center gap-4">
                {socialMedia.map((social) => (
                  <Link
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    className="text-black/70 hover:text-black transition-colors"
                    aria-label={`${social.name} Profile`}
                  >
                    <social.icon size={24} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="bg-[#e6dfd1] rounded-xl overflow-hidden">
              <div className="relative aspect-square w-full">
                <Image
                  src="/waiting.png"
                  alt="Profile illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* About Section */}
            <div className="bg-[#e6dfd1] rounded-xl p-6">
              <p className="text-black/80">
                I am a software engineer with a strong passion for crafting efficient, scalable and user-friendly web
                applications. With experience in modern technologies and frameworks, I strive to build intuitive and
                high-performing solutions.
              </p>
            </div>

            {/* Contact Section */}
            <div className="col-span-full bg-[#5c5c4f] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-white/80 mb-2">Have a Question?</h3>
              </div>
              <div className="mt-auto">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Me</h2>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social) => (
                    <Link
                      key={social.id}
                      href={social.link}
                      className="text-white hover:text-white/70"
                    >
                      {social.name.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-[#e6dfd1] rounded-xl p-6 w-full">
            <h2 className="text-xl font-bold text-black mb-4">Projects</h2>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`w-full ${index !== projects.length - 1 ? "border-b border-black/10 pb-4" : ""}`}
                >
                  {index === 0 && (
                    <div className="w-full h-24 bg-black/10 rounded-lg mb-3"></div>
                  )}
                  <Link href={project.link} className="block">
                    <h3 className="text-lg font-medium text-black">{project.name}</h3>
                    <p className="text-black/70 text-sm">{project.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}