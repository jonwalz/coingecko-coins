import { LayoutContent, LayoutTitle, Title } from './styles'

interface LayoutProps {
  children: React.ReactNode
  title?: React.ReactNode
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      {title && (
        <LayoutTitle>
          <Title>{title}</Title>
        </LayoutTitle>
      )}
      <LayoutContent>{children}</LayoutContent>
    </>
  )
}
