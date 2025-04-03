"use client"

import * as React from "react"

import { cn } from "src/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, onChange, ...props }, ref) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleResize = React.useCallback(() => {
    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = "auto"
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [])

  React.useEffect(() => {
    handleResize()
  }, [handleResize])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleResize()
    onChange?.(e)
  }

  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full resize-y rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={(node) => {
        textareaRef.current = node
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      }}
      onChange={handleChange}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
