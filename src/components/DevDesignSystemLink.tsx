'use client'
import Link from 'next/link'

type LinkButtonProps = {
  href: string
  children: React.ReactNode
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => (
  <Link
    href={href}
    className="inline-block px-3 py-2 rounded-md bg-primary-500 text-neutral-100 text-sm shadow-lg hover:bg-primary-400 transition"
  >
    {children}
  </Link>
)

export default function DevDesignSystemLink() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 flex flex-col items-end">
      <LinkButton href={"/design-system"}>Design System</LinkButton>
      <LinkButton href={"./"}>Home</LinkButton>
    </div>
  )
}
