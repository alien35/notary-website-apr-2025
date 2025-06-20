import fs from 'fs'
import path from 'path'

export interface HowToBecomeSection {
  title: string
  content_html: string[]
}

export interface HowToBecomeData {
  state: string
  url: string
  sections: HowToBecomeSection[]
}

const baseDir = path.join(process.cwd(), 'data', 'how-to-become')

export function getAvailableStates(): string[] {
  if (!fs.existsSync(baseDir)) return []
  return fs
    .readdirSync(baseDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace(/\.json$/, ''))
}

export function getStateData(state: string): HowToBecomeData | null {
  const filePath = path.join(baseDir, `${state}.json`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw) as HowToBecomeData
}
