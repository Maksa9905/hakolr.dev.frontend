import { Section, Typography } from '@/shared/ui'
import styled from 'styled-components'

const Container = styled(Section)`
  flex: 7.65;
`

const SkillsTypography = styled(Typography)`
  font-size: 12px;
  line-height: 13px;
  min-width: 370px;
  color: ${({ theme }) => theme.palette.gray};
  text-transform: uppercase;
  text-align: justify;

  @media (max-width: 480px) {
    min-width: 250px;
  }
`

const DeveloperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    flex-direction: row;
    gap: 8px;
  }
`

const StyledDeveloperSection = {
  Container,
  SkillsTypography,
  DeveloperInfo,
}

export default StyledDeveloperSection
