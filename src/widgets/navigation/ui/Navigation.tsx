'use client'

import Link from 'next/link'
import { NavigationContainer, NavigationItem } from './Navigation.styled'
import { useNavigationLinks } from '@/widgets/navigation'

type NavigationProps = {
  className?: string
  onClick?: (href: string) => void
}

const Navigation = ({ className, onClick }: NavigationProps) => {
  const links = useNavigationLinks()

  return (
    <NavigationContainer className={className}>
      {links.map(({ label, href, isActive }) => (
        <NavigationItem
          key={href}
          $active={isActive}
        >
          <Link
            href={href}
            onClick={() => onClick?.(href)}
          >
            {label}
          </Link>
        </NavigationItem>
      ))}
    </NavigationContainer>
  )
}

export default Navigation
