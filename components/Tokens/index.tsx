import { Suspense, lazy } from 'react'
import { ExpandableCard, useExpandableCard } from '../ExpandableCard'
import { Token } from './constants'
import { InvisibleIntersection, TokensContainer } from './styles'
import { useElementOnScreen, usePaginateTokens } from '../Hooks/useFetchTokens'
import TokenTitle from '../TokenTitle'

const Details = lazy(() =>
  import('../TokenDetails').then((module) => ({
    default: module.TokenDetails,
  })),
)

interface TokenProps {
  tokenData: Token
}

const Token = ({ tokenData }: TokenProps) => {
  const expandableCardProps = useExpandableCard()

  return (
    <ExpandableCard
      title={<TokenTitle tokenData={tokenData} />}
      {...expandableCardProps}
    >
      <Suspense fallback={'Loading...'}>
        <Details tokenData={tokenData} />
      </Suspense>
    </ExpandableCard>
  )
}

export const Tokens = () => {
  // TODO: Derive total page amount from window height
  const {
    tokens,
    error,
    isRefreshing,
    loading,
    page,
    setPage,
  } = usePaginateTokens()

  const { containerRef } = useElementOnScreen(
    () => !loading && !isRefreshing && setPage(page + 1),
    {
      root: null,
      rootMargin: '100px',
      threshold: 1.0,
    },
  )

  if (error) return <>Something went wrong. Please refresh the page.</>
  if (!tokens) return <>Loading...</>

  return (
    <TokensContainer>
      {tokens.map((tokenData) => (
        <Token key={tokenData.id} tokenData={tokenData} />
      ))}
      <InvisibleIntersection ref={containerRef} />
    </TokensContainer>
  )
}
