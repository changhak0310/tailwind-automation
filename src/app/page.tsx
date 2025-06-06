import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HighlightStreamCard from '@/components/HighlightStreamCard'
import LiveCard from '@/components/LiveCard'
import OfflineCard from '@/components/OfflineCard'

const liveStreamers = Array.from({ length: 4 }).map((_, i) => ({
  id: String(i + 1),
  name: `스트리머 ${i + 1}`,
  avatar: '/images/avatar-placeholder.png',
  thumbnail: '/images/thumbnail-placeholder.png',
  title: '재미있는 게임 방송 중',
  category: '게임',
  viewers: Math.floor(Math.random() * 1000) + 1,
  elapsed: `${Math.floor(Math.random() * 50) + 1}분 경과`,
}))

const offlineStreamers = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i + 20),
  name: `오프라인 ${i + 1}`,
  avatar: '/images/avatar-placeholder.png',
}))

export default function Home() {
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
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold">
              🔴 지금 라이브 중인 크루{' '}
              <span className="text-neutral-400 text-lg">(4/17)</span>
            </h3>
            <button className="text-primary-500 hover:underline text-sm">
              더보기 &gt;
            </button>
          </div>
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
          <div className="mt-4 text-center lg:hidden">
            <button className="px-4 py-2 bg-secondary-500 text-neutral-100 font-medium rounded-md hover:bg-secondary-500/90 transition">
              더 많은 라이브 보기
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-3">🕑 지금 오프라인인 크루</h3>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
            {offlineStreamers.map((s) => (
              <OfflineCard key={s.id} name={s.name} avatarUrl={s.avatar} />
            ))}
          </div>
          <div className="mt-3 text-center lg:hidden">
            <button className="px-4 py-2 border border-neutral-600 rounded-md text-neutral-300 font-medium hover:border-neutral-500 hover:text-neutral-200 transition">
              + 더보기
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
