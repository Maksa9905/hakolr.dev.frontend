'use client'

import { Input } from '@/shared/ui'
import { useState } from 'react'

type PublicationSearchInputProps = {
  className?: string
}

const PublicationSearchInput = ({ className }: PublicationSearchInputProps) => {
  const [value, setValue] = useState('')

  return (
    <Input
      className={className}
      label="Поиск"
      placeholder="Best Practice создания кастомных алертов"
      value={value}
      onChange={setValue}
    />
  )
}

export default PublicationSearchInput
