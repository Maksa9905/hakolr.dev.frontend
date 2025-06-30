import { InfoTitle, Section } from '@/shared/ui'
import styled from 'styled-components'

export const MusicSectionContainer = styled(Section)`
  min-width: 500px;
`

export const MusicSectionInfoTitle = styled(InfoTitle)`
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`
