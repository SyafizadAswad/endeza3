import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Endeza',
  description: 'Your AI-powered learning assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 