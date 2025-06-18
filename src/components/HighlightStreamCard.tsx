'use client'
import React, { useState, useEffect, useRef, CSSProperties } from 'react'
import Image from 'next/image'

interface HighlightStreamCardProps {
  id: string
  name: string
  avatarUrl: string
  thumbnailUrl: string
  title: string
  category: string
  viewerCount: number
  elapsedTime: string
  chatSummary?: string
  isLive: boolean
}

export default function HighlightStreamCard({
  id,
  name,
  avatarUrl,
  thumbnailUrl,
  title,
  category,
  viewerCount,
  elapsedTime,
  chatSummary,
  isLive,
}: HighlightStreamCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<CSSProperties>({})

  useEffect(() => {
    const updateSize = () => {
      const el = containerRef.current?.parentElement
      if (!el) return
      const parentWidth = el.clientWidth
      const parentHeight = el.clientHeight
      let height = Math.min(parentHeight, window.innerHeight * 0.6)
      let width = height * (16 / 9)
      if (width > parentWidth) {
        width = parentWidth
        height = width * (9 / 16)
      }
      setSize({ width, height })
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return (
    <div
      ref={containerRef}
      style={size}
      className="relative mx-auto group overflow-hidden"
      role="group"
      aria-label={`${name} 스트림 하이라이트`}
    >
      <Image
        src={thumbnailUrl}
        alt={`${name} 방송 썸네일`}
        fill
        className="object-cover"
      />
      <div
        className="absolute inset-0
                  bg-gradient-to-b
                  from-transparent
                  via-transparent
                  to-black/70"
      />
      <div className="absolute bottom-4 left-4 right-4 text-neutral-100 space-y-2">
        <div className="flex items-center space-x-2">
          <Image
            src={avatarUrl}
            alt={`${name} 프로필`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover bg-neutral-600"
          />
          <h2 className="text-xl lg:text-3xl font-semibold">{name}</h2>
        </div>
        <p className="text-lg lg:text-xl line-clamp-2">{title}</p>
        <span className="text-neutral-300 text-sm">{category}</span>
        <div className="flex items-center space-x-4 text-neutral-200">
          {isLive && (
            <span className="flex items-center space-x-1">
              <svg
                className="h-5 w-5 text-red-600 animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="5" />
              </svg>
              <span className="text-sm font-semibold">{viewerCount.toLocaleString()}명</span>
            </span>
          )}
          <span className="flex items-center space-x-1">
            <svg className="h-5 w-5 text-neutral-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 8H9V5h2v5z" />
            </svg>
            <span className="text-sm">{elapsedTime}</span>
          </span>
        </div>
        <div className="flex space-x-3 pt-2">
          {isLive ? (
            <>
              <a
                href={`/stream/${id}`}
                className="px-4 py-2 bg-primary-500 rounded-md text-neutral-100 font-medium hover:bg-primary-400 transition"
              >
                ▶ 시청하기
              </a>
              <button className="px-4 py-2 bg-neutral-700 rounded-md text-neutral-100 font-medium hover:bg-neutral-600 transition">
                팔로우
              </button>
            </>
          ) : (
            <button className="px-4 py-2 bg-primary-500 rounded-md text-neutral-100 font-medium hover:bg-primary-400 transition">
              ▶ 알림 설정
            </button>
          )}
        </div>
      </div>
      {isLive && chatSummary && (
        <div className="absolute top-4 right-4 bg-neutral-800 bg-opacity-80 p-2 rounded-md text-sm text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {chatSummary}
        </div>
      )}
    </div>
  )
}
