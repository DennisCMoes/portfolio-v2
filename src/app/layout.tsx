import Navbar from '@/components/layout/navbar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="autumn">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
