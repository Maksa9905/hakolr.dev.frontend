import { ReactNode, useEffect, useState } from 'react'
import {
  AsideMenuBackdrop,
  AsideMenuButton,
  AsideMenuContainer,
} from './AsideMenu.styled'
import { createPortal } from 'react-dom'
import { MenuIcon } from '@/shared/icons'

type AsideMenuProps = {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const AsideMenu = ({
  className,
  children,
  isOpen,
  onClose,
}: AsideMenuProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const backdrop = createPortal(
    <AsideMenuBackdrop
      onClick={onClose}
      $isOpen={isOpen}
    />,
    document.body,
    'aside-menu-backdrop',
  )

  return (
    <>
      <AsideMenuContainer
        className={className}
        $isOpen={isOpen}
      >
        {children}
        {backdrop}
      </AsideMenuContainer>
      <AsideMenuButton onClick={onClose}>
        <MenuIcon />
      </AsideMenuButton>
    </>
  )
}

export default AsideMenu
