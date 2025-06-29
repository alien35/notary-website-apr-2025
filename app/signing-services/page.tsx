import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'Signing Services & More',
  description: 'Compilation of signing services, title companies, attorneys and other organizations that work with notaries.'
}

export default function SigningServicesPage() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'signing_services_list.html'),
    'utf8'
  )

  return (
    <div className="container mx-auto px-4 py-24 md:py-32 prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
