'use client'

import {
  AboutMeSection,
  AboutSiteSection,
  DeveloperSection,
  MusicSection,
} from '@/widgets/author'
import { LatestPublicationSection } from '@/widgets/publications'
import { Header } from '@/widgets/header'
import { PageContainer } from '@/widgets/page-container'

const MainPage = () => {
  return (
    <>
      <Header
        title="Максим Гайворонский"
        description="Frontend-разработчик · Кавер-исполнитель"
      />
      <PageContainer>
        <DeveloperSection />
        <MusicSection />
        <AboutMeSection />
        <AboutSiteSection />
        <LatestPublicationSection />
      </PageContainer>
    </>
  )
}

export default MainPage
