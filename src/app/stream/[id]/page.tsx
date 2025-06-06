
export default function StreamPage({ params }: { params: { id: string } }) {
  const { id } = params
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold">스트리머 {id}</h1>
      <p className="text-neutral-300">프로필과 라이브 스트림 영역이 여기에 표시됩니다.</p>
    </main>
  )
}
