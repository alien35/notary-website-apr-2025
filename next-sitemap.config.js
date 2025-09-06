const { createClient } = require('next-sanity')
const fs = require('fs')
const path = require('path')
const fg = require('fast-glob') // instead of globby

const client = createClient({
  projectId: 'd0vsn8y7',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true
})


async function getStaticPaths() {
  const entries = await fg([
    'app/**/page.@(js|ts|jsx|tsx)',
    '!app/**/(_*)',       // skip _layout, _template, etc.
    '!app/api/**',
  ])

  return entries
    .filter((entry) => {
      // ⛔ exclude catch-all and dynamic routes
      return !entry.includes('[') && !entry.includes('[[...')
    })
    .map((entry) => {
      const route = entry
        .replace(/^app/, '')
        .replace(/\/page\.(js|ts|jsx|tsx)$/, '')
        .replace(/\/index$/, '') || '/'

      return {
        loc: route,
        lastmod: new Date().toISOString(),
      }
    })
}

// Parse state/province slugs from lib/states.ts to keep in sync with app routes
function getStateSlugsFromSource() {
  try {
    const content = fs.readFileSync(path.join(process.cwd(), 'lib', 'states.ts'), 'utf8')
    const match = content.match(/STATE_MAP:[\s\S]*?=\s*{([\s\S]*?)}\s*/)
    if (!match) return []
    const body = match[1]
    const entries = Array.from(body.matchAll(/([A-Z]{2}):\s*"([^"]+)"/g))
    const names = entries.map(([, _abbr, name]) => name)
    return Array.from(new Set(names.map((n) => n.toLowerCase().replace(/\s+/g, '-'))))
  } catch (e) {
    console.warn('next-sitemap: failed to parse state slugs from lib/states.ts', e)
    return []
  }
}


/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://notarycentral.org',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const posts = await client.fetch(`
      *[_type == "post" && defined(slug.current)] {
        slug,
        publishedAt
      }
    `)

    const sanityPaths = posts.map(post => ({
      loc: `/post/${post.slug.current}`,
      lastmod: post.publishedAt || new Date().toISOString(),
    }))

    const staticPaths = await getStaticPaths()

    // Dynamic state/province e-journal routes: /{state-slug}/e-journal
    const stateSlugs = getStateSlugsFromSource()
    const stateEjournalPaths = stateSlugs.map((slug) => ({
      loc: `/${slug}/e-journal`,
      lastmod: new Date().toISOString(),
    }))

    return [...staticPaths, ...sanityPaths, ...stateEjournalPaths]
  },
}
