import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LiveCardProps {
  id: string
  name: string
  avatarUrl: string
  thumbnailUrl: string
  title: string
  category: string
  viewerCount: number
  isLive: boolean
}

export default function LiveCard({
  id,
  name,
  avatarUrl,
  thumbnailUrl,
  title,
  category,
  viewerCount,
  isLive,
}: LiveCardProps) {
  return (
    <Link
      href={`/stream/${id}`}
      aria-label={`${name}님 실시간 방송 시청, 시청자 수 ${viewerCount}명, 카테고리 ${category}`}
      className="bg-neutral-800 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-200 cursor-pointer"
    >
      <div className="relative w-full h-[140px] bg-neutral-700">
        <Image src={thumbnailUrl} alt={`${name} 방송 썸네일`} fill className="object-cover" />
        {isLive && (
          <>
            <span className="absolute top-2 left-2 bg-red-600 text-xs text-white px-1 py-0.5 rounded animate-pulse">
              LIVE
            </span>
            <span className="absolute top-2 right-2 bg-neutral-900 bg-opacity-60 text-xs text-neutral-200 px-1 py-0.5 rounded">
              {viewerCount.toLocaleString()}
            </span>
          </>
        )}
      </div>
      <div className="p-3 space-y-1">
        <div className="flex items-center space-x-2">
          <Image src={avatarUrl} alt={`${name} 프로필`} width={32} height={32} className="w-8 h-8 rounded-full bg-neutral-600 object-cover" />
          <span className="text-neutral-100 text-sm font-medium truncate">{name}</span>
        </div>
        <p className="text-neutral-400 text-xs">{category}</p>
        <p className="text-neutral-200 text-sm leading-snug line-clamp-2" title={title}>
          {title}
        </p>
      </div>
    </Link>
  )
}
