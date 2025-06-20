import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Training Materials - NotaryCentral",
  description: "Explore available training materials to help you get started with NotaryCentral features.",
}

export default function TrainingMaterials() {
  return (
    <>
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Training Materials</h1>
          <p className="text-base text-muted-foreground">
            Learn how to effectively use the features of NotaryCentral with our available training materials. Get
            started with the "Electronic Journal (e-Journal)" to streamline your notary work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  How to Use the NotaryCentral Electronic Journal (e-Journal)
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  A step-by-step guide to help you understand and use the e-Journal feature, ensuring accurate and
                  efficient record-keeping.
                </p>
                <Button asChild>
                  <Link href="/training/how-to-use-electronic-journal" target="_blank" rel="noopener noreferrer">
                    View Training Material
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EmPZGEGrStFdui5wM3sbHNBTHy1o6v.png"
              alt="NotaryCentral e-Journal Interface"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
    </>
  )
}
