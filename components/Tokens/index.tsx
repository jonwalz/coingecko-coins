import { Suspense, lazy } from 'react'
import { ExpandableCard, useExpandableCard } from '../ExpandableCard'
import { Token } from './constants'
import {
  CardTitle,
  InvisibleIntersection,
  TitleImage,
  TokensContainer,
} from './styles'
import { useElementOnScreen, usePaginateTokens } from '../Hooks/useFetchTokens'
import Image from 'next/image'

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
  const imageUrl = new URL(tokenData.image)

  const cardTitle = (
    <CardTitle>
      <TitleImage
        width={30}
        height={30}
        src={`${imageUrl.origin}${imageUrl.pathname}`}
        alt={`Image of token ${tokenData.name}`}
      />
      <p>{tokenData.name}</p>
    </CardTitle>
  )

  return (
    <ExpandableCard title={cardTitle} {...expandableCardProps}>
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
