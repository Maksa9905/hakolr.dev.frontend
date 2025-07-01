'use client'

import { Typography } from '@/shared/ui'
import styled from 'styled-components'

export const SectionContainer = styled.section<{ $flex?: number }>`
  ${({ $flex }) => $flex && `flex: ${$flex};`}
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.palette.black};
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 1080px) {
    gap: 8px;
  }
`

export const SectionTitle = styled(Typography)`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.palette.gray};
`
