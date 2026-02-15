import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mohammad Al-Mokdad - Full Stack .NET Developer | Backend Systems Engineer',
  description: 'Mohammad Al-Mokdad - Full Stack .NET Developer specializing in ASP.NET Core systems, database architecture, and secure backend services. Building scalable platforms with clean architecture principles.',
  keywords: [
    '.NET Developer',
    'ASP.NET Core',
    'Backend Developer',
    'Full Stack Developer',
    'Beirut',
    'Lebanon',
    'Software Engineer',
    'Full Stack Developer',
    'MSSQL',
    'Clean Architecture',
    'REST APIs',
  ],
  authors: [{ name: 'Mohammad Al-Mokdad' }],
  openGraph: {
    title: 'Mohammad Al-Mokdad - Full Stack .NET Developer',
    description: 'Full Stack .NET Developer specializing in scalable backend systems and clean architecture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Al-Mokdad - Full Stack .NET Developer',
    description: 'Full Stack .NET Developer specializing in scalable backend systems',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}