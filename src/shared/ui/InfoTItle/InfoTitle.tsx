import { ReactNode } from 'react'
import {
  InfoTitleContainer,
  InfoTitleLabel,
  InfoTitleValue,
} from './InfoTitle.styled'

type InfoTitleProps = {
  value: string
  label?: string
  children?: ReactNode
  className?: string
}

const InfoTitle = ({ value, label, children, className }: InfoTitleProps) => {
  return (
    <InfoTitleContainer className={className}>
      <InfoTitleValue $isUppercase>{value}</InfoTitleValue>
      {children && <InfoTitleLabel>{children}</InfoTitleLabel>}
      <InfoTitleLabel>{label}</InfoTitleLabel>
    </InfoTitleContainer>
  )
}

export default InfoTitle
