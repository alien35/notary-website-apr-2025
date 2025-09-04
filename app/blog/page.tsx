import fs from "fs"
import path from "path"
import Link from "next/link"
import Image from "next/image"
import { getPosts, urlFor } from "@/lib/sanity"
import type { Post } from "@/types/post"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

type BlogPost = Post & { href: string }

function getLocalPosts(): Post[] {
  const postsDir = path.join(process.cwd(), "data", "blog")
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".md"))

  return files.map((file) => {
    const filePath = path.join(postsDir, file)
    const slug = file.replace(/\.md$/, "")
    const markdown = fs.readFileSync(filePath, "utf8")
    const titleMatch = markdown.match(/^#\s+(.*)/)
    const title = titleMatch ? titleMatch[1].trim() : slug

    const content = markdown.replace(/^#.*\n/, "").trim()
    const excerptLine = content.split("\n").find((line) => line.trim()) || ""
    const excerpt =
      excerptLine.length > 140 ? `${excerptLine.slice(0, 137).trim()}...` : excerptLine

    const dateMatch = markdown.match(
      /Last updated\s+([A-Za-z]+\s+\d{1,2},\s+\d{4})/i
    )
    const stats = fs.statSync(filePath)
    const publishedAt = dateMatch
      ? new Date(dateMatch[1]).toISOString()
      : stats.mtime.toISOString()

    return {
      _id: slug,
      title,
      slug: { current: slug },
      mainImage: null,
      publishedAt,
      excerpt,
      author: { name: "NotaryCentral", image: null },
      categories: [],
    } as Post
  })
}

export const metadata = {
  title: "Blog | NotaryCentral",
  description:
    "Explore the NotaryCentral blog for practical tips, industry news, compliance updates, and guides that help notaries run secure, profitable practices with ease.",
}

export default async function BlogPage() {
  const sanityPosts = (await getPosts()) as Post[]
  const localPosts = getLocalPosts()

  const posts: BlogPost[] = [
    ...sanityPosts.map((p) => ({
      ...p,
      href: `/post/${p.slug.current}`,
    })),
    ...localPosts.map((p) => ({
      ...p,
      href: `/${p.slug.current}`,
    })),
  ].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return dateB - dateA
  })

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">NotaryCentral Blog</h1>
        <p className="text-xl text-muted-foreground">Latest news, tips, and updates for notaries</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Card key={post._id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url() || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                {post.publishedAt && format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                {post.categories && post.categories.length > 0 && <span> · {post.categories.join(", ")}</span>}
              </div>
              <CardTitle className="text-xl">{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">{/* Content goes here if needed */}</CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild className="group">
                <Link href={post.href}>
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
