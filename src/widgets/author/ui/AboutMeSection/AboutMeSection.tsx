import { ContrastText } from '@/shared/ui'
import S from './AboutMeSection.styled'
import { useMediaQuery } from 'react-responsive'

const AboutMeSection = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <S.Container title="О себе">
      <S.Paragraph component="p">
        <ContrastText>Привет, я Макс.</ContrastText> Кнопкокрас и формошлёп из
        Нижнего Новгорода. Пилю веб-интерфейсы на реакте. Хочу научиться делать
        крутые интересные дизайны. Люблю эффектор и терпеть не могу редакс.
      </S.Paragraph>
      <S.Image
        src="/photo.jpg"
        alt="About Me"
        width={220}
        height={220}
      />
      <S.Paragraph component="p">
        Считаю, что у каждого уважающего себя фронтендера должен быть
        сайт-визитка. Разрабы вкладывают столько сил и времени, но всегда
        остаются за кулисами.
      </S.Paragraph>

      <S.Paragraph component="p">
        Поэтому, представляю вашему вниманию: <br />
        <ContrastText>{isMobile ? '⇡' : '⇠'} ВОТ ОН Я</ContrastText>
      </S.Paragraph>

      <S.Paragraph>
        В свободное время пишу попсовый рок под электруху, в том числе на заказ.
        Играю на <ContrastText>JACKSON JS22</ContrastText> (нет, это не джава
        скрипт).
      </S.Paragraph>
    </S.Container>
  )
}

export default AboutMeSection
