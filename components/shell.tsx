import type React from "react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Shell({ children, className, ...props }: ShellProps) {
  return (
    <div className={cn("max-w-5xl mx-auto px-4 py-8", className)} {...props}>
      {children}
    </div>
  )
}
