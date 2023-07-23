import { StoryFn } from "@storybook/react";
import { TokenDetails } from ".";
import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 6px;
`;

export default {
  name: "Token Details",
  component: TokenDetails,
  decorators: [
    (Story: StoryFn) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
};

const defaultProps = {
  tokenData: {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 29954,
    market_cap: 582125072462,
    market_cap_rank: 1,
    fully_diluted_valuation: 628931437881,
    total_volume: 5986793282,
    high_24h: 29968,
    low_24h: 29682,
    price_change_24h: 60.06,
    price_change_percentage_24h: 0.2009,
    market_cap_change_24h: 998214564,
    market_cap_change_percentage_24h: 0.17177,
    circulating_supply: 19437137,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -56.61248,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 44078.22225,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-07-23T17:12:34.209Z",
    price_change_percentage_7d_in_currency: -1.4188101063633063,
  },
};

export const Default = () => <TokenDetails {...defaultProps} />;
