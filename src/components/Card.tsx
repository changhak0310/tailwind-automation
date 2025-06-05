import { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-neutral-800 p-4 shadow-sm">
      {children}
    </div>
  )
}
