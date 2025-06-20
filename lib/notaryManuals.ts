import manuals from '@/data/notary-manuals.json'

export interface NotaryManual {
  title: string
  url: string
}

export type NotaryManuals = Record<string, NotaryManual>

export default manuals as NotaryManuals
