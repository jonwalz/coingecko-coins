import styled from '@emotion/styled'

export const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: var(--scale-1);
  max-width: 900px;
`

export const LayoutTitle = styled.header`
  width: 100%;
  padding: var(--scale-1) var(--scale-2);
  background-color: var(--color-white-1);
  display: flex;
`

export const Title = styled.h1`
  font-size: 1.2rem;
`
