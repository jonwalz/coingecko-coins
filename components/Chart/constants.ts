type PriceTuple = [number, number]

export interface TimeSeriesData {
  prices: [number, number][]
  market_caps: Array<number[]>
  total_volumes: Array<number[]>
}
