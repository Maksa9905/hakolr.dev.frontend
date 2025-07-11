'use client'

import { TagSelect } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { PublicationsController } from '../api/api'
import { useMemo } from 'react'
import { usePublicationsListQuery } from '../model/usePublicationsListQuery'

const PublicationsTagsSelect = () => {
  const { query, setQuery } = usePublicationsListQuery()

  const { data: tags } = useQuery({
    queryKey: ['publications-tags'],
    queryFn: PublicationsController.getPublicationsTags,
  })

  const options = useMemo(() => {
    return tags?.filter((tag) => !tag.isMostPopular && !tag.isMostLiked) || []
  }, [tags])

  return (
    <TagSelect
      label="Теги публикаций"
      multiple
      options={options}
      value={(query.tagIds || []) as string[]}
      onChange={(value) => setQuery({ tagIds: value })}
    />
  )
}

export default PublicationsTagsSelect
