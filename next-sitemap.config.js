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

    return [...staticPaths, ...sanityPaths]
  },
}
