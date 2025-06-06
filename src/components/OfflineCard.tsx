import React from 'react'
import Image from 'next/image'

interface OfflineCardProps {
  name: string
  avatarUrl: string
  nextSchedule?: string
}

export default function OfflineCard({ name, avatarUrl, nextSchedule }: OfflineCardProps) {
  return (
    <div
      className="flex-shrink-0 w-[100px] bg-neutral-700 rounded-lg p-3 flex flex-col items-center space-y-2 group hover:bg-neutral-600 transition"
      aria-label={`${name}님은 현재 오프라인, 다음 방송 ${nextSchedule ?? '미정'}`}
    >
      <div className="relative">
        <Image src={avatarUrl} alt={`${name} 프로필`} width={64} height={64} className="w-16 h-16 rounded-full object-cover grayscale" />
        <span className="absolute bottom-0 right-0 bg-neutral-900 bg-opacity-70 text-neutral-400 text-xs px-1 py-0.5 rounded">
          OFFLINE
        </span>
      </div>
      <span className="text-neutral-100 text-sm font-medium truncate">{name}</span>
      <button className="bg-primary-500 text-white text-xs px-2 py-1 rounded-sm hover:bg-primary-400 transition">
        알림 받기
      </button>
    </div>
  )
}
