import styled from '@emotion/styled'

export const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: var(--scale-1);
`

export const LayoutTitle = styled.header`
  padding: var(--scale-1) var(--scale-2);
  background-color: var(--secondary);
  display: flex;
`

export const Title = styled.h1`
  font-size: 1.2rem;
`
