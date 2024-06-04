import graph from "@/../public/images/graph/Graph.png";
import graph1 from "@/../public/images/graph/Graph3.png";

import Bitcoin from "@/../public/images/dashboardTable/bitcoin.png";
import Ethereum from "@/../public/images/dashboardTable/ethereum.png";
import Litecoin from "@/../public/images/dashboardTable/litecoin.png";
import Tether from "@/../public/images/dashboardTable/tether.png";
import binance from "@/../public/images/dashboardTable/binance.png";
import { v4 as uuidv4 } from "uuid";

const theme: any = process.env.theme;

export const progres = [
  {
    id: uuidv4(),
    name: "Starting Balance (Total)",
    balance: 42815.26,
    color: theme!.fg,
    bgColor: theme!.bg2,
    completed: 45,
    chart: graph,
  },
  {
    id: uuidv4(),
    name: "Current Balance (Total)",
    balance: 70646.68,
    ytd: 165,
    color: theme!.profit,
    bgColor: theme!.bg2,
    completed: 88,
    chart: graph1,
  },
];

export const currencyPrices = [
  {
    id: uuidv4(),
    asset: "Bitcoin (BTC)",
    startValue: 21779.50,
    currentValue: 40918.01,
    h24: 1.9,
    d7: 3.53,
    d30: 4.52,
    ytd: 187.87,
    img: Bitcoin,
  },
  {
    id: uuidv4(),
    asset: "Ethereum (ETH)",
    startValue: 10955.56,
    currentValue: 20606.82,
    h24: -0.79,
    d7: 2.6,
    d30: 2.68,
    ytd: 188.09,
    img: Ethereum,
  },
  {
    id: uuidv4(),
    asset: "Tether (USDT)",
    startValue: 7401.26,
    currentValue: 7400.36,
    h24: -0.04,
    d7: 0.10,
    d30: -0.02,
    ytd: 0.01,
    img: Tether,
  },
  {
    id: uuidv4(),
    asset: "Litecoin (LTC)",
    startValue: 1627.28,
    currentValue: 1057.84,
    h24: 0.41,
    d7: -5.17,
    d30: -10.03,
    ytd: -65.73,
    img: Litecoin,
  },
  {
    id: uuidv4(),
    asset: "Binance (BNB)",
    startValue: 1050.05,
    currentValue: 663.57,
    h24: -4.66,
    d7: -1.77,
    d30: -2.01,
    ytd: -63.33,
    img: binance,
  },
];
