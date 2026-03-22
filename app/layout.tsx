import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '美容室（仮） | 古民家でくつろぎの時間を',
  description: '古民家を改装したアットホームな美容室。靴を脱いで上がって、くつろぎの時間をお過ごしください。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
