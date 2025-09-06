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
        console.log("state-url: redirecting to state route", { from: pathname, to: target, abbr, slug })
        window.location.href = target
      }
      console.log("state-url: route matched; staying or redirected", { pathname, abbr, slug })
      return true
    }
  }

  console.log("state-url: no matching route pattern; no redirect", { pathname, abbr, slug })
  return false
}
