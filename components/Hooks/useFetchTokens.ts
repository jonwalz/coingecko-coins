import { useState, useRef, useEffect } from 'react'
import useSWR, { Fetcher } from 'swr'
import useSWRInfinite from 'swr/infinite'
import { Token } from '../Tokens/constants'

export const useElementOnScreen = (
  callback: () => void,
  options: IntersectionObserverInit,
) => {
  const containerRef = useRef(null)

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      callback()
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])

  return { containerRef }
}

const URL = 'https://api.coingecko.com/api/v3/coins/markets'

const fetcher: Fetcher<Token[], string> = (...args) =>
  fetch(...args).then((res) => res.json())

export const usePaginateTokens = () => {
  const { data, error, size, setSize, isValidating } = useSWRInfinite<Token[]>(
    (pageIndex, previousPageData: []) => {
      if (previousPageData && !previousPageData.length) return null

      const params = {
        vs_currency: 'usd',
        page: String(pageIndex + 1),
        order: 'market_cap_desc',
        per_page: String(100),
        sparkline: 'true',
        price_change_percentage: '7d',
      }

      const usp = new URLSearchParams(params)

      return `${URL}?${usp}`
    },
    fetcher,
  )

  const loading =
    (!data && !error) ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')

  const isRefreshing = isValidating && data && data.length === size

  const history: Token[] = []
  const tokens = data ? history.concat(...data) : []

  return {
    tokens,
    error,
    isRefreshing,
    loading,
    setPage: setSize,
    page: size,
  }
}
