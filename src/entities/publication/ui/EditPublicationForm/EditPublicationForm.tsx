'use client'

import { Button } from '@/shared/ui'
import {
  ButtonsContainer,
  EditPublicationFormContainer,
} from './EditPublicationForm.styled'
import {
  $content,
  $description,
  $preview,
  $tags,
  $title,
  publicationDataInitialized,
  PublicationsController,
} from '@/entities/publication'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useMemo, useRef } from 'react'
import { useParams } from 'next/navigation'
import TitleInput from './TitleInput'
import PreviewInput from './PreviewInput'
import DescriptionInput from './DescriptionInput'
import { ContentEditor } from './ContentEditor'
import TagsSelect from './TagsSelect'
import { useRouter } from 'next/navigation'

export const EditPublicationForm = () => {
  const isInitialized = useRef(false)
  const router = useRouter()
  const { id } = useParams()

  const isNew = useMemo(() => id === 'new', [id])

  const { data: publication } = useQuery({
    queryKey: ['publication', id],
    queryFn: () => PublicationsController.getPublication(id as string),
    enabled: !isNew,
  })

  useMemo(() => {
    if (publication && !isInitialized.current) {
      publicationDataInitialized({
        title: publication.title,
        description: publication.description,
        preview: publication.paragraph,
        content: publication.content,
        tags: publication.tagIds,
      })
      isInitialized.current = true
    }
  }, [publication])

  const handleSubmitForm = useCallback(() => {
    if (isNew) {
      PublicationsController.createPublication({
        title: $title.getState(),
        description: $description.getState(),
        paragraph: $preview.getState(),
        content: $content.getState(),
        tagIds: $tags.getState(),
      })

      return router.push('/editing')
    }

    PublicationsController.updatePublication(id as string, {
      title: $title.getState(),
      description: $description.getState(),
      paragraph: $preview.getState(),
      content: $content.getState(),
      tagIds: $tags.getState(),
    })

    router.push('/editing')
  }, [id, isNew, router])

  const handleDeletePublication = useCallback(() => {
    PublicationsController.deletePublication(id as string)
  }, [id])

  return (
    <EditPublicationFormContainer>
      <TagsSelect />
      <TitleInput />
      <PreviewInput />
      <DescriptionInput />
      <ContentEditor />
      <ButtonsContainer $isNew={isNew}>
        <Button onClick={handleSubmitForm}>
          {isNew ? 'Создать' : 'Изменить'}
        </Button>
        {!isNew && (
          <Button
            onClick={handleDeletePublication}
            variant="outlined"
          >
            Удалить
          </Button>
        )}
      </ButtonsContainer>
    </EditPublicationFormContainer>
  )
}
