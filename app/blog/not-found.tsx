import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, the blog post you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  )
}
