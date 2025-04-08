import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ExternalLink } from "lucide-react"

export default function CVPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Curriculum Vitae</h1>
            <p className="text-muted-foreground md:text-xl mt-2">
              My professional experience, education, and achievements
            </p>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Professional Experience</h2>

          <Card className="border-orange-500/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Vice President of Technology</CardTitle>
                  <CardDescription>TechCorp Global</CardDescription>
                </div>
                <CardDescription className="md:text-right mt-2 md:mt-0">2020 - Present</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Lead a team of 50+ technology professionals across engineering, data science, and infrastructure.
                </li>
                <li>
                  Developed and executed a 3-year technology roadmap that aligned with business objectives and delivered
                  $15M in cost savings.
                </li>
                <li>
                  Spearheaded the company's digital transformation initiative, modernizing legacy systems and
                  implementing cloud-native solutions.
                </li>
                <li>
                  Established an AI Center of Excellence that delivered multiple high-impact machine learning solutions
                  across the organization.
                </li>
                <li>
                  Implemented a robust cybersecurity framework that enhanced data protection and achieved regulatory
                  compliance.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Director of Engineering</CardTitle>
                  <CardDescription>InnovateTech Solutions</CardDescription>
                </div>
                <CardDescription className="md:text-right mt-2 md:mt-0">2016 - 2020</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Led the engineering department of 30 engineers, architects, and QA specialists.</li>
                <li>
                  Managed the successful migration from monolithic architecture to microservices, improving scalability
                  by 200%.
                </li>
                <li>
                  Implemented DevOps practices and CI/CD pipelines that reduced deployment time from weeks to hours.
                </li>
                <li>
                  Designed and built a cloud-native data platform that unified data sources and enabled advanced
                  analytics capabilities.
                </li>
                <li>
                  Established agile development practices that increased team velocity by 40% and improved software
                  quality.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Senior Solutions Architect</CardTitle>
                  <CardDescription>CloudSphere Inc.</CardDescription>
                </div>
                <CardDescription className="md:text-right mt-2 md:mt-0">2013 - 2016</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Designed and implemented cloud solutions for enterprise clients across various industries.</li>
                <li>
                  Led the architecture and implementation of a multi-region, highly available infrastructure on AWS for
                  a Fortune 500 client.
                </li>
                <li>
                  Developed cloud migration strategies that reduced infrastructure costs by an average of 35% for
                  clients.
                </li>
                <li>Created reference architectures and best practices documentation for cloud adoption.</li>
                <li>Mentored junior architects and engineers on cloud technologies and architectural patterns.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Education</h2>

          <Card className="border-orange-500/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Master of Science in Computer Science</CardTitle>
                  <CardDescription>Stanford University</CardDescription>
                </div>
                <CardDescription className="md:text-right mt-2 md:mt-0">2010</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Specialized in Artificial Intelligence and Distributed Systems. Thesis on "Scalable Machine Learning
                Architectures for Real-time Data Processing."
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <CardTitle>Bachelor of Science in Software Engineering</CardTitle>
                  <CardDescription>Massachusetts Institute of Technology</CardDescription>
                </div>
                <CardDescription className="md:text-right mt-2 md:mt-0">2008</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Graduated with honors. Participated in the Undergraduate Research Opportunities Program, focusing on
                distributed computing systems.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-lg">AWS Certified Solutions Architect - Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Amazon Web Services</p>
                  <p className="text-muted-foreground">2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Google Cloud Professional Cloud Architect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Google Cloud</p>
                  <p className="text-muted-foreground">2022</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Microsoft Certified: Azure Solutions Architect Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Microsoft</p>
                  <p className="text-muted-foreground">2021</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Certified Information Systems Security Professional (CISSP)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">ISC²</p>
                  <p className="text-muted-foreground">2020</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-500/20">
              <CardHeader>
                <CardTitle className="text-lg">Project Management Professional (PMP)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Project Management Institute</p>
                  <p className="text-muted-foreground">2019</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Publications & Speaking</h2>

          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-medium">"Enterprise AI: From Experimentation to Production"</span>
                  <span className="text-muted-foreground">Journal of Enterprise Technology, 2023</span>
                  <Link href="#" className="text-orange-500 hover:underline flex items-center mt-1">
                    <ExternalLink className="h-4 w-4 mr-1" /> Read Publication
                  </Link>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">"Cloud Migration Strategies for Legacy Systems"</span>
                  <span className="text-muted-foreground">Cloud Computing Magazine, 2021</span>
                  <Link href="#" className="text-orange-500 hover:underline flex items-center mt-1">
                    <ExternalLink className="h-4 w-4 mr-1" /> Read Publication
                  </Link>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">
                    "Scalable Machine Learning Architectures for Real-time Data Processing"
                  </span>
                  <span className="text-muted-foreground">Stanford University Thesis, 2010</span>
                  <Link href="#" className="text-orange-500 hover:underline flex items-center mt-1">
                    <ExternalLink className="h-4 w-4 mr-1" /> Read Publication
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle>Conference Speaking</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-medium">"The Future of Enterprise AI"</span>
                  <span className="text-muted-foreground">TechLeaders Summit, 2023</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">"Building Resilient Cloud Architectures"</span>
                  <span className="text-muted-foreground">Cloud Computing Conference, 2022</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-medium">"Digital Transformation: Beyond the Buzzword"</span>
                  <span className="text-muted-foreground">Enterprise Technology Forum, 2021</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

