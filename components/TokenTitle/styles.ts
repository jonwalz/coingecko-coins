import styled from '@emotion/styled'
import Image from 'next/image'

export const Name = styled.span`
  padding: var(--scale-1) var(--scale-2);
  font-size: 16px;
  text-align: left;
`

export const Price = styled.span`
  padding: var(--scale-1) var(--scale-2);
  font-size: 14px;
  text-align: right;
`

export const PricePercent = styled.span<{ color: string }>`
  padding: var(--scale-1) var(--scale-2);
  font-size: 14px;
  color: ${({ color }) => color};
  text-align: right;
  align-self: flex-end;
`

export const CardTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const TitleImage = styled(Image)`
  width: auto;
  padding-right: var(--scale-1);
`
