'use client'

import { Section } from '@/shared/ui'
import { Typography } from '@/shared/ui'
import { SectionContent } from '@/shared/ui/Section'
import styled from 'styled-components'

const Container = styled(Section)`
  ${SectionContent} {
    justify-content: flex-start;
    gap: 28px;
  }

  flex: 7.25;
  min-width: 390px;

  @media (max-width: 480px) {
    min-width: 250px;
  }
`

const Paragraph = styled(Typography)`
  font-size: 16px;
  line-height: 20px;
`

const StyledAboutSiteSection = {
  Container,
  Paragraph,
}

export default StyledAboutSiteSection
