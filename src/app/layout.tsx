import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/shared/lib/registry'
import CommonLayout from '@/screens/RootLayout'
import { RenderScanScript } from '@/shared/ui/RenderScanScript/RenderScanScript'

import '@/application/global.css'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Максим Гайворонский',
  description: 'Разработчик веб-интерфейсов',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: 'Martian Grotesk' }}>
        <StyledComponentsRegistry>
          <CommonLayout>{children}</CommonLayout>
          <RenderScanScript />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
