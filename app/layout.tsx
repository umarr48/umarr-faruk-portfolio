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
  title: 'Umarr Faruk | Full Stack Developer',
  description: 'Portfolio of Umarr Faruk, a Final Year BCA Student and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
  keywords: ['developer', 'full stack', 'PHP', 'MySQL', 'JavaScript', 'web development', 'BCA student'],
  authors: [{ name: 'Umarr Faruk' }],
  openGraph: {
    title: 'Umarr Faruk | Full Stack Developer',
    description: 'Portfolio of Umarr Faruk, a Final Year BCA Student and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umarr Faruk | Full Stack Developer',
    description: 'Final Year BCA Student and Full Stack Developer.',
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
