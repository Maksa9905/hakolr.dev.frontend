import { ReactNode } from 'react'
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from './Section.styled'

type SectionProps = {
  title: string
  children: ReactNode
  flex?: number
  className?: string
}

const Section = ({ title, flex, children, className }: SectionProps) => {
  return (
    <SectionContainer
      $flex={flex}
      className={className}
    >
      <SectionTitle component="h2">{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  )
}

export default Section
