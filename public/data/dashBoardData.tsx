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

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  timeZone: 'UTC',
};

const getTimeDisplay = (year: number, month: number, date: number, hour: number, minute: number) => {
  const dateStr = new Intl.DateTimeFormat('en-US', options).format(Date.UTC(year, month, date, hour, minute, 0))
  return dateStr.replace(', ', '-')
}

export const transactions = [
  {
    id: uuid(),
    asset: "Ethereum",
    time: getTimeDisplay(2024, 5, 30, 4, 1),
    money: "$1,019.54",
    symbol: "eth",
  },
  {
    id: uuid(),
    asset: "Ethereum",
    time: getTimeDisplay(2024, 4, 20, 17, 13),
    money: "$7,421.04",
    symbol: "eth",
  },
  {
    id: uuid(),
    asset: "Bitcoin",
    time: getTimeDisplay(2024, 0, 5, 8, 52),
    money: "$5,721.74",
    symbol: "btc",
  },
  {
    id: uuid(),
    asset: "Bitcoin",
    time: getTimeDisplay(2023, 10, 29, 13, 28),
    money: "$1,326.18",
    symbol: "btc",
  },
  {
    id: uuid(),
    asset: "Ethereum",
    time: getTimeDisplay(2023, 8, 21, 3, 37),
    money: "$2,265.78",
    symbol: "eth",
  },
  {
    id: uuid(),
    asset: "Tether",
    time: getTimeDisplay(2023, 5, 3, 22, 19),
    money: "$1208.39",
    symbol: "usdt",
  },
];
