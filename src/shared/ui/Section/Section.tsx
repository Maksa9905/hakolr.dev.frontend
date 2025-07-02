import { ReactNode } from 'react'
import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from './Section.styled'

type SectionProps = {
  title: string
  children: ReactNode
  className?: string
}

const Section = ({ title, children, className }: SectionProps) => {
  return (
    <SectionContainer className={className}>
      <SectionTitle component="h2">{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  )
}

export default Section
