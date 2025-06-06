'use client'

import Link from 'next/link'

const menuItems = [
  { label: '전체 방송', href: '/' },
  { label: '인기 스트리머', href: '/popular' },
  { label: '카테고리', href: '/categories' },
  { label: '팔로잉', href: '/following' },
  { label: '클립', href: '/clips' },
  { label: '게시판', href: '/board' },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-neutral-800 border-r border-neutral-700">
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center px-6 py-3 text-neutral-300 hover:bg-neutral-700 hover:text-neutral-50 transition"
              >
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
