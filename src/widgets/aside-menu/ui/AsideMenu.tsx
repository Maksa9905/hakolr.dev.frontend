import { useUnit } from 'effector-react'
import { $asideMenuOpened, toggleAsideMenu } from '../model/model'
import {
  StyledAsideMenu,
  StyledNavigation,
  MenuToggleButton,
} from './AsideMenu.styled'
import { MenuIcon } from '@/shared/icons'

const AsideMenu = () => {
  const isOpen = useUnit($asideMenuOpened)
  const toggleMenu = useUnit(toggleAsideMenu)

  return (
    <StyledAsideMenu
      $isOpen={isOpen}
      isOpen={isOpen}
      onClose={toggleMenu}
    >
      <StyledNavigation onClick={toggleMenu} />
      {!isOpen && (
        <MenuToggleButton onClick={toggleMenu}>
          <MenuIcon />
        </MenuToggleButton>
      )}
    </StyledAsideMenu>
  )
}

export default AsideMenu
