'use client'
import { useState, useEffect, useCallback } from 'react'
import HighlightStreamCard from './HighlightStreamCard'

export interface StreamerInfo {
  id: string
  name: string
  avatar: string
  thumbnail: string
  title: string
  category: string
  viewers: number
  elapsed: string
}

export default function MainCarousel({ streamers }: { streamers: StreamerInfo[] }) {
  const [index, setIndex] = useState(0)
  const nextSlide = useCallback(() => {
    setIndex((i) => (i + 1) % streamers.length)
  }, [streamers.length])
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + streamers.length) % streamers.length)
  }, [streamers.length])

  useEffect(() => {
    const id = setInterval(nextSlide, 10000)
    return () => clearInterval(id)
  }, [nextSlide])

  const current = streamers[index]
  return (
    <div className="relative h-[40vh] lg:h-[60vh]">
      <HighlightStreamCard
        id={current.id}
        name={current.name}
        avatarUrl={current.avatar}
        thumbnailUrl={current.thumbnail}
        title={current.title}
        category={current.category}
        viewerCount={current.viewers}
        elapsedTime={current.elapsed}
        isLive
      />
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-neutral-800 bg-opacity-60 text-neutral-100 p-2 rounded-full hover:bg-opacity-80"
        aria-label="이전 방송"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-neutral-800 bg-opacity-60 text-neutral-100 p-2 rounded-full hover:bg-opacity-80"
        aria-label="다음 방송"
      >
        ›
      </button>
    </div>
  )
}
