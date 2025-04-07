// components/PortableTextRenderer.tsx
"use client"

import React from 'react'
import { PortableText } from '@portabletext/react'
import PortableTextComponents from './PortableTextComponents'

export default function PortableTextRenderer({ value }: { value: any }) {

  return (
    <PortableText
      value={value}
      components={PortableTextComponents}
      onMissingComponent={(type) => {
        console.warn(`Missing component for: ${type}`)
        return null
      }}
    />
  )
}
