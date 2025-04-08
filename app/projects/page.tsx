import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Enterprise AI Platform",
      description:
        "Led the development of an AI-powered analytics platform that increased operational efficiency by 35%.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["AI", "Machine Learning", "Big Data"],
      link: "/projects/enterprise-ai",
      category: "AI & Machine Learning",
    },
    {
      title: "Cloud Migration Strategy",
      description: "Designed and implemented a cloud migration strategy that reduced infrastructure costs by 40%.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Cloud", "AWS", "Infrastructure"],
      link: "/projects/cloud-migration",
      category: "Cloud & Infrastructure",
    },
    {
      title: "Digital Transformation",
      description: "Spearheaded a company-wide digital transformation initiative that modernized legacy systems.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Digital Transformation", "Legacy Systems", "Agile"],
      link: "/projects/digital-transformation",
      category: "Digital Transformation",
    },
    {
      title: "Cybersecurity Framework",
      description:
        "Developed and implemented an enterprise-wide cybersecurity framework that enhanced data protection.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Cybersecurity", "Compliance", "Risk Management"],
      link: "/projects/cybersecurity-framework",
      category: "Security & Compliance",
    },
    {
      title: "IoT Smart Factory",
      description: "Implemented an IoT solution for manufacturing that improved production efficiency by 25%.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["IoT", "Industry 4.0", "Automation"],
      link: "/projects/iot-smart-factory",
      category: "IoT & Edge Computing",
    },
    {
      title: "Data Lake Architecture",
      description:
        "Designed a scalable data lake architecture that unified data sources and enabled advanced analytics.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Data Engineering", "Big Data", "Analytics"],
      link: "/projects/data-lake",
      category: "Data & Analytics",
    },
    {
      title: "Microservices Migration",
      description:
        "Led the migration from monolithic architecture to microservices, improving scalability and deployment speed.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Microservices", "API", "DevOps"],
      link: "/projects/microservices",
      category: "Software Architecture",
    },
    {
      title: "Blockchain Supply Chain",
      description: "Implemented a blockchain solution for supply chain transparency and traceability.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Blockchain", "Supply Chain", "Distributed Ledger"],
      link: "/projects/blockchain-supply-chain",
      category: "Blockchain",
    },
    {
      title: "Customer Data Platform",
      description:
        "Built a unified customer data platform that provided 360-degree customer views and personalization capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["CRM", "Customer Experience", "Data Integration"],
      link: "/projects/customer-data-platform",
      category: "Data & Analytics",
    },
  ]

  const categories = [
    "All",
    "AI & Machine Learning",
    "Cloud & Infrastructure",
    "Digital Transformation",
    "Security & Compliance",
    "IoT & Edge Computing",
    "Data & Analytics",
    "Software Architecture",
    "Blockchain",
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A collection of technology initiatives and projects I've led throughout my career.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex flex-wrap h-auto mb-8 bg-muted/50">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="mb-2 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                      link={project.link}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

