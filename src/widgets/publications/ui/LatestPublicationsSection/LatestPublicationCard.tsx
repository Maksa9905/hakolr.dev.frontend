import { useDateTransform } from '@/entities/publication'
import { StyledCard } from './LatestPublicationSection.styled'

type LatestPublicationCardProps = {
  title: string
  paragraph: string
  datetime: string
}

const LatestPublicationCard = ({
  title,
  paragraph,
  datetime,
}: LatestPublicationCardProps) => {
  const transformedDatetime = useDateTransform(datetime)

  return (
    <StyledCard.Container>
      <StyledCard.Title
        $isUppercase
        component="h3"
      >
        {title}
      </StyledCard.Title>
      <StyledCard.Paragraph
        $isUppercase
        component="p"
      >
        {paragraph}
      </StyledCard.Paragraph>
      <StyledCard.Datetime component="p">
        <time dateTime={datetime}>{transformedDatetime}</time>
      </StyledCard.Datetime>
    </StyledCard.Container>
  )
}

export default LatestPublicationCard
