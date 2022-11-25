import { AxisLeft } from "@visx/axis";
import { Group } from "@visx/group";

import { scaleLinear } from "@visx/scale";
import { ChartContainer } from "./styles";
import useSWR, { Fetcher } from "swr";
import { TimeSeriesData } from "./constants";
import { Bar, LinePath } from "@visx/shape";
import { extent, bisector } from "d3-array";
import { TooltipWithBounds, useTooltip, defaultStyles } from "@visx/tooltip";
import { useCallback, useMemo } from "react";
import { localPoint } from "@visx/event";
import { timeFormat } from "d3-time-format";

type Data = [number, number];
type ChartData = { price: number; date: number };

const getDate = (d: ChartData) => new Date(d.date);
const bisectDate = bisector<any, number>((d) => d.date).left;
const getStockPrice = (d: ChartData) => d.price;
const formatDate = timeFormat("%b %d, '%y");

const tooltipStyles = {
  ...defaultStyles,
  background: "#3b6978",
  border: "1px solid white",
  color: "white",
};

const PriceChart = ({
  prices,
  width,
  height,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
}: {
  prices: Data[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}) => {
  const transformedData = prices.map((day: any) => ({
    date: day[0],
    price: day[1],
  }));

  const {
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
    showTooltip,
    hideTooltip,
  } = useTooltip<ChartData>();

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const timeScale = useMemo(
    () =>
      scaleLinear({
        // @ts-ignore-line
        domain: extent(transformedData, (d) => d.date),
        range: [0, innerWidth - 80],
        nice: true,
      }),
    [transformedData, innerWidth]
  );

  const yScale = useMemo(
    () =>
      scaleLinear({
        // @ts-ignore-line
        domain: extent(transformedData, (d) => d.price),
        range: [innerHeight - 80, 0],
        round: true,
      }),
    [transformedData, innerHeight]
  );

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x, y } = localPoint(event) || { x: 0 };
      const x0 = timeScale.invert(x);
      const index = bisectDate(transformedData, x0, 1);
      const d0 = transformedData[index - 1];
      const d1 = transformedData[index];

      let d = d0;
      if (d1 && getDate(d1)) {
        d =
          x0.valueOf() - getDate(d0).valueOf() >
          getDate(d1).valueOf() - x0.valueOf()
            ? d1
            : d0;
      }

      const dataFor = {
        tooltipLeft: x,
        tooltipTop: yScale(getStockPrice(d)),
        tooltipData: d,
      };

      showTooltip(dataFor);
    },
    [showTooltip, yScale, timeScale]
  );

  return (
    <ChartContainer>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={"#fff"} rx={14} />
        <Group left={40} top={40}>
          <AxisLeft
            hideAxisLine
            hideTicks
            orientation="left"
            numTicks={5}
            tickLabelProps={() => ({ dx: -10 })}
            scale={yScale}
          />
          <LinePath
            stroke="#38315d"
            strokeWidth={3}
            data={transformedData}
            x={(d) => timeScale(d.date)}
            y={(d) => yScale(d.price)}
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
        </Group>
      </svg>
      {tooltipData && (
        <div>
          <TooltipWithBounds
            key={Math.random()}
            top={tooltipTop - 12}
            left={tooltipLeft + 12}
            style={tooltipStyles}
          >
            <div>{`$${getStockPrice(tooltipData)}`}</div>
            <div>{formatDate(getDate(tooltipData))}</div>
          </TooltipWithBounds>
        </div>
      )}
    </ChartContainer>
  );
};

interface ChartProps {
  tokenId: any;
  width: number;
  height: number;
}

const fetcher: Fetcher<TimeSeriesData, string> = (...args) =>
  fetch(...args).then((res) => res.json());

export const Chart = ({ tokenId, width, height }: ChartProps) => {
  const { data, error } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart?vs_currency=usd&days=7&interval=daily`,
    fetcher
  );

  if (!data?.prices) return <div>---</div>; // TODO: Replace with loading animation

  return <PriceChart prices={data.prices} width={width} height={height} />;
};
