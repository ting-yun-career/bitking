import graph from "@/../public/images/graph/Graph.png";
import graph1 from "@/../public/images/graph/Graph3.png";

import Bitcoin from "@/../public/images/dashboardTable/bitcoin.png";
import Ethereum from "@/../public/images/dashboardTable/ethereum.png";
import Litecoin from "@/../public/images/dashboardTable/litecoin.png";
import Dogecoin from "@/../public/images/dashboardTable/dogecoin.png";
import Tether from "@/../public/images/dashboardTable/tether.png";
import achain from "@/../public/images/dashboardTable/achain.png";
import ellaism from "@/../public/images/dashboardTable/ellaism.png";
import tron from "@/../public/images/dashboardTable/tron.png";
import binance from "@/../public/images/dashboardTable/binance.png";
import { v4 as uuidv4 } from "uuid";

export const progres = [
  {
    id: uuidv4(),
    name: "Exchange Balance",
    balance: "0.397466349",
    usd: "4,897.94 USD",
    complete: "+3.89%",
    color: "#3EBF81",
    bgColor: "#234f44",
    completed: 90,
    chart: graph,
  },
  {
    id: uuidv4(),
    name: "Assets Balance",
    balance: "0.896209960",
    usd: "4,254.77 USD",
    complete: "+2.89%",
    color: "#FC774A",
    bgColor: "#2c2c2c",
    completed: 75,
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
    h24: 0.79,
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
    h24: 0.04,
    d7: 0.10,
    d30: 0.02,
    ytd: 0.01,
    img: Tether,
  },
  {
    id: uuidv4(),
    asset: "Litecoin (LTC)",
    startValue: 1627.28,
    currentValue: 1057.84,
    h24: 0.04,
    d7: 0.10,
    d30: 0.02,
    ytd: 65.73,
    img: Litecoin,
  },
  {
    id: uuidv4(),
    asset: "Binance (BNB)",
    startValue: 1050.05,
    currentValue: 663.57,
    h24: 4.66,
    d7: 1.77,
    d30: 2.01,
    ytd: 63.33,
    img: binance,
  },
];
