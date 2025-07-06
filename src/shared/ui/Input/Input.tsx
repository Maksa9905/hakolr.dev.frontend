import { useId } from 'react'
import { StyledInput } from './Input.styled'

import { StyledInputContainer, StyledLabel } from './Input.styled'

type InputProps = {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  className?: string
}

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  const id = useId()

  return (
    <StyledInputContainer className={className}>
      <StyledLabel
        as="label"
        htmlFor={id}
      >
        {label}
      </StyledLabel>
      <StyledInput
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </StyledInputContainer>
  )
}

export default Input
