import { CardLayout } from './styles'

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <CardLayout>{children}</CardLayout>
}
