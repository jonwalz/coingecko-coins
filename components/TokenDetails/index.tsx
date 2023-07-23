import { Chart } from "../Chart";
import { IToken } from "../Tokens/constants";
import { TokenDetailsContainer, TokenInfo, TokenSection } from "./styles";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

interface TokenDetailsProps {
  tokenData: IToken;
}

export const TokenDetails = ({ tokenData }: TokenDetailsProps) => {
  return (
    <TokenDetailsContainer>
      <ParentSize parentSizeStyles={{ flex: 3 }}>
        {({ width, height }) => (
          <Chart tokenId={tokenData.id} width={width} height={height} />
        )}
      </ParentSize>
      <TokenInfo>
        <TokenSection>
          <b>Name:</b>&nbsp;{tokenData.name}
        </TokenSection>
        <TokenSection>
          <b>Current price:</b>&nbsp;${tokenData.current_price}
        </TokenSection>
        <TokenSection>
          <b>Market cap:</b>&nbsp;${tokenData.market_cap}
        </TokenSection>
      </TokenInfo>
    </TokenDetailsContainer>
  );
};
