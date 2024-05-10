import bitcoin from "cryptocurrency-icons/128/color/btc.png";
import binance from "@/../public/images/binance.png";
import litecoin from "cryptocurrency-icons/128/color/ltc.png";
import ethereum from "cryptocurrency-icons/128/color/eth.png";
import solona from "cryptocurrency-icons/128/color/sol.png";
import stellar from "cryptocurrency-icons/128/color/xlm.png";
import dogecoin from "cryptocurrency-icons/128/color/doge.png";
import tether from "cryptocurrency-icons/128/color/usdt.png";

import BitcoinChart from "@components/chart/BitcoinChart";
import EthereumChart from "@components/chart/EthereumChart";
import LitecoinChart from "@components/chart/LitecoinChart";
import BinanceChart from "@components/chart/BinanceChart";

import { v4 as uuid } from "uuid";

export const smallCharts = [
  {
    id: uuid(),
    name: "BTC",
    price: "$1200.00",
    img: bitcoin,
    chart: <BitcoinChart />,
  },
  {
    id: uuid(),
    name: "ETH",
    price: "$100.00",
    img: ethereum,
    chart: <EthereumChart />,
  },
  {
    id: uuid(),
    name: "SOL",
    price: "$2500.00",
    img: solona,
    chart: <LitecoinChart />,
  },
  {
    id: uuid(),
    name: "BNB",
    price: "$3200.00",
    img: binance,
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
    img: bitcoin,
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
    img: ethereum,
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
    img: litecoin,
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
    img: stellar,
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
    img: dogecoin,
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
    img: tether,
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
    img: bitcoin,
  },
  {
    id: uuid(),
    asset: "Ethereum",
    time: "Today, 13.50 PM",
    money: "$3,401",
    img: ethereum,
  },
  {
    id: uuid(),
    asset: "Litecoin",
    time: "Today, 13.50 PM",
    money: "$31,401",
    img: litecoin,
  },
  {
    id: uuid(),
    asset: "Dogecoin",
    time: "Today, 13.50 PM",
    money: "$2,65",
    img: dogecoin,
  },
  {
    id: uuid(),
    asset: "Ethereum",
    time: "Today, 13.50 PM",
    money: "$22,65",
    img: ethereum,
  },
  {
    id: uuid(),
    asset: "Tether",
    time: "Today, 13.50 PM",
    money: "$120,83",
    img: tether,
  },
];
