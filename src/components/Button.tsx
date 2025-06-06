'use client'

import { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500'
  const variants = {
    primary:
      'bg-primary-500 text-neutral-100 hover:bg-primary-400',
    secondary:
      'border border-neutral-600 text-neutral-300 hover:border-primary-500 hover:text-primary-500',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
