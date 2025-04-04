// Define the schema types for Sanity content

export interface ConditionalTextValue {
  text: string
  state: string
}

export interface YouTubeEmbedValue {
  url: string
}

export interface PDFEmbedValue {
  url: string
}

export interface AccordionItemValue {
  title: string
  content: string
}

export interface AccordionValue {
  items: AccordionItemValue[]
}

export interface TableValue {
  rows: { cells: string[] }[]
}

export interface BreadcrumbsValue {
  _key: string
  title: string
  slug: string
}

// Add these types to your existing Post interface in types/post.ts
