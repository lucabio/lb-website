import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Mail } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-8">
          <div className="overflow-hidden rounded-lg">
            <img
              alt="Luca Biordi"
              className="aspect-square object-cover"
              height={400}
              src="/placeholder.svg?height=400&width=400"
              width={400}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-2">
              <p className="text-muted-foreground">Email: lucabio84@gmail.com</p>
              <p className="text-muted-foreground">Location: Dubai, UAE</p>
              <p className="text-muted-foreground">LinkedIn: https://www.linkedin.com/in/luca-biordi-6706096a/</p>
            </div>
            <div className="flex gap-2">
              <Link href="/cv">
                <Button
                  className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20"
                  variant="outline"
                >
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a Vice President of Technology with over 15 years of experience in the tech industry, I've dedicated
                my career to driving innovation and digital transformation across various sectors.
              </p>
              <p>
                My expertise spans enterprise architecture, cloud computing, artificial intelligence, and building
                high-performing technology teams. I'm passionate about leveraging cutting-edge technologies to solve
                complex business challenges and create value.
              </p>
              <p>
                Throughout my career, I've successfully led numerous digital transformation initiatives, implemented
                enterprise-wide technology strategies, and built scalable technology platforms that have driven
                significant business growth and operational efficiencies.
              </p>
              <p>
                I believe in continuous learning and staying at the forefront of technological advancements. When I'm
                not working, I enjoy contributing to open-source projects, mentoring aspiring technologists, and
                exploring the latest developments in the tech world.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-orange-500/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Technical Leadership</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Enterprise Architecture</li>
                    <li>Technology Strategy</li>
                    <li>Digital Transformation</li>
                    <li>IT Governance</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-orange-500/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Cloud & Infrastructure</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Cloud Architecture (AWS, Azure, GCP)</li>
                    <li>Infrastructure as Code</li>
                    <li>DevOps & CI/CD</li>
                    <li>Containerization & Orchestration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-orange-500/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Data & AI</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Data Strategy & Governance</li>
                    <li>Machine Learning Operations</li>
                    <li>Predictive Analytics</li>
                    <li>Natural Language Processing</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-orange-500/20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Leadership</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Team Building & Mentoring</li>
                    <li>Agile Methodologies</li>
                    <li>Cross-functional Collaboration</li>
                    <li>Strategic Planning</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Master of Science in Computer Science</h3>
                <p className="text-muted-foreground">Stanford University, 2010</p>
              </div>
              <div>
                <h3 className="font-bold">Bachelor of Science in Software Engineering</h3>
                <p className="text-muted-foreground">Massachusetts Institute of Technology, 2008</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Certifications</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>AWS Certified Solutions Architect - Professional</li>
                  <li>Google Cloud Professional Cloud Architect</li>
                  <li>Microsoft Certified: Azure Solutions Architect Expert</li>
                  <li>Certified Information Systems Security Professional (CISSP)</li>
                  <li>Project Management Professional (PMP)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

