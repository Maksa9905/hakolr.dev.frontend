import {
  AboutMeSection,
  AboutSiteSection,
  DeveloperSection,
  MusicSection,
} from '@/widgets/author'
import { LatestPublicationsSection } from '@/widgets/publications'
import { Header } from '@/widgets/header'
import { PageContainer } from '@/widgets/page-container'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { prefetchMainPage } from '../../app/prefetch'

const MainPage = async () => {
  const queryClient = await prefetchMainPage()

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Header
        title="Максим Гайворонский"
        description="Frontend-разработчик · Кавер-исполнитель"
      />
      <PageContainer>
        <DeveloperSection />
        <MusicSection />
        <AboutMeSection />
        <AboutSiteSection />
        <LatestPublicationsSection />
      </PageContainer>
    </HydrationBoundary>
  )
}

export default MainPage
