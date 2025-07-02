'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const useNavigationLinks = () => {
  const pathname = usePathname()

  const links = useMemo(
    () => [
      {
        label: 'Главная',
        href: '/',
        isActive: pathname === '/',
      },
      {
        label: 'Публикации',
        href: '/publications',
        isActive: pathname === '/publications',
      },
      {
        label: 'Картиночки',
        href: '/pictures',
        isActive: pathname === '/pictures',
      },
    ],
    [pathname],
  )

  return links
}

export default useNavigationLinks
