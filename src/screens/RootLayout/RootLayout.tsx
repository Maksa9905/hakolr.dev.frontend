'use client'

import { ReactNode } from 'react'
import { StyledFooter, StyledNavigation } from './RootLayout.styled'
import { AsideMenu } from '@/widgets/aside-menu'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <StyledNavigation />
      {children}
      <StyledFooter />
      <AsideMenu />
    </>
  )
}

export default RootLayout
