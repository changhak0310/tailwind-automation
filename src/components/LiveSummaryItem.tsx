'use client'
import Image from 'next/image'

interface LiveSummaryItemProps {
  name: string
  avatarUrl: string
  viewers: number
  onClick?: () => void
}

export default function LiveSummaryItem({ name, avatarUrl, viewers, onClick }: LiveSummaryItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-24 p-2 bg-neutral-800 rounded-md flex flex-col items-center space-y-1 hover:bg-neutral-700 transition"
      aria-label={`${name} 방송으로 이동`}
    >
      <Image src={avatarUrl} alt={`${name} 프로필`} width={48} height={48} className="rounded-full object-cover" />
      <span className="text-neutral-100 text-xs truncate">{name}</span>
      <span className="text-red-500 text-xs font-medium">LIVE {viewers}</span>
    </button>
  )
}
