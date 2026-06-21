import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Umarr | Full Stack Developer',
  description: 'Portfolio of Umarr, a BCA Graduate and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
  keywords: ['Umarr', 'Full Stack Developer', 'BCA Graduate', 'PHP', 'MySQL', 'JavaScript', 'Web Development'],
  authors: [{ name: 'Umarr' }],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: 'Umarr | Full Stack Developer',
    description: 'Portfolio of Umarr, a BCA Graduate and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umarr | Full Stack Developer',
    description: 'Portfolio of Umarr, a BCA Graduate and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
