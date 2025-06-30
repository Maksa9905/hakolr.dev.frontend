import { useDateTransform } from '@/widgets/posts'
import {
  LatestPostItemDatetime,
  LatestPostItemParagraph,
  LatestPostItemTitle,
  LatestPostsItemContainer,
} from './LatestPostsSection.styled'

type LatestPostItemProps = {
  title: string
  paragraph: string
  datetime: string
}

const LatestPostItem = ({
  title,
  paragraph,
  datetime,
}: LatestPostItemProps) => {
  const transformedDatetime = useDateTransform(datetime)

  return (
    <LatestPostsItemContainer>
      <LatestPostItemTitle
        $isUppercase
        component="h3"
      >
        {title}
      </LatestPostItemTitle>
      <LatestPostItemParagraph
        $isUppercase
        component="p"
      >
        {paragraph}
      </LatestPostItemParagraph>
      <LatestPostItemDatetime component="p">
        <time dateTime={datetime}>{transformedDatetime}</time>
      </LatestPostItemDatetime>
    </LatestPostsItemContainer>
  )
}

export default LatestPostItem
