import Link from "next/link"
import { ArrowRight, Mail, Github, Linkedin, Twitter, User, FolderKanban, Newspaper, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import NewsCard from "@/components/news-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-black to-zinc-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white name-style">
                Luca Biordi
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                VP of Technology | Innovation Leader | Tech Enthusiast
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link href="/about">
                <Button className="bg-transparent backdrop-blur-sm hover:bg-orange-500/90 text-white border border-orange-500/30 rounded-md transition-all duration-300 ease-in-out px-6 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:border-orange-500/80 hover:scale-105 modern-button-hover particles-button">
                  <User className="w-4 h-4 mr-2" />
                  About Me
                </Button>
              </Link>
              <Link href="/projects">
                <Button className="bg-transparent backdrop-blur-sm hover:bg-orange-500/90 text-white border border-orange-500/30 rounded-md transition-all duration-300 ease-in-out px-6 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:border-orange-500/80 hover:scale-105 modern-button-hover particles-button">
                  <FolderKanban className="w-4 h-4 mr-2" />
                  My Projects
                </Button>
              </Link>
              <Link href="/news">
                <Button className="bg-transparent backdrop-blur-sm hover:bg-orange-500/90 text-white border border-orange-500/30 rounded-md transition-all duration-300 ease-in-out px-6 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:border-orange-500/80 hover:scale-105 modern-button-hover particles-button">
                  <Newspaper className="w-4 h-4 mr-2" />
                  News
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent backdrop-blur-sm hover:bg-orange-500/90 text-white border border-orange-500/30 rounded-md transition-all duration-300 ease-in-out px-6 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:border-orange-500/80 hover:scale-105 modern-button-hover particles-button">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/luca-biordi-6706096a/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:contact@example.com">
                <Button size="icon" variant="ghost" className="text-white hover:text-orange-500 hover:bg-white/10">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="text-muted-foreground md:text-xl">
                As a VP of Technology with over 15 years of experience, I've led digital transformation initiatives and
                built high-performing tech teams across multiple industries.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="inline-flex h-10 items-center justify-center bg-orange-500 hover:bg-orange-600">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cv">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
                  >
                    View CV
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="overflow-hidden rounded-lg bg-black h-[350px] w-full">
                <img alt="Profile" className="object-cover w-full h-full" src="/placeholder.svg?height=350&width=500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                A selection of my most impactful technology initiatives and projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <ProjectCard
              title="Enterprise AI Platform"
              description="Led the development of an AI-powered analytics platform that increased operational efficiency by 35%."
              image="/placeholder.svg?height=200&width=300"
              tags={["AI", "Machine Learning", "Big Data"]}
              link="/projects/enterprise-ai"
            />
            <ProjectCard
              title="Cloud Migration Strategy"
              description="Designed and implemented a cloud migration strategy that reduced infrastructure costs by 40%."
              image="/placeholder.svg?height=200&width=300"
              tags={["Cloud", "AWS", "Infrastructure"]}
              link="/projects/cloud-migration"
            />
            <ProjectCard
              title="Digital Transformation"
              description="Spearheaded a company-wide digital transformation initiative that modernized legacy systems."
              image="/placeholder.svg?height=200&width=300"
              tags={["Digital Transformation", "Legacy Systems", "Agile"]}
              link="/projects/digital-transformation"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center border-orange-500 text-orange-500 hover:bg-orange-500/10"
              >
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay updated with the latest in technology, music, gaming, and sports.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <NewsCard
              title="The Future of AI in Enterprise"
              excerpt="How artificial intelligence is reshaping business operations and decision-making processes."
              category="Tech"
              date="April 2, 2025"
              image="/placeholder.svg?height=150&width=250"
              link="/news/ai-enterprise"
            />
            <NewsCard
              title="New Album Releases This Month"
              excerpt="A roundup of the most anticipated music albums dropping this month across all genres."
              category="Music"
              date="April 1, 2025"
              image="/placeholder.svg?height=150&width=250"
              link="/news/album-releases"
            />
            <NewsCard
              title="Next-Gen Gaming Consoles Review"
              excerpt="An in-depth comparison of the latest gaming consoles and their technological capabilities."
              category="Gaming"
              date="March 30, 2025"
              image="/placeholder.svg?height=150&width=250"
              link="/news/gaming-consoles"
            />
            <NewsCard
              title="Major League Playoffs Preview"
              excerpt="Analysis and predictions for the upcoming major league playoffs and championship series."
              category="Sports"
              date="March 28, 2025"
              image="/placeholder.svg?height=150&width=250"
              link="/news/playoffs-preview"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/news">
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
              >
                Browse All News <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                Interested in collaborating or discussing technology trends? Reach out to me.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">Contact Me</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

