import { useState } from 'react'
import { ButtonVariant } from '../Button'
import { Card } from '../Card'
import { CardContent } from '../Card/styles'
import { ExpandableCardButton, ExpandableCardTitle } from './styles'

interface Card {
  children: React.ReactNode
  title: string
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
      <ExpandableCardButton
        variant={ButtonVariant['primary']}
        onClick={handleOnExpand}
      >
        <ExpandableCardTitle>{title}</ExpandableCardTitle>
        {String.fromCharCode(isExpanded ? 9650 : 9660)}
      </ExpandableCardButton>
      {isExpanded && <CardContent>{children}</CardContent>}
    </Card>
  )
}
