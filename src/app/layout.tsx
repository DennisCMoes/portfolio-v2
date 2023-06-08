import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'

import RootLayoutPage from '@/components/staticPages/rootLayout-page'

export const metadata: Metadata = {
  viewport: { width: 'device-width', initialScale: 1 },
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <RootLayoutPage>{children}</RootLayoutPage>
}
