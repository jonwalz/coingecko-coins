import { Button } from '../Button'
import styled from '@emotion/styled'

export const ExpandableCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ExpandableCardButton = styled(Button)`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 0;

  &:hover {
    background-color: var(--color-gray-1);
  }
`
