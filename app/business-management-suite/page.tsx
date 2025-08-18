import Link from "next/link"
import type { Metadata } from "next"
import { useCases, features } from "@/data/business-management-suite"

export const metadata: Metadata = {
  title: "Business Management Suite | NotaryCentral",
  description: "Explore the use cases and features of the NotaryCentral Business Management Suite.",
}

export default function BusinessManagementSuitePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="mb-8 text-3xl font-bold">Business Management Suite</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Use Cases</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {useCases.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-lg font-medium">{item.title}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Features</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          {features.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-lg font-medium">{item.title}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
