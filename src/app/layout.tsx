import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/shared/lib/registry'
import CommonLayout from '@/screens/RootLayout'

import '@/application/global.css'

export const metadata: Metadata = {
  title: 'Максим Гайворонский',
  description: 'Разработчик веб-интерфейсов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: 'Martian Grotesk' }}>
        <StyledComponentsRegistry>
          <CommonLayout>{children}</CommonLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
