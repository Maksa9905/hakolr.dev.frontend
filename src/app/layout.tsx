import { Providers } from './providers'

import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/shared/lib/registry'
import CommonLayout from '@/screens/RootLayout'
import { RenderScanScript } from '@/shared/ui/RenderScanScript/RenderScanScript'

import '@/application/global.css'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Максим Гайворонский',
  description: 'Разработчик веб-интерфейсов',
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: 'Martian Grotesk' }}>
        <Providers>
          <StyledComponentsRegistry>
            <CommonLayout>{children}</CommonLayout>
            <RenderScanScript />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  )
}
