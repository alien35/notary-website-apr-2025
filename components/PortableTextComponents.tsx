"use client"

import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MyBreadCrumbs from "./MyBreadCrumbs"
import React from "react"
import ConditionalText from "./ConditionalText"
import CountryAndRegionPicker from "./CountryAndRegionPicker"
import StatePicker from "./StatePicker"
import WorksOnDevices from "./WorksOnDevices"

// Helper function to check if a URL is external
const isExternalLink = (url) => {
  return /^(https?:|mailto:|tel:)/.test(url)
}

// Helper function to extract YouTube video ID or use the embed URL
const getYouTubeEmbedUrl = (url) => {
  if (url.includes("embed")) {
    return url
  }

  const videoIdMatch = url.match(/(?:youtube\.com\/.*(?:v=|embed\/|v\/)|youtu.be\/)([^#&?]*).*/)

  const videoId = videoIdMatch ? videoIdMatch[1] : null

  return videoId ? `https://www.youtube.com/embed/${videoId}` : null
}

const PortableTextComponents = {
  types: {
    statePicker: () => {
      return <StatePicker />
    },
    countryAndRegionPicker: () => {
      return <CountryAndRegionPicker variant="default" />
    },
    youtube: ({ value }) => {
      const { url } = value
      if (!url) {
        return null
      }

      const embedUrl = getYouTubeEmbedUrl(url)

      if (!embedUrl) {
        return <p>Invalid YouTube URL</p>
      }

      return (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", // Aspect ratio: 16:9
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
            background: "#000", // Optional: Add background for better contrast
          }}
        >
          <iframe
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )
    },
    pdfEmbed: ({ value }) => {
      const { url } = value
      if (!url) {
        return <p>No PDF URL provided</p>
      }

      return (
        <div>
          <iframe src={url} width="100%" height="600px" style={{ border: "none" }} title="PDF Viewer" />
        </div>
      )
    },
    conditionalText: ({ value }) => {
      return <ConditionalText value={value} />
    },
    breadcrumbs: ({ value }) => <MyBreadCrumbs value={value} />,
    table: ({ value }) => {
      if (!value || !value.rows) {
        return <p className="text-muted-foreground">No table data provided</p>
      }

      const rows = value.rows

      return (
        <div className="my-6 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {rows[0]?.cells.map((cell, index) => (
                  <TableHead key={index} className="text-center">
                    {cell}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.slice(1).map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <TableCell key={cellIndex} className="text-center">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )
    },
    accordion: ({ value }) => {
      const { items } = value

      if (!items || items.length === 0) {
        return <p>No accordion items provided</p>
      }

      return (
        <Accordion type="single" collapsible className="w-full my-6">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )
    },
    worksOnDevices: () => {
      return <WorksOnDevices />
    },
    imageBlock: ({ value }) => {
      const imageUrl = value?.image?.asset ? urlFor(value.image).url() : null;
      console.log(imageUrl, 'imageUrl22')
      if (!imageUrl) return null;
    
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            fill
            className="object-contain"
          />
        </div>
      );
    }
    
  },
  marks: {
    link: ({ children, value }) => {
      // Check if we're already inside a link to prevent nesting
      // This is a simple check that might need refinement based on your content structure
      const isNestedLink =
        typeof children === "string"
          ? false
          : React.Children.toArray(children).some(
              (child) => React.isValidElement(child) && (child.type === "a" || (child.props && child.props.href)),
            )

      // If this appears to be a nested link, just return the children without wrapping in another link
      if (isNestedLink) {
        return <>{children}</>
      }

      const target = isExternalLink(value.href) ? "_blank" : undefined
      const rel = target === "_blank" ? "noreferrer noopener" : undefined

      // Use a regular <a> tag instead of Next.js Link for consistency
      return (
        <a href={value.href} target={target} rel={rel} className="text-primary underline hover:text-primary/80">
          {children}
        </a>
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
}

export default PortableTextComponents
