import { useEffect, useRef, useState } from 'react'

import { copyText } from './copyText'

export function useCopyFeedback(text: string) {
  const [copied, setCopied] = useState(false)
  const copiedTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (copiedTimeoutRef.current !== null) {
        window.clearTimeout(copiedTimeoutRef.current)
      }
    }
  }, [])

  async function handleCopy() {
    await copyText(text)
    setCopied(true)

    if (copiedTimeoutRef.current !== null) {
      window.clearTimeout(copiedTimeoutRef.current)
    }

    copiedTimeoutRef.current = window.setTimeout(() => setCopied(false), 1200)
  }

  return { copied, handleCopy }
}
