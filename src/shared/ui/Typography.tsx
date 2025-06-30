'use client'

import { createElement, HTMLElementType } from 'react'
import styled from 'styled-components'

export type TypographyProps = {
  component?: HTMLElementType
  className?: string
  isUppercase?: boolean
  children: React.ReactNode
}

const Typography = ({
  component = 'p',
  children,
  ...props
}: TypographyProps) => {
  return createElement(component, props, children)
}

const StyledTypography = styled(Typography)<{ $isUppercase?: boolean }>`
  margin: 0;
  padding: 0;

  &::before {
    content: '';
    display: table;
    margin-block-end: ${({ $isUppercase }) =>
      $isUppercase
        ? 'calc(-0.1em - (1lh - 1em) / 2)'
        : 'calc(-0.3em - (1lh - 1em) / 2)'};
  }

  &::after {
    content: '';
    display: table;
    margin-block-start: ${({ $isUppercase }) =>
      $isUppercase
        ? 'calc(-0.1em - (1lh - 1em) / 2)'
        : 'calc(-0.1em - (1lh - 1em) / 2)'};
  }
`

export default StyledTypography
