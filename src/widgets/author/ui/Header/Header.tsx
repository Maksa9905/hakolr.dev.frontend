import {
  HeaderContainer,
  HeaderDescription,
  HeaderTitle,
} from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle component="h1">Максим Гайворонский</HeaderTitle>
      <HeaderDescription component="p">
        Frontend-разработчик · Кавер-исполнитель
      </HeaderDescription>
    </HeaderContainer>
  )
}

export default Header
