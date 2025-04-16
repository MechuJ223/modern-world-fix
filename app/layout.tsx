import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Modern World',
  description: 'Letnie akcesoria w nowoczesnym stylu',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
