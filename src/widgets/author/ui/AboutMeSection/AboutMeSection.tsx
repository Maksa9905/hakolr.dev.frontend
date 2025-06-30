import { ContrastText } from '@/shared/ui'
import {
  AboutMeSectionContainer,
  AboutMeSectionImage,
  AboutMeSectionParagraph,
} from './AboutMeSection.styled'
import { useMediaQuery } from 'react-responsive'

const AboutMeSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <AboutMeSectionContainer
      flex={10}
      title="О себе"
    >
      <AboutMeSectionParagraph component="p">
        <ContrastText>Привет, я Макс.</ContrastText> Кнопкокрас и формошлёп из
        Нижнего Новгорода. Пилю веб-интерфейсы на реакте. Хочу научиться делать
        крутые интересные дизайны. Люблю эффектор и терпеть не могу редакс.
      </AboutMeSectionParagraph>
      <AboutMeSectionImage
        src="/photo.jpg"
        alt="About Me"
        width={220}
        height={220}
      />
      <AboutMeSectionParagraph component="p">
        Считаю, что у каждого уважающего себя фронтендера должен быть
        сайт-визитка. Разрабы вкладывают столько сил и времени, но всегда
        остаются за кулисами.
      </AboutMeSectionParagraph>

      <AboutMeSectionParagraph component="p">
        Поэтому, представляю вашему вниманию: <br />
        <ContrastText>{isMobile ? '⇡' : '⇠'} ВОТ ОН Я</ContrastText>
      </AboutMeSectionParagraph>

      <AboutMeSectionParagraph>
        В свободное время пишу попсовый рок под электруху, в том числе на заказ.
        Играю на <ContrastText>jackson js22</ContrastText> (нет, это не джава
        скрипт).
      </AboutMeSectionParagraph>
    </AboutMeSectionContainer>
  )
}

export default AboutMeSection
