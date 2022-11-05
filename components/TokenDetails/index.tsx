import { Token } from '../Tokens/constants'

interface TokenDetailsProps {
  tokenData: Token
}

export const TokenDetails = ({ tokenData }: TokenDetailsProps) => {
  return <div>Details: {tokenData.name}</div>
}
