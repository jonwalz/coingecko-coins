import { FunctionComponent } from 'react'
import { Token } from '../Tokens/constants'
import { CardTitle, Name, Price, PricePercent, TitleImage } from './styles'

const PriceChange = ({ priceChange }: { priceChange: number }) => {
  return (
    <PricePercent color={priceChange > 0 ? 'green' : 'red'}>
      {priceChange} %
    </PricePercent>
  )
}

interface TokenTitleProps {
  tokenData: Token
}

const TokenTitle: FunctionComponent<TokenTitleProps> = ({ tokenData }) => {
  const { image, name, current_price, price_change_percentage_24h } = tokenData

  return (
    <CardTitle>
      <TitleImage
        width={30}
        height={30}
        src={image}
        alt={`Image of token ${name}`}
      />
      <Name>{name}</Name>
      <Price>${current_price}</Price>
      <PriceChange priceChange={price_change_percentage_24h} />
    </CardTitle>
  )
}

export default TokenTitle
