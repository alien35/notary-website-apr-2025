import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Other appointments",
  description: "Manage miscellaneous appointments beyond standard notarizations.",
}

export default function OtherAppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-3xl font-bold mb-4">Other appointments</h1>
      <p>Content coming soon.</p>
    </div>
  )
}
