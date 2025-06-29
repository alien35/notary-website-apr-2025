import type { Metadata } from 'next'
import Link from 'next/link'
import { signingServices } from '@/data/signing-services'

export const metadata: Metadata = {
  title: 'Signing Services & More',
  description: 'Compilation of signing services, title companies, attorneys and other organizations that work with notaries.'
}

export default function SigningServicesPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-6">
        Signing Services &amp; More
      </h1>

      <div className="prose max-w-none text-muted-foreground mb-8">
        <p>
          I've compiled a list of Signing Services, Title Companies, Attorneys, Field Inspector Companies, and others who use notaries. I've tried to update the list to remove links that are now out of business. You must do your due diligence when signing up with any of these companies and others. This is one of the lists I give to notaries I've trained and gotten into the notary business.
        </p>
        <p>
          I'm leaving this public on my website blog so other notaries can access this information for FREE! I'm not asking you to "DM" me on Facebook or join my email list to have access to this information. This is a list of over 100 contacts compiled for you and costing you absolutely nothing! It's up to you to submit your information to the companies you choose!
        </p>
        <p>
          Before submitting your information to signing services and title companies, you should organize a dedicated file folder on your computer containing all your credentials. This will ensure convenient access to the necessary information when or if it's asked for. Among the credentials to include in your folder are:
        </p>
        <ul>
          <li>Driver License</li>
          <li>W-9</li>
          <li>NNA profile - you can go to your NNA profile, click on your profile link, and hit print at the top, but instead of printing change to "save as PDF".</li>
          <li>Your background screening - most companies want it from the NNA or Sterling</li>
          <li>E&amp;O Insurance Policy</li>
          <li>Notary Commission (Traditional &amp; RON)</li>
          <li>Any related training certifications you have</li>
        </ul>
        <p><strong>Updated June 2024</strong></p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm md:text-base">
        {signingServices.map((service) => (
          <li key={service.url}>
            <Link href={service.url} target="_blank" rel="noopener" className="text-primary hover:underline">
              {service.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="prose max-w-none text-muted-foreground mt-12">
        <p>
          Also, sign up on{' '}
          <Link href="https://smokymtnnotary.com/blog-2/f/links-to-notary-platforms?blogcategory=Signing+Services" target="_blank" rel="noopener" className="hover:underline">
            platforms
          </Link>{' '}
          that title companies and signing services use when searching for notaries.
        </p>
        <p>
          If you're interested in doing Field Inspections{' '}
          <Link href="https://www.sofi.us/hiring_firms.html" target="_blank" rel="noopener" className="hover:underline">
            SOFI (Society of Field Inspectors)
          </Link>{' '}
          is a platform to sign up on.
        </p>
        <p>
          <em>
            *If you're a notary and have been hired by any of these companies and have <strong>NOT</strong> been paid by them or payment was over 30 days - please email me the company's name and info so I can take them off this list! Please be aware that some companies on this list may be low-payers, that's up to you and your business to negotiate your acceptable fee! I'm only interested in non-payers and payers over 30 days (unless the contract you signed with that company is different - that's on you, also). Email: <a href="mailto:info@SmokyMtnNotary.com">info@SmokyMtnNotary.com</a>
          </em>
        </p>
      </div>
    </div>
  )
}
