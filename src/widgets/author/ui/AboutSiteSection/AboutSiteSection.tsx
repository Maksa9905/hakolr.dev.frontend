import { ContrastText } from '@/shared/ui'
import {
  AboutSiteSectionContainer,
  AboutSiteSectionParagraph,
} from './AboutSiteSection.styled'

const AboutSiteSection = () => {
  return (
    <AboutSiteSectionContainer
      flex={7.25}
      title="О сайте"
    >
      <AboutSiteSectionParagraph>
        Этот сайт своего рода <ContrastText>протест против</ContrastText>{' '}
        привычных <ContrastText>телеграмм каналов</ContrastText> - для меня
        такой формат ведения личного блога не подходит.
      </AboutSiteSectionParagraph>
      <AboutSiteSectionParagraph>
        Я хочу дифференцировать контент для читателей:
      </AboutSiteSectionParagraph>
      <AboutSiteSectionParagraph>
        Те, кто интересуется музыкой читайте раздел{' '}
        <ContrastText>о музыке.</ContrastText>
      </AboutSiteSectionParagraph>
      <AboutSiteSectionParagraph>
        Кому нравится разработке - заходите в раздел{' '}
        <ContrastText>о разработке.</ContrastText>
      </AboutSiteSectionParagraph>
      <AboutSiteSectionParagraph>
        А тех, кто просто хочет почитать о тягостях жизни обычного студента из
        НН, заходите в <ContrastText>об авторе.</ContrastText>
      </AboutSiteSectionParagraph>
      {/* <AboutSiteSectionParagraph>
        Надеюсь, смогу поделиться ценными советами и не очень большим жизненным
        опытом.
      </AboutSiteSectionParagraph> */}
    </AboutSiteSectionContainer>
  )
}

export default AboutSiteSection
