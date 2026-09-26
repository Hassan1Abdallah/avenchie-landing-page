import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SitePreferencesProvider } from '@/lib/site-preferences'
import './globals.css'

export const metadata: Metadata = {
  title: 'حوّل عملك بالذكاء الاصطناعي | وكالة أتمتة الذكاء الاصطناعي',
  description: 'نحن نصمم وننفذ حلول أتمتة متكاملة بالذكاء الاصطناعي لزيادة كفاءتك، مبيعاتك، ورضا عملائك، مع عائد استثمار ملموس .',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logoAutoagen.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logoAutoagen.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logoAutoagen.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logoAutoagen.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff4b1b' },
    { media: '(prefers-color-scheme: dark)', color: '#242424' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="light bg-background scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        <SitePreferencesProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SitePreferencesProvider>
      </body>
    </html>
  )
}
