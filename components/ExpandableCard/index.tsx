import { useState } from 'react'
import { Card } from '../Card'
import { CardContent } from '../Card/styles'
import { ExpandableCardTitle } from './styles'

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
      <ExpandableCardTitle as="button" onClick={handleOnExpand}>
        {title}
        {String.fromCharCode(isExpanded ? 9650 : 9660)}
      </ExpandableCardTitle>
      {isExpanded && <CardContent>{children}</CardContent>}
    </Card>
  )
}
