import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Premium Fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Umarr | Full Stack Developer',
    template: '%s | Umarr',
  },
  description: 'Portfolio of Umarr, a BCA Graduate and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
  keywords: [
    'Umarr', 
    'Full Stack Developer', 
    'BCA Graduate', 
    'PHP', 
    'MySQL', 
    'JavaScript', 
    'Web Development',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Web Designer',
    'UI/UX Developer',
    'Portfolio Website',
  ],
  authors: [{ name: 'Umarr', url: 'https://portfolio-seven-eosin-ltt4mqi6o3.vercel.app' }],
  creator: 'Umarr',
  publisher: 'Umarr',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Umarr | Full Stack Developer',
    description: 'Portfolio of Umarr, a BCA Graduate and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Umarr Portfolio',
    url: 'https://portfolio-seven-eosin-ltt4mqi6o3.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Umarr - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umarr | Full Stack Developer',
    description: 'Portfolio of Umarr, a BCA Graduate and Full Stack Developer specializing in PHP, MySQL, JavaScript, and modern web technologies.',
    images: ['/og-image.png'],
    creator: '@umarr48',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
  alternates: {
    canonical: 'https://portfolio-seven-eosin-ltt4mqi6o3.vercel.app',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icon.svg" />
        
        {/* Meta Tags */}
        <meta name="application-name" content="Umarr Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Umarr" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Open Graph - Additional Tags */}
        <meta property="og:site_name" content="Umarr Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-seven-eosin-ltt4mqi6o3.vercel.app" />
        
        {/* Twitter Card */}
        <meta name="twitter:site" content="@umarr48" />
        <meta name="twitter:creator" content="@umarr48" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body 
        className="font-sans antialiased bg-background text-foreground min-h-screen"
        style={{ 
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, oklch(0.1 0.02 260 / 0.3) 0%, transparent 100%)',
        }}
      >
        {/* Premium Noise Overlay */}
        <div className="noise-overlay fixed inset-0 pointer-events-none z-50 opacity-[0.03]" />
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Analytics - Only in production */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}