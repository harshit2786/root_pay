import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex w-full rounded-xl border-2 border-[#D9E0E6] bg-white px-4 py-4 text-sm text-[var(--brand-navy)] outline-none transition-colors placeholder:text-gray-300 focus:border-[var(--brand-blue)] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-400",
        className
      )}
      {...props}
    />
  )
}

export { Input }
