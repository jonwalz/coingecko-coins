import styled from '@emotion/styled'
import Image from 'next/image'

export const TokensContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--scale-1);
`

export const InvisibleIntersection = styled.div`
  visibility: hidden;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
`

export const TitleImage = styled(Image)`
  padding-right: var(--scale-1);
`
