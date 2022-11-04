import { useState } from 'react'

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
    <div>
      <h3>{title}</h3>
      <button onClick={handleOnExpand}>
        {String.fromCharCode(isExpanded ? 9650 : 9660)}
      </button>
      {isExpanded && <div>{children}</div>}
    </div>
  )
}
