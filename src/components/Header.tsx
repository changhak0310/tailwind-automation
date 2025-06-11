
'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-neutral-800 border-b border-neutral-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
        <Link href="/" className="text-lg font-bold text-neutral-100">
          🎮 StreamHub
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="스트리머, 게임 검색..."
              className="w-64 px-3 py-2 bg-neutral-700 text-neutral-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary-500 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M18 10.5A7.5 7.5 0 103.75 10.5 7.5 7.5 0 0018 10.5z"
                />
              </svg>
            </button>
          </div>
          <button
            className="p-2 rounded-full hover:bg-neutral-700 transition"
            aria-label="알림 열기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-neutral-400 hover:text-primary-500 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405M19.607 12.59a8 8 0 10-15.213 0m15.213 0l.007.008m0 0a1 1 0 01-.707.293H4.1"
              />
            </svg>
          </button>
          <button
            className="w-8 h-8 rounded-full bg-neutral-600 overflow-hidden hover:ring-2 hover:ring-primary-500 transition"
            aria-label="프로필"
          >
            <Image
              src="/profile_shample.png"
              alt="프로필"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  )
}
