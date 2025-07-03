import {
  PublicationSectionContainer,
  PublicationSectionTitle,
  PublicationSectionParagraph,
  PublicationSectionLink,
} from './PublicationSection.styled'

type PublicationSectionProps = {
  className?: string
  tags: string[]
  title: string
  paragraph: string
  flex?: number
}

const PublicationSection = ({
  className,
  tags,
  title,
  flex,
  paragraph,
}: PublicationSectionProps) => {
  return (
    <PublicationSectionContainer
      className={className}
      component="article"
      title={tags.join(' · ')}
      $flex={flex}
    >
      <PublicationSectionTitle
        $trimmedTo="word"
        component="h3"
      >
        <PublicationSectionLink href="/publications/1">
          {title}
        </PublicationSectionLink>
      </PublicationSectionTitle>
      <PublicationSectionParagraph>{paragraph}</PublicationSectionParagraph>
    </PublicationSectionContainer>
  )
}

export default PublicationSection
