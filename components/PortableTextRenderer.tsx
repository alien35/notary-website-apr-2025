// components/PortableTextRenderer.tsx
"use client"

import React from 'react'
import { PortableText } from '@portabletext/react'
import PortableTextComponents from './PortableTextComponents'

export default function PortableTextRenderer({ value }: { value: any }) {
  console.log(value, 'value22')
  console.log(PortableTextComponents?.types, 'PortableTextComponents')
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
