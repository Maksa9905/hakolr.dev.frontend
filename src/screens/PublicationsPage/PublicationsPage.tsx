import { Header } from '@/widgets/header'
import { PageContainer } from '@/widgets/page-container'
import {
  PublicationSection,
  PublicationsList,
  LatestPublicationsSection,
} from '@/widgets/publications'
import {
  PopularPublicationSection,
  StyledPublicationsFilters,
} from './PublicationsPage.styled'

const PublicationsPage = () => {
  return (
    <>
      <Header
        title="Публикации"
        description="Мои публикации"
      />
      <PageContainer>
        <StyledPublicationsFilters />
        <LatestPublicationsSection />
        <PopularPublicationSection>
          <PublicationSection
            tags={['Популярное']}
            title={'Самый популярный пост'}
            flex={4}
            paragraph={
              'Всем, привет! Я начинающий разработчик и это моя первая публикация. Давайте познакомимся! Меня зовут Макс, здесь я буду делиться своими мыслями и опытом. В этой статье я хочу рассказать о том, как я начал свою карьеру в разработке и какие шаги я предпринял для ее развития. '
            }
          />
          <PublicationSection
            tags={['Самое залайканное']}
            flex={5}
            title={'Самый залайканный пост'}
            paragraph={
              'Всем, привет! Я начинающий разработчик и это моя первая публикация. Давайте познакомимся! Меня зовут Макс, здесь я буду делиться своими мыслями и опытом. В этой статье я хочу рассказать о том, как я начал свою карьеру в разработке и какие шаги я предпринял для ее развития. '
            }
          />
        </PopularPublicationSection>
        <PublicationsList />
      </PageContainer>
    </>
  )
}

export default PublicationsPage
