
export default function Home() {
  return (
     <main className="min-h-screen bg-neutral-900 text-neutral-100">
      {/* ─────────────── Header (헤더: 다크 그레이) ─────────────── */}
      <header className="bg-neutral-800 border-b border-neutral-700">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:py-6">
          <h1 className="text-lg font-bold text-neutral-100">치지직 스타일</h1>
          <nav className="flex items-center space-x-6">
            <a
              href="#home"
              className="text-neutral-300 hover:text-primary-500 transition-colors"
            >
              홈
            </a>
            <a
              href="#live"
              className="text-neutral-300 hover:text-primary-500 transition-colors"
            >
              실시간
            </a>
            <a
              href="#clips"
              className="text-neutral-300 hover:text-primary-500 transition-colors"
            >
              클립
            </a>
            <a
              href="#settings"
              className="flex items-center text-neutral-300 hover:text-primary-500 transition-colors"
            >
              {/* SVG 아이콘 예시 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v4m0 8v4m8-8h-4M4 12H0m16-4l2.828-2.828M4 20l2.828-2.828M20 20l-2.828-2.828M4 4l2.828 2.828"
                />
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* ─────────────── Hero Section (메인 액션 강조) ─────────────── */}
      <section className="bg-neutral-700 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-50 mb-4">
            심플한 다크 테마 UI 예시
          </h2>
          <p className="text-neutral-300 mb-8">
            대부분의 요소는 무채색으로 유지하고, 버튼만 보라색 액센트로 강조했습니다.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary 액션 버튼 */}
            <a
              href="#get-started"
              className="px-6 py-3 bg-primary-500 text-neutral-100 rounded-md hover:bg-primary-400 transition"
            >
              시작하기
            </a>
            {/* Secondary 텍스트 버튼 (액센트 아이콘만) */}
            <button className="px-6 py-3 border border-neutral-600 text-neutral-300 rounded-md hover:border-primary-500 hover:text-primary-500 transition">
              더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────── Live Thumbnails (실시간 추천) ─────────────── */}
      <section id="live" className="py-16 bg-neutral-900">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-neutral-50 mb-8">실시간 추천</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/** 4개의 썸네일 카드 예시 */}
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-neutral-800 rounded-lg overflow-hidden hover:shadow-sm transition"
              >
                <div className="relative h-40 bg-neutral-600">
                  {/* 썸네일 이미지 대신 placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    썸네일 {idx}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-neutral-100 font-semibold mb-2 truncate">
                    스트리머 이름 {idx}
                  </h4>
                  <p className="text-neutral-400 mb-1 text-sm">카테고리 – PUBG</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-300 text-sm">1.2K명 시청중</span>
                    <span className="text-neutral-300 text-sm">LIVE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Clips Section (클립) ─────────────── */}
      <section id="clips" className="py-16 bg-neutral-800">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-neutral-50 mb-8">클립 모아보기</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/** 3개의 클립 카드 예시 */}
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-neutral-700 rounded-lg overflow-hidden hover:shadow-sm transition"
              >
                <div className="relative h-32 bg-neutral-600">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    클립 {idx}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-neutral-100 font-semibold mb-2 truncate">
                    클립 제목 {idx}
                  </h4>
                  <p className="text-neutral-400 text-sm">조회수: 24K • 2일 전</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Footer (푸터) ─────────────── */}
      <footer className="bg-neutral-900 border-t border-neutral-700">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-neutral-500 text-sm">
            © 2025 My Dark Site. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
