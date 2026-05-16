"use client"

import { useState, useEffect } from "react"

type ToastProps = {
  title?: string
  description?: string
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props])
    // Basic native alert fallback for this custom implementation
    // if no toaster provider is set up
    // In a real app we would use context and a Toaster component
  }

  return { toast, toasts }
}
