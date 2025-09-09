import fs from "fs"
import path from "path"
import { getPosts } from "@/lib/sanity"
import type { Post } from "@/types/post"
import PostList from "./post-list"

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

    const contentWithoutTitle = markdown.replace(/^#.*\n/, "")
    const tagsMatch = contentWithoutTitle.match(/^Tags:\s*(.+)$/mi)
    const categories = tagsMatch
      ? tagsMatch[1].split(",").map((tag) => tag.trim())
      : []

    const content = contentWithoutTitle
      .replace(/^Last updated.*\n/i, "")
      .replace(/^Tags:.*\n/i, "")
      .trim()

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
      categories,
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

  return <PostList posts={posts} />
}
