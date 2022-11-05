import { Button } from '../Button'
import styled from '@emotion/styled'
import { Card } from '../Card'

export const ExpandableCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: var(--color-white);

  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-1);
  }
`

export const ExpandableCardButton = styled(Button)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: min-content;
  justify-content: space-between;
  padding-left: var(--scale-1);
  padding-right: var(--scale-1);
  border-radius: 5px;

  &:hover {
    background-color: var(--color-gray-1);
  }
`
