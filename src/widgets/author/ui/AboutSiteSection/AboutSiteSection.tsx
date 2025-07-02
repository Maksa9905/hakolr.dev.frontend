import { ContrastText } from '@/shared/ui'
import S from './AboutSiteSection.styled'

const AboutSiteSection = () => {
  return (
    <S.Container title="О сайте">
      <S.Paragraph>
        Этот сайт своего рода <ContrastText>протест против</ContrastText>{' '}
        привычных <ContrastText>телеграмм каналов</ContrastText> - для меня
        такой формат ведения личного блога не подходит.
      </S.Paragraph>
      <S.Paragraph>Я хочу дифференцировать контент для читателей:</S.Paragraph>
      <S.Paragraph>
        Те, кто интересуется музыкой читайте раздел{' '}
        <ContrastText>о музыке.</ContrastText>
      </S.Paragraph>
      <S.Paragraph>
        Кому нравится разработке - заходите в раздел{' '}
        <ContrastText>о разработке.</ContrastText>
      </S.Paragraph>
      <S.Paragraph>
        А тех, кто просто хочет почитать о тягостях жизни обычного студента из
        НН, заходите в <ContrastText>об авторе.</ContrastText>
      </S.Paragraph>
    </S.Container>
  )
}

export default AboutSiteSection
