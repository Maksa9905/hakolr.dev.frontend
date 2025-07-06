'use client'

import { useCallback } from 'react'
import {
  TagSelectButton,
  TagSelectContainer,
  TagSelectLabel,
  TagsListContainer,
} from './TagSelect.styled'

type TagSelectProps = {
  label: string
  tags: string[]
  selectedTag: string
  onTagSelect: (tag: string) => void
}

const TagSelect = ({
  tags,
  selectedTag,
  onTagSelect,
  label,
}: TagSelectProps) => {
  const handleTagSelect = useCallback(
    (tag: string) => {
      if (tag === selectedTag) {
        onTagSelect('')
        return
      }

      onTagSelect(tag)
    },
    [onTagSelect, selectedTag],
  )

  return (
    <TagSelectContainer>
      <TagSelectLabel as="label">{label}</TagSelectLabel>
      <TagsListContainer>
        {tags.map((tag) => (
          <TagSelectButton
            key={tag}
            $selected={selectedTag === tag}
            onClick={() => handleTagSelect(tag)}
          >
            {tag}
          </TagSelectButton>
        ))}
      </TagsListContainer>
    </TagSelectContainer>
  )
}

export default TagSelect
