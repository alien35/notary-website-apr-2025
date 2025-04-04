"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Laptop, Smartphone, Tablet } from "lucide-react"

export default function WorksOnDevices() {
  return (
    <Card className="my-6">
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">Works On These Devices</h3>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <Smartphone className="h-10 w-10 text-primary mb-2" />
            <span>Mobile</span>
          </div>
          <div className="flex flex-col items-center">
            <Tablet className="h-10 w-10 text-primary mb-2" />
            <span>Tablet</span>
          </div>
          <div className="flex flex-col items-center">
            <Laptop className="h-10 w-10 text-primary mb-2" />
            <span>Desktop</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
