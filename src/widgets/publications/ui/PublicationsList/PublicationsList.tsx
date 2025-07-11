'use client'

import { PublicationSection } from '@/widgets/publications'
import { PublicationsListContainer } from './PublicationsList.styled'
import { PublicationsController } from '@/entities/publication/api/api'
import { useQuery } from '@tanstack/react-query'
import {
  mapPublicationParams,
  usePublicationsListQuery,
} from '@/entities/publication'
import { Typography } from '@/shared/ui'

const PublicationsList = () => {
  const { query } = usePublicationsListQuery()

  const { data: publications } = useQuery({
    queryKey: ['publications', mapPublicationParams(query)],
    queryFn: () =>
      PublicationsController.getPublications(mapPublicationParams(query)),
  })

  if (publications?.data.length === 0) {
    return <Typography>Публикации не найдены</Typography>
  }

  return (
    <PublicationsListContainer>
      {publications?.data.map((publication) => (
        <PublicationSection
          key={publication.id}
          {...publication}
        />
      ))}
    </PublicationsListContainer>
  )
}

export default PublicationsList
