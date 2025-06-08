'use client'
import Link from 'next/link'

export default function DevDesignSystemLink() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <Link
      href="/design-system"
      className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-md bg-primary-500 text-neutral-100 text-sm shadow-lg hover:bg-primary-400"
    >
      Design System
    </Link>
  )
}
