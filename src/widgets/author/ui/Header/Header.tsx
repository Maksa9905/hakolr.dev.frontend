import S from './Header.styled'

const Header = () => {
  return (
    <S.Container>
      <S.Title component="h1">Максим Гайворонский</S.Title>
      <S.Description component="p">
        Frontend-разработчик · Кавер-исполнитель
      </S.Description>
    </S.Container>
  )
}

export default Header
