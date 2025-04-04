"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/header";

const essentials = [
  {
    title: "What is a Notary Journal?",
    pageUrl: "/post/what-is-a-notary-journal",
  },
  {
    title: "QUIZ: What is a Notary Journal?",
    pageUrl: "/training/intro-quiz",
  },
  {
    title: "Creating your first journal entry",
    pageUrl: "/post/ejournal-creating-your-first-journal-entry",
  },
];

const advanced = [
  {
    title: "Introduction to the Notary Central e-Journal",
    pageUrl: "/post/ejournal-introduction",
  },
  {
    title: "Creating entries without an internet connection",
    pageUrl: "/post/ejournal-creating-entries-without-an-internet-connection",
  },
  {
    title: "Capturing thumbprints",
    pageUrl: "/post/ejournal-capturing-thumbprints",
  },
  {
    title: "How to Register your Notary Commission",
    pageUrl: "/post/ejournal-how-to-register-your-notary-commission",
  },
  {
    title: "What is tamper-proof evidence?",
    pageUrl: "/post/ejournal-what-is-tamper-proof-evidence",
  },
  {
    title: "What are packages?",
    pageUrl: "/post/ejournal-what-are-packages",
  },
  {
    title: "Creating receipts for your journal entries",
    pageUrl: "/post/ejournal-creating-receipts-for-your-journal-entries",
  },
];

export default function TrainingMaterials() {
  const router = useRouter();

  const handleNavigate = (url: string) => {
    const queryParams = window.location.search;
    const fullUrl = queryParams ? `${url}${queryParams}` : url;
    router.push(fullUrl);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Notary Journal Training</h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Essentials</h2>
          <div className="space-y-4">
            {essentials.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg bg-muted hover:bg-muted/70 cursor-pointer transition-colors"
                onClick={() => handleNavigate(item.pageUrl)}
              >
                <span className="text-base">{item.title}</span>
                <span className="text-lg font-bold">&rarr;</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Mastering the Notary Central e-Journal</h2>
          <div className="space-y-4">
            {advanced.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border rounded-lg bg-muted hover:bg-muted/70 cursor-pointer transition-colors"
                onClick={() => handleNavigate(item.pageUrl)}
              >
                <span className="text-base">{item.title}</span>
                <span className="text-lg font-bold">&rarr;</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
