import { Button } from '../Button'
import styled from '@emotion/styled'

export const ExpandableCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ExpandableCardButton = styled(Button)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-left: var(--scale-1);
  padding-right: var(--scale-1);
  border-radius: 5px;

  &:hover {
    background-color: var(--color-gray-1);
  }
`
