import Button from '@/components/Button'
import Card from '@/components/Card'

export const metadata = {
  title: 'Design System',
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 p-8 space-y-8">
      <h1 className="text-3xl font-bold">Design System</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Card</h2>
        <Card>
          <p className="text-neutral-300">This is a simple card component.</p>
        </Card>
      </section>
    </main>
  )
}
