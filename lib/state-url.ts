import { STATE_MAP } from "./states"

interface StateRoute {
  pattern: RegExp
  build: (slug: string) => string
}

const routes: StateRoute[] = [
  {
    pattern: /^\/(?:[a-z-]+\/)?e-journal\/?$/,
    build: (slug) => `/${slug}/e-journal`,
  },
]

export function maybeRedirectToStatePage(abbr: string): boolean {
  if (typeof window === "undefined") return false

  const slug = STATE_MAP[abbr]?.toLowerCase().replace(/\s+/g, "-") || abbr.toLowerCase()
  const { pathname } = window.location

  for (const route of routes) {
    if (route.pattern.test(pathname)) {
      const target = route.build(slug)
      if (pathname !== target) {
        window.location.href = target
      } else {
        window.location.reload()
      }
      return true
    }
  }

  return false
}
