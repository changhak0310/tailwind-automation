import HighlightStreamCard from '@/components/HighlightStreamCard'
import LiveCard from '@/components/LiveCard'
import OfflineCard from '@/components/OfflineCard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const liveStreamers = Array.from({ length: 5 }).map((_, i) => ({
  id: String(i + 1),
  name: `스트리머 ${i + 1}`,
  avatar: '/profile_shample.png',
  thumbnail: '/thumbnail_sample.avif',
  title: '재미있는 게임 방송 중',
  category: '게임',
  viewers: Math.floor(Math.random() * 1000) + 1,
  elapsed: `${Math.floor(Math.random() * 50) + 1}분 경과`,
}))

const offlineStreamers = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i + 20),
  name: `오프라인 ${i + 1}`,
  avatar: '/profile_shample.png',
}))

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      <Header />
      <div className="p-4 space-y-8">
        <section className="relative h-[40vh] lg:h-[60vh]">
          <HighlightStreamCard
            id={liveStreamers[0].id}
            name={liveStreamers[0].name}
            avatarUrl={liveStreamers[0].avatar}
            thumbnailUrl={liveStreamers[0].thumbnail}
            title={liveStreamers[0].title}
            category={liveStreamers[0].category}
            viewerCount={liveStreamers[0].viewers}
            elapsedTime={liveStreamers[0].elapsed}
            chatSummary="오늘도 화이팅!"
            isLive
          />
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">🔴 지금 라이브 중인 크루</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveStreamers.map((s) => (
              <LiveCard
                key={s.id}
                id={s.id}
                name={s.name}
                avatarUrl={s.avatar}
                thumbnailUrl={s.thumbnail}
                title={s.title}
                category={s.category}
                viewerCount={s.viewers}
                isLive
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">🕑 지금 오프라인인 크루</h3>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
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
