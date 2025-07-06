import data from '@/data/notary-manuals.json'

export interface NotaryManual {
  title: string
  url: string
}

export type NotaryManuals = Record<string, NotaryManual[]>

const general: NotaryManual[] = data.general
const states: Record<string, NotaryManual[]> = data.states

const manuals: NotaryManuals = Object.fromEntries(
  Object.entries(states).map(([state, stateManuals]) => [state, [...general, ...stateManuals]])
)

export default manuals
