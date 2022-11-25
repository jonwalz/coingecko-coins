import { Chart } from '../Chart'
import { IToken } from '../Tokens/constants'
import { TokenDetailsContainer } from './styles'
import ParentSize from '@visx/responsive/lib/components/ParentSize'

interface TokenDetailsProps {
  tokenData: IToken
}

export const TokenDetails = ({ tokenData }: TokenDetailsProps) => {
  return (
    <TokenDetailsContainer>
      <ParentSize>
        {({ width, height }) => (
          <Chart tokenId={tokenData.id} width={width} height={height} />
        )}
      </ParentSize>
      Details: {tokenData.name}
    </TokenDetailsContainer>
  )
}
