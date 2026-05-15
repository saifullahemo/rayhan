import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abu Rayhan | SQA Engineer and UI/UX Consultant',
  description: 'Portfolio of Abu Rayhan, an SQA Engineer and UI/UX Consultant focused on reliable, usable digital products.',
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
