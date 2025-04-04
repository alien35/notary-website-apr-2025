export interface Author {
  name: string
  image: any
  bio?: string
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainImage: any
  publishedAt: string
  excerpt?: string
  body?: any
  author: Author
  categories: string[]
}

