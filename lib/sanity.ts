import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "d0vsn8y7",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      "author": author->{name, image},
      "categories": categories[]->title
    }
  `)
}

export async function getPost(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      body,
      breadcrumbs,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      "author": author->{
        _id,
        name,
        image
      }
    }
  `, { slug })
}
