import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPost, urlFor } from "@/lib/sanity"
import type { Post } from "@/types/post"
import { format } from "date-fns"
import { PortableText } from "@portabletext/react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import PortableTextComponents from "@/components/PortableTextComponents"
import MyBreadCrumbs from "@/components/MyBreadCrumbs"
import AffiliateLinkSetter from "@/components/AffiliateLinkSetter"
import PortableTextRenderer from "@/components/PortableTextRenderer"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = (await getPost(params.slug)) as Post | null

  if (!post) {
    return {
      title: "Post Not Found | NotaryCentral",
      description: "The requested post could not be found",
    }
  }

  let fallbackDescription = ""
  if (Array.isArray(post.body)) {
    const paragraphBlock = post.body.find(
      (block) =>
        block._type === "block" &&
        block.style === "normal" &&
        Array.isArray(block.children)
    )

    if (paragraphBlock) {
      fallbackDescription = paragraphBlock.children
        .filter((child: any) => child._type === "span")
        .map((child: any) => child.text)
        .join("")
        .trim()
    }
  }

  const baseDescription =
    "Explore this NotaryCentral article for guidance, tips, and compliance insights that help notaries stay organized, secure, and ready for every appointment."

  const description =
    fallbackDescription && fallbackDescription.length >= 150
      ? fallbackDescription.slice(0, 160)
      : baseDescription

  return {
    title: `${post.title} | NotaryCentral Blog`,
    description,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = (await getPost(params.slug)) as Post | null

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        <nav aria-label="breadcrumb">
          <MyBreadCrumbs value={post.breadcrumbs} />
        </nav>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            {post.author && post.author.image && (
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={urlFor(post.author.image).url() || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-medium">{post.author?.name}</div>
              <div className="text-sm">Last updated {post.publishedAt && format(new Date(post.publishedAt), "MMMM dd, yyyy")}</div>
            </div>
          </div>
        </div>

        {post.mainImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(post.mainImage).url() || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.body && (
            <PortableTextRenderer value={post.body} />

          )}
        </div>
      </div>
      <AffiliateLinkSetter />
    </div>
  )
}
