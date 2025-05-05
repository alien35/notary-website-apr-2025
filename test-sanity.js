// test-sanity.js
const { createClient } = require('next-sanity')

const client = createClient({
  projectId: 'd0vsn8y7',
  dataset: 'production',
  useCdn: true
})

async function main() {
  const pages = await client.fetch(`*[_type == "apage"]{slug}`)
  console.log(pages)
}

main()
