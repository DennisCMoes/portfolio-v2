import '@/styles/globals.css'

import { Metadata } from 'next'

import RootLayoutPage from '@/components/staticPages/rootLayout-page'
import { Children } from '@/types'

export const metadata: Metadata = {
  viewport: { width: 'device-width', initialScale: 1 },
  icons: { icon: '/favicon.ico', apple: '/favicon.ico' },
}

export default function RootLayout({ children }: Children) {
  return <RootLayoutPage>{children}</RootLayoutPage>
}
