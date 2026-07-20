import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'حوّل عملك بالذكاء الاصطناعي | وكالة أتمتة الذكاء الاصطناعي',
  description: 'نحن نصمم وننفذ حلول أتمتة متكاملة بالذكاء الاصطناعي لزيادة كفاءتك، مبيعاتك، ورضا عملائك، مع عائد استثمار ملموس .',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Avenchie_icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Avenchie_icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Logo_Avenchie.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Avenchie_icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563EB' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="light bg-background scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
