import { useDateTransform } from '@/entities/publication'
import {
  CardContainer,
  CardDatetime,
  CardParagraph,
  CardTitle,
} from './LatestPublicationSection.styled'

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
    <CardContainer>
      <CardTitle
        $trimmedTo="word"
        component="h3"
      >
        {title}
      </CardTitle>
      <CardParagraph
        $trimmedTo="word"
        component="p"
      >
        {paragraph}
      </CardParagraph>
      <CardDatetime component="p">
        <time dateTime={datetime}>{transformedDatetime}</time>
      </CardDatetime>
    </CardContainer>
  )
}

export default LatestPublicationCard
