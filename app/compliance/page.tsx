import type { Metadata } from "next"
import StateCompliance from "@/components/StateCompliance"

export const metadata: Metadata = {
  title: "Compliance | NotaryCentral",
  description:
    "See how NotaryCentral keeps you compliant with laws through recordkeeping, ID capture, and reminders, giving notaries secure workflows that stand up to audits.",
}

export default function CompliancePage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-8">
        Stay Compliant with NotaryCentral
      </h1>
      <div className="relative w-full max-w-2xl mx-auto mb-8 aspect-video">
        <iframe
          src="https://www.youtube.com/embed/T-XIpwwQXzE"
          title="Compliance with NotaryCentral"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
        />
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto space-y-4">
        <p>
          Hey y’all—let’s talk about something that’s not always exciting, but it’s important:
          <strong> compliance.</strong>
        </p>
        <p>
          Whether you’re brand new or have been doing this for years, staying compliant with state laws matters—and
          <strong> NotaryCentral</strong> makes it a whole lot easier.
        </p>
        <p className="italic">
          It brings everything together in one spot: your appointments, your records, and the tools that help you follow the rules in <em>your</em> state.
        </p>
        <p>
          You’ve got a digital journal to log your work. ID capture? That helps the system auto-fill signer details—so you don’t end up typing the wrong info by accident. And it tracks receipts, which makes handling expenses at tax time way less stressful. Everything’s encrypted and backed up—so if an auditor ever comes knocking, you’re ready.
        </p>
        <p>One of my favorite features?</p>
        <p>
          You can ask the built-in AI things like, <em>who do I pay for my commission?</em> And it doesn’t just guess—it pulls answers straight from your state’s notary handbook, with the citations right there. That kind of clarity goes a long way.
        </p>
        <p>
          Now, quick heads-up for notaries in Washington, Nevada, Arizona, Missouri, and Hawaii—you <em>still</em> need to keep a paper journal. NotaryCentral will remind you of that—so you don’t get caught off guard. Plain and simple.
        </p>
        <p>
          Bottom line—<strong>NotaryCentral makes it easier to stay compliant and stay on track.</strong>
        </p>
        <p>
          From logging your work to understanding your state’s rules, the tools are here—and so is support when you need it.
        </p>
        <p>
          If you’re ever unsure, just ask. You can reach out to support anytime, or drop your state in the comments and we’ll help you figure out what applies <em>where you are.</em>
        </p>
        <p>
          <strong>You’ve got this.</strong>
        </p>
      </div>
      <div className="mt-12">
        <StateCompliance />
      </div>
    </div>
  )
}
