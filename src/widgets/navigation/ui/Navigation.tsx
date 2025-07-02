'use client'

import Link from 'next/link'
import { StyledNavigation } from './Navigation.styled'
import { useNavigationLinks } from '@/entities/navigation'

type NavigationProps = {
  className?: string
  onClick?: (href: string) => void
}

const Navigation = ({ className, onClick }: NavigationProps) => {
  const links = useNavigationLinks()

  return (
    <StyledNavigation.Container className={className}>
      {links.map((link) => (
        <StyledNavigation.MenuItem
          key={link.href}
          $active={link.isActive}
        >
          <Link
            href={link.href}
            onClick={() => onClick?.(link.href)}
          >
            {link.label}
          </Link>
        </StyledNavigation.MenuItem>
      ))}
    </StyledNavigation.Container>
  )
}

export default Navigation
