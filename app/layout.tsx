import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abu Rayhan | Software Quality & UX',
  description: 'Portfolio of Abu Rayhan, a Software Quality Assurance Engineer and UI/UX Consultant.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
