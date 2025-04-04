import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Bank Level Security & Privacy | NotaryCentral",
  description:
    "We take the security of your data and personal information very seriously. That's why we use advanced digital and physical security measures to ensure your information remains safe and secure.",
}

export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Bank Level Security & Privacy</h1>

          <p className="text-lg mb-4 text-muted-foreground">
            We take the security of your data and personal information very seriously. That's why we use advanced
            digital and physical security measures to ensure your information remains safe and secure.
          </p>

          <p className="text-lg mb-4 text-muted-foreground">
            All data transmissions between our server and your devices—whether computer, phone, or tablet—are encrypted
            with 128-bit SSL/TLS. Additionally, all account passwords and sensitive information are encrypted with
            512-bit encryption before being stored on our servers.
          </p>

          <p className="text-lg mb-4 text-muted-foreground">
            We never share your data, customer lists, or any other sensitive information. We understand how important
            this is to your business and would never risk compromising your trust.
          </p>

          <div className="mt-8">
            <Link href="/security/account-deletion" className="text-primary hover:underline">
              Account Deletion Information
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3gsfJibwyMfiu0EGnd2RTMYlHAlGgA.png"
            alt="Digital Security Padlock"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}
