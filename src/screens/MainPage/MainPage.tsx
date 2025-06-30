'use client'

import {
  AboutMeSection,
  AboutSiteSection,
  DeveloperSection,
  Header,
  MusicSection,
} from '@/widgets/author'
import { LatestPostsSection } from '@/widgets/posts'
import { MainContainer } from './MainPage.styled'

const MainPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <DeveloperSection />
        <MusicSection />
        <AboutMeSection />
        <AboutSiteSection />
        <LatestPostsSection />
      </MainContainer>
    </>
  )
}

export default MainPage
