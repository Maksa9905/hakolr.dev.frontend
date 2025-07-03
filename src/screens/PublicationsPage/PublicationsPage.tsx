import { Header } from '@/widgets/header'
import { PageContainer } from '@/widgets/page-container'
import { PublicationSection, PublicationsList } from '@/widgets/publications'
import LatestPublicationsSection from '@/widgets/publications/ui/LatestPublicationsSection'

const PublicationsPage = () => {
  return (
    <>
      <Header
        title="Публикации"
        description="Мои публикации"
      />
      <PageContainer>
        <LatestPublicationsSection />
        <PublicationSection
          tags={['Популярное']}
          title={'Самый популярный пост'}
          paragraph={
            'Всем, привет! Я начинающий разработчик и это моя первая публикация. Давайте познакомимся! Меня зовут Макс, здесь я буду делиться своими мыслями и опытом. В этой статье я хочу рассказать о том, как я начал свою карьеру в разработке и какие шаги я предпринял для ее развития. '
          }
        />
        <PublicationsList />
      </PageContainer>
    </>
  )
}

export default PublicationsPage
