'use client'

import {
  AboutMeSection,
  AboutSiteSection,
  DeveloperSection,
  Header,
  MusicSection,
} from '@/widgets/author'
import { LatestPublicationSection } from '@/widgets/publications'
import S from './MainPage.styled'

const MainPage = () => {
  return (
    <>
      <Header />
      <S.Container>
        <DeveloperSection />
        <MusicSection />
        <AboutMeSection />
        <AboutSiteSection />
        <LatestPublicationSection />
      </S.Container>
    </>
  )
}

export default MainPage
