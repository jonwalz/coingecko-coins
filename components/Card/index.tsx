import React, { ElementType } from 'react'
import { CardLayout } from './styles'

interface CardProps {
  children: React.ReactNode
  as?: ElementType<any>
  onClick?: (event?: React.MouseEvent<any, MouseEvent>) => void
}

export const Card = ({ as, onClick, children }: CardProps) => {
  return (
    <CardLayout as={as} onClick={onClick}>
      {children}
    </CardLayout>
  )
}
