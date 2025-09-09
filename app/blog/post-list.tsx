'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { urlFor } from '@/lib/sanity'
import type { Post } from '@/types/post'

type BlogPost = Post & { href: string }

export default function PostList({ posts }: { posts: BlogPost[] }) {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.categories || [])))
  const tagOptions = ['All', ...allTags]
  const [selectedTag, setSelectedTag] = useState('All')
  const filteredPosts =
    selectedTag === 'All'
      ? posts
      : posts.filter((p) => (p.categories || []).includes(selectedTag))

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">NotaryCentral Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest news, tips, and updates for notaries
        </p>
        {tagOptions.length > 1 && (
          <div className="mt-4 flex justify-center">
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger className="w-[250px]">
                <SelectValue placeholder="Filter by tag" />
              </SelectTrigger>
              <SelectContent>
                {tagOptions.map((tag) => (
                  <SelectItem key={tag} value={tag}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post._id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 w-full">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).url() || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                {post.publishedAt &&
                  format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                {post.categories && post.categories.length > 0 && (
                  <span> · {post.categories.join(', ')}</span>
                )}
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
