import { LayoutContainer, LayoutContent, LayoutTitle, Title } from './styles'

interface LayoutProps {
  children: React.ReactNode
  title?: React.ReactNode
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <LayoutContainer>
      {title && (
        <LayoutTitle>
          <Title>{title}</Title>
        </LayoutTitle>
      )}
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  )
}
