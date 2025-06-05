import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'neutral-900': 'var(--color-neutral-900)',
        'neutral-800': 'var(--color-neutral-800)',
        'neutral-700': 'var(--color-neutral-700)',
        'neutral-600': 'var(--color-neutral-600)',
        'neutral-500': 'var(--color-neutral-500)',
        'neutral-400': 'var(--color-neutral-400)',
        'neutral-300': 'var(--color-neutral-300)',
        'neutral-200': 'var(--color-neutral-200)',
        'neutral-100': 'var(--color-neutral-100)',
        'neutral-50': 'var(--color-neutral-50)',
        'primary-500': 'var(--color-primary-500)',
      },
      spacing: {
        1: 'var(--spacing-1)',
        2: 'var(--spacing-2)',
        3: 'var(--spacing-3)',
        4: 'var(--spacing-4)',
        6: 'var(--spacing-6)',
        8: 'var(--spacing-8)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [],
}

export default config
