"use client"

import Link from "next/link"

export default function CompliancePreview() {
  return (
    <section className="py-6 border-t border-b border-gray-200 dark:border-gray-800 bg-secondary dark:bg-gray-900 mb-4">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="relative w-full max-w-2xl mx-auto aspect-video">
          <iframe
            src="https://www.youtube.com/embed/T-XIpwwQXzE"
            title="Compliance with NotaryCentral"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg">NotaryCentral helps you stay compliant.</p>
        <p>
          <Link href="/compliance" className="underline">
            Learn more
          </Link>
        </p>
      </div>
    </section>
  )
}
