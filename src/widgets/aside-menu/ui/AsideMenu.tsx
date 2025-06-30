import { useUnit } from 'effector-react'
import { $asideMenuOpened, toggleAsideMenu } from '../model/model'
import { AsideMenu as AsideMenuComponent } from '@/shared/ui'
import { StyledNavigation } from './AsideMenu.styled'

const AsideMenu = () => {
  const isOpen = useUnit($asideMenuOpened)
  const toggleMenu = useUnit(toggleAsideMenu)

  return (
    <AsideMenuComponent
      isOpen={isOpen}
      onClose={toggleMenu}
    >
      <StyledNavigation onClick={toggleMenu} />
    </AsideMenuComponent>
  )
}

export default AsideMenu
