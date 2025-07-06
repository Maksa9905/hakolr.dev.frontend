'use client'

import { Section, Typography } from '@/shared/ui'
import Link from 'next/link'
import styled, { css } from 'styled-components'

export const PublicationSectionContainer = styled(Section)<{ $flex?: number }>`
  min-width: 400px;
  ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}

  @media (max-width: 480px) {
    min-width: 250px;
  }
`

export const PublicationSectionTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
`

export const PublicationSectionLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black};

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.palette.primary};
  }
`

export const PublicationSectionParagraph = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
`
