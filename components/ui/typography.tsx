import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function Heading({ children, className }: TypographyProps) {
  return <h1 className={cn("text-3xl font-bold tracking-tight", className)}>{children}</h1>
}

export function Text({ children, className }: TypographyProps) {
  return <p className={cn("leading-7", className)}>{children}</p>
}

export function Large({ children, className }: TypographyProps) {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>
}

export function Small({ children, className }: TypographyProps) {
  return <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
}
