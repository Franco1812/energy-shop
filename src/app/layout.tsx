import type { Metadata } from 'next';
import { inter } from '@/config/fonts';



import './globals.css';



export const metadata: Metadata = {
  title: 'Energy Shop | Bebidas Energéticas',
  description: 'La mejor tienda de bebidas energéticas. Monster, Red Bull, Bang y más.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
