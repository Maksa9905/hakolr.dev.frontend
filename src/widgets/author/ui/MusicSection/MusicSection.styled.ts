import { InfoTitle, Section } from '@/shared/ui'
import { SectionContent } from '@/shared/ui/Section/Section.styled'
import styled from 'styled-components'

const Container = styled(Section)`
  flex: 10;

  ${SectionContent} {
    @media (max-width: 1080px) {
      gap: 8px;
    }
  }
`

const MusicInfoTitle = styled(InfoTitle)`
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

const StyledMusicSection = {
  Container,
  MusicInfoTitle,
}

export default StyledMusicSection
