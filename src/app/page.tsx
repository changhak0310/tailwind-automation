import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import StreamCard from '@/components/StreamCard'
import Footer from '@/components/Footer'

const streamers = Array.from({ length: 17 }).map((_, i) => ({
  id: String(i + 1),
  name: `스트리머 ${i + 1}`,
  thumbnail: '/images/thumbnail-placeholder.png',
  profile: '/images/avatar-placeholder.png',
  category: '게임',
  viewers: Math.floor(Math.random() * 10000) + 1,
  isLive: true,
}))

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">주요 스트리머</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {streamers.map((s) => (
                <StreamCard
                  key={s.id}
                  id={s.id}
                  streamerName={s.name}
                  thumbnailUrl={s.thumbnail}
                  profileUrl={s.profile}
                  category={s.category}
                  viewers={s.viewers}
                  isLive={s.isLive}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
