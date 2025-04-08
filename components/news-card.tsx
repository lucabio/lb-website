import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NewsCardProps {
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  link: string
}

export default function NewsCard({ title, excerpt, category, date, image, link }: NewsCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge
            variant="outline"
            className={`
              ${category === "Tech" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-500/50" : ""}
              ${category === "Music" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-500/50" : ""}
              ${category === "Gaming" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-500/50" : ""}
              ${category === "Sports" ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-500/50" : ""}
            `}
          >
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} className="text-sm text-orange-500 hover:underline">
          Read more
        </Link>
      </CardFooter>
    </Card>
  )
}

