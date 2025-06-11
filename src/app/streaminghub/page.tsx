'use client'
import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LiveCard from '@/components/LiveCard'
import OfflineCard from '@/components/OfflineCard'
import MainCarousel, { StreamerInfo } from '@/components/MainCarousel'
import LiveSummaryItem from '@/components/LiveSummaryItem'

const liveStreamers: StreamerInfo[] = Array.from({ length: 5 }).map((_, i) => ({
  id: String(i + 1),
  name: `스트리머 ${i + 1}`,
  avatar: '/profile_sample.png',
  thumbnail: '/thumbnail_sample.avif',
  title: '재미있는 게임 방송 중',
  category: '게임',
  viewers: Math.floor(Math.random() * 1000) + 1,
  elapsed: `${Math.floor(Math.random() * 50) + 1}분 경과`,
}))

const offlineStreamers = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 20),
  name: `오프라인 ${i + 1}`,
  avatar: '/profile_sample.png',
}))

export default function StreamingHubPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollToCard = (idx: number) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', inline: 'start' })
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      <Header />
      <div className="p-4 space-y-8">
        <MainCarousel streamers={liveStreamers} />

        <section>
          <div className="flex overflow-x-auto space-x-3 scrollbar-hide py-2">
            {liveStreamers.map((s, idx) => (
              <LiveSummaryItem
                key={s.id}
                name={s.name}
                avatarUrl={s.avatar}
                viewers={s.viewers}
                onClick={() => scrollToCard(idx)}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex overflow-x-auto space-x-4 snap-x pb-4 scrollbar-hide">
            {liveStreamers.map((s, idx) => (
              <div
                key={s.id}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                className="flex-shrink-0 w-[220px] snap-start"
              >
                <LiveCard
                  id={s.id}
                  name={s.name}
                  avatarUrl={s.avatar}
                  thumbnailUrl={s.thumbnail}
                  title={s.title}
                  category={s.category}
                  viewerCount={s.viewers}
                  isLive
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">🕑 지금 오프라인인 크루</h3>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-3">
            {offlineStreamers.map((s) => (
              <OfflineCard key={s.id} name={s.name} avatarUrl={s.avatar} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
