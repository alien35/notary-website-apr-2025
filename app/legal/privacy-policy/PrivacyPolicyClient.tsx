"use client"

import { Separator } from "@/components/ui/separator"
import { Shell } from "@/components/shell"
import { Heading, Text, Small } from "@/components/ui/typography"
import Link from "next/link"

export default function PrivacyPolicyClient() {
  return (
    <Shell>
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Heading className="mb-6">Privacy Policy</Heading>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">General</h2>
          <Text>
            We will not share or sell your personal information or information that can be used to identify you without
            your permission.
          </Text>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What information do we collect?</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Personal information such as your name, billing address, e-mail, phone, and credit card number when you
              interact with us for sales, service, support, registration, and payment.
            </li>
            <li>
              Information about your system as it interacts with us such as your IP address and browser information.
            </li>
            <li>User feedback and other interactions at our sites.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">What do we do with your information?</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Use your information to operate our business and to help us provide the best experience possible when
              using our products or services.
            </li>
            <li>Tell you about the products and services that are available to you.</li>
            <li>Train our employees about how to keep your information safe and secure.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How do we protect your information?</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>We use accepted industry standard methods to protect your information.</li>
            <li>Your sensitive information, such as credit card information, is sent securely.</li>
            <li>Our staff is required to safeguard your information.</li>
            <li>
              We store, transmit, access, and protect all cardholder information in compliance with the Payment Card
              Industry's Data Security Standards.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Google APIs</h2>
          <Text className="text-muted-foreground">
            We use Google Maps APIs, Google Calendar APIs and this privacy policy incorporates the Google Privacy Policy{" "}
            <Link
              href="http://www.google.com/privacy.html"
              className="underline text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.google.com/privacy.html
            </Link>{" "}
            as amended by Google from time to time. NotaryCentral's use and transfer to any other app of information
            received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use
            requirements.
          </Text>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Data Retention and Deletion</h2>
          <Text className="text-muted-foreground">
            We retain user data collected via Google APIs only as long as necessary to fulfill the purposes outlined in
            this policy or as required by law. Users may request the deletion of their data by contacting our support
            team, and we will delete the requested data in compliance with applicable legal and regulatory requirements.
          </Text>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Location Data</h2>
          <Text className="text-muted-foreground">
            We collect location data exclusively to enable Bluetooth functionality required for specific features,
            namely the Thumbprint scanning capability as part of the e-Journal. This data is essential for the feature
            to function properly, as Bluetooth connectivity relies on location services.
          </Text>
          <Text className="text-muted-foreground mt-2">
            Location data is only collected with your explicit permission and is never shared or sold to third parties
            without your consent. You can manage location sharing permissions through your device settings at any time.
          </Text>
        </section>

        <Separator className="my-8" />

        <footer className="text-center text-sm text-muted-foreground space-y-1">
          <Small>© Digital Mountain Group, LLC. All rights reserved.</Small>
          <Small>1272 SW Evergreen Ln, Florida, 37990</Small>
        </footer>
      </div>
    </Shell>
  )
}
