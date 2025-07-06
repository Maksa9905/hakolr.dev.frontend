'use client'

import { TagSelect } from '@/shared/ui'
import { useState } from 'react'

const PublicationsTagsSelect = () => {
  const [selectedTag, setSelectedTag] = useState('')

  return (
    <TagSelect
      label="Теги публикаций"
      tags={[
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'CI/CD',
      ]}
      selectedTag={selectedTag}
      onTagSelect={setSelectedTag}
    />
  )
}

export default PublicationsTagsSelect
