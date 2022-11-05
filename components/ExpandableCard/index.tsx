import { useState } from 'react'
import { ButtonVariant } from '../Button'
import { Card } from '../Card'
import { CardContent } from '../Card/styles'
import { ExpandableCardButton, ExpandableCardTitle } from './styles'

interface Card {
  children: React.ReactNode
  title: React.ReactNode
  isExpanded: boolean
  handleOnExpand: () => void
}

export function useExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleOnExpand = () => {
    setIsExpanded((prevState) => !prevState)
  }

  return {
    isExpanded,
    handleOnExpand,
  }
}

export const ExpandableCard: React.FC<Card> = ({
  title,
  children,
  isExpanded,
  handleOnExpand,
}) => {
  return (
    <Card>
      <ExpandableCardTitle>
        <span>{title}</span>
        <ExpandableCardButton
          variant={ButtonVariant['primary']}
          onClick={handleOnExpand}
        >
          {String.fromCharCode(isExpanded ? 9650 : 9660)}
        </ExpandableCardButton>
      </ExpandableCardTitle>
      {isExpanded && <CardContent>{children}</CardContent>}
    </Card>
  )
}
