import BitcoinChart from "@components/chart/BitcoinChart";
import EthereumChart from "@components/chart/EthereumChart";
import LitecoinChart from "@components/chart/LitecoinChart";
import BinanceChart from "@components/chart/BinanceChart";

import { v4 as uuid } from "uuid";

export const smallCharts = [
  {
    id: uuid(),
    name: "BTC",
    currentValue: 40918.01,
    symbol: "btc",
    chart: <BitcoinChart />,
  },
  {
    id: uuid(),
    name: "ETH",
    currentValue: 20606.82,
    symbol: "eth",
    chart: <EthereumChart />,
  },
  {
    id: uuid(),
    name: "USDT",
    currentValue: 7400.36,
    symbol: "usdt",
    chart: <LitecoinChart />,
  },
  {
    id: uuid(),
    name: "BNB",
    currentValue: 663.57,
    symbol: "bnb",
    chart: <BinanceChart />,
  },
];

export const tableData = [
  {
    id: uuid(),
    type: "Exchange",
    asset: "Bitcoin",
    date: "Apr 14,2023",
    ip: "140.91.94.219",
    status: "Pending",
    amount: "11,250 BTC",
    symbol: "btc",
    color: "#FC774A",
    bgColor: "rgba(252, 119, 74, 0.08)",
  },
  {
    id: uuid(),
    type: "Exchange",
    asset: "Ethereum",
    date: "Apr 09,2023",
    ip: "140.91.94.219",
    status: "Success",
    amount: "11,250 ETH",
    symbol: "eth",
    color: "#3EBF81",
    bgColor: "rgba(62, 191, 129, 0.08)",
  },
  {
    id: uuid(),
    type: "Exchange",
    asset: "Litecoin",
    date: "Nov 16, 2023",
    ip: "140.91.94.219",
    status: "Unpaid",
    amount: "11,250 LTC",
    symbol: "ltc",
    color: "#FC774A",
    bgColor: "rgba(252, 119, 74, 0.08)",
  },
  {
    id: uuid(),
    type: "Exchange",
    asset: "Stellar",
    date: "Dec 18, 2023",
    ip: "140.91.94.219",
    status: "Success",
    amount: "11,250 XLM",
    symbol: "xlm",
    color: "#3EBF81",
    bgColor: "rgba(62, 191, 129, 0.08)",
  },
  {
    id: uuid(),
    type: "Exchange",
    asset: "Dogecoin",
    date: "Jul 11, 2023",
    ip: "140.91.94.219",
    status: "Unpaid",
    amount: "11,250 DOGE",
    symbol: "doge",
    color: "#FC774A",
    bgColor: "rgba(252, 119, 74, 0.08)",
  },
  {
    id: uuid(),
    type: "Exchange",
    asset: "Tether",
    date: "Aug 27, 2023",
    ip: "140.91.94.219",
    status: "Pending",
    amount: "11,250 USDT",
    symbol: "usdt",
    color: "#FC774A",
    bgColor: "rgba(252, 119, 74, 0.08)",
  },
];

export const transactions = [
  {
    id: uuid(),
    asset: "Bitcoin",
    time: "Today, 13.50 PM",
    money: "$47,515",
    symbol: "btc",
  },
  {
    id: uuid(),
    asset: "Ethereum",
    time: "Today, 13.50 PM",
    money: "$3,401",
    symbol: "eth",
  },
  {
    id: uuid(),
    asset: "Litecoin",
    time: "Today, 13.50 PM",
    money: "$31,401",
    symbol: "ltc",
  },
  {
    id: uuid(),
    asset: "Dogecoin",
    time: "Today, 13.50 PM",
    money: "$2,65",
    symbol: "doge",
  },
  {
    id: uuid(),
    asset: "Ethereum",
    time: "Today, 13.50 PM",
    money: "$22,65",
    symbol: "eth",
  },
  {
    id: uuid(),
    asset: "Tether",
    time: "Today, 13.50 PM",
    money: "$120,83",
    symbol: "usdt",
  },
];
