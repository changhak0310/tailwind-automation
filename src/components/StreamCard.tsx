
import Link from 'next/link'
import Image from 'next/image'

interface StreamCardProps {
  id: string
  streamerName: string
  thumbnailUrl: string
  profileUrl: string
  category: string
  viewers: number
  isLive: boolean
}

export default function StreamCard({
  id,
  streamerName,
  thumbnailUrl,
  profileUrl,
  category,
  viewers,
  isLive,
}: StreamCardProps) {
  return (
    <Link href={`/stream/${id}`}>
      <div className="bg-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="relative h-40 bg-neutral-700">
          <Image
            src={thumbnailUrl}
            alt={`${streamerName} 썸네일`}
            fill
            className="object-cover"
          />
          {isLive && (
            <span className="absolute top-2 left-2 bg-red-600 text-xs font-semibold px-1.5 py-0.5 rounded text-white animate-pulse">
              LIVE
            </span>
          )}
          <span className="absolute top-2 right-2 bg-neutral-900 bg-opacity-60 text-xs px-1 py-0.5 rounded text-neutral-200">
            {viewers.toLocaleString()}
          </span>
        </div>
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src={profileUrl}
              alt={`${streamerName} 프로필`}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-neutral-100 text-sm font-medium truncate">
                {streamerName}
              </span>
              <span className="text-neutral-400 text-xs">{category}</span>
            </div>
          </div>
          <div className="text-neutral-400 hover:text-primary-500 transition cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
