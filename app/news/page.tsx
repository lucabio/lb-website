"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import NewsCard from "@/components/news-card"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const newsArticles = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "How artificial intelligence is reshaping business operations and decision-making processes.",
      category: "Tech",
      date: "April 2, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/ai-enterprise",
    },
    {
      title: "New Album Releases This Month",
      excerpt: "A roundup of the most anticipated music albums dropping this month across all genres.",
      category: "Music",
      date: "April 1, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/album-releases",
    },
    {
      title: "Next-Gen Gaming Consoles Review",
      excerpt: "An in-depth comparison of the latest gaming consoles and their technological capabilities.",
      category: "Gaming",
      date: "March 30, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/gaming-consoles",
    },
    {
      title: "Major League Playoffs Preview",
      excerpt: "Analysis and predictions for the upcoming major league playoffs and championship series.",
      category: "Sports",
      date: "March 28, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/playoffs-preview",
    },
    {
      title: "Quantum Computing Breakthrough",
      excerpt: "Scientists achieve new milestone in quantum computing that could revolutionize data processing.",
      category: "Tech",
      date: "March 25, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/quantum-computing",
    },
    {
      title: "Top 10 Indie Artists to Watch",
      excerpt: "Discover the rising indie music artists who are making waves in the industry this year.",
      category: "Music",
      date: "March 23, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/indie-artists",
    },
    {
      title: "The Evolution of Open-World Games",
      excerpt: "How open-world game design has evolved and what the future holds for this popular genre.",
      category: "Gaming",
      date: "March 20, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/open-world-games",
    },
    {
      title: "International Tournament Results",
      excerpt: "Recap of the recent international sports tournament and standout performances.",
      category: "Sports",
      date: "March 18, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/tournament-results",
    },
    {
      title: "AI Ethics in Modern Technology",
      excerpt: "Exploring the ethical considerations and challenges in artificial intelligence development.",
      category: "Tech",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/ai-ethics",
    },
    {
      title: "Music Production Technology Trends",
      excerpt: "The latest tools and technologies reshaping how music is produced and distributed.",
      category: "Music",
      date: "March 12, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/music-production",
    },
    {
      title: "Virtual Reality Gaming Experience",
      excerpt: "How virtual reality is creating immersive gaming experiences and changing the industry.",
      category: "Gaming",
      date: "March 10, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/vr-gaming",
    },
    {
      title: "Sports Analytics Revolution",
      excerpt: "How data analytics is transforming sports strategy, training, and performance evaluation.",
      category: "Sports",
      date: "March 8, 2025",
      image: "/placeholder.svg?height=150&width=250",
      link: "/news/sports-analytics",
    },
  ]

  const filteredArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const categories = ["All", "Tech", "Music", "Gaming", "Sports"]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Insights</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Stay updated with the latest in technology, music, gaming, and sports.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search articles..."
            className="w-full pl-8 md:max-w-sm border-orange-500/20 focus-visible:ring-orange-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="mb-8 bg-muted/50">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredArticles
                  .filter((article) => category === "All" || article.category === category)
                  .map((article, index) => (
                    <NewsCard
                      key={index}
                      title={article.title}
                      excerpt={article.excerpt}
                      category={article.category}
                      date={article.date}
                      image={article.image}
                      link={article.link}
                    />
                  ))}
              </div>
              {filteredArticles.filter((article) => category === "All" || article.category === category).length ===
                0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No articles found matching your search criteria.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

