import Link from 'next/link'
import Image from 'next/image'

interface LiveStreamerCardProps {
  id: string
  streamerName: string
  thumbnailUrl: string
  profileUrl: string
  category: string
  viewers: number
  isLive: boolean
  title: string
}

export default function LiveStreamerCard({
  id,
  streamerName,
  thumbnailUrl,
  profileUrl,
  category,
  viewers,
  isLive,
  title,
}: LiveStreamerCardProps) {
  return (
    <Link
      href={`/stream/${id}`}
      aria-label={`${streamerName}님의 실시간 방송 시청하기. 시청자 수 ${viewers}명`}
      className="flex-shrink-0 w-[160px] h-[250px] sm:w-[180px] sm:h-[280px] lg:w-[200px] lg:h-[300px] bg-neutral-800 rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-xl snap-start focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <div className="relative w-full h-[160px] bg-neutral-700">
        {isLive ? (
          <Image
            src={thumbnailUrl}
            alt={`${streamerName} 방송 썸네일`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-700">
            <span className="text-neutral-400 text-sm font-medium">OFFLINE</span>
          </div>
        )}
        {isLive && (
          <>
            <span className="absolute top-2 left-2 bg-red-600 text-xs font-semibold px-1.5 py-0.5 rounded text-white animate-pulse" aria-hidden="true">
              LIVE
            </span>
            <span className="absolute top-2 right-2 bg-neutral-900 bg-opacity-60 text-xs px-1 py-0.5 rounded text-neutral-200" aria-hidden="true">
              {viewers.toLocaleString()}
            </span>
          </>
        )}
      </div>
      <div className="p-3 flex flex-col justify-between h-[90px] sm:h-[100px] lg:h-[140px]">
        <div className="flex items-center space-x-3">
          <Image
            src={profileUrl}
            alt={`${streamerName} 프로필 사진`}
            width={40}
            height={40}
            className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-neutral-600 object-cover"
          />
          <div className="flex flex-col truncate">
            <span className="text-neutral-100 text-xs sm:text-sm font-medium truncate">{streamerName}</span>
            <span className="text-neutral-400 text-[0.65rem] sm:text-xs">{category}</span>
          </div>
        </div>
        <p className="mt-2 text-neutral-200 text-[0.7rem] sm:text-xs leading-snug line-clamp-2">
          {title}
        </p>
      </div>
    </Link>
  )
}
