'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  gap: 8px;

  display: grid;
  grid-template-columns: 28px 28px auto;
  grid-template-rows: repeat(2, 1fr);
`

export const StyledLink = styled(Link)<{ $column: string; $row: string }>`
  grid-column: ${({ $column }) => $column};
  grid-row: ${({ $row }) => $row};
`
