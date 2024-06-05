import Bitcoin from "@/../public/images/dashboardTable/bitcoin.png";
import Ethereum from "@/../public/images/dashboardTable/ethereum.png";
import Litecoin from "@/../public/images/dashboardTable/litecoin.png";
import Stellar from "@/../public/images/dashboardTable/stellar.png";
import Dogecoin from "@/../public/images/dashboardTable/dogecoin.png";
import Tether from "@/../public/images/dashboardTable/tether.png";
import achain from "@/../public/images/dashboardTable/achain.png";
import ellaism from "@/../public/images/dashboardTable/ellaism.png";
import tron from "@/../public/images/dashboardTable/tron.png";
import binance from "@/../public/images/dashboardTable/binance.png";
import { v4 as uuidv4 } from "uuid";

// Recent Transaction
// KKK Image of eth
// Ethereum
// 06/30/2024
// $1,019.54
// KKK Image of eth
// Ethereum
// 05/20/2024
// $7,421.04
// KKK Image of btc
// Bitcoin
// 01/05/2024
// $5,721.74
// KKK Image of btc
// Bitcoin
// 11/29/2023
// $1,326.18
// KKK Image of eth
// Ethereum
// 09/21/2023
// $2,265.78
// KKK Image of usdt
// Tether
// 06/03/2023
// $1208.39

export const history = [
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Bitcoin (BTC)",
    date: "21 Sep, 2023",
    status: "Pending",
    amount: "0.056",
    img: Bitcoin,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Tether (USDT)",
    date: "17 Oct, 2023",
    status: "Completed",
    amount: "0.3456182 USDT",
    img: Tether,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Ethereum (ETH) ",
    date: "21 Sep, 2023",
    status: "Completed",
    amount: "0.3456182 USDT",
    img: Ethereum,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Litecoin (LTC)",
    date: "1 Feb, 2023",
    status: "Completed",
    amount: "1.09731151 USDT",
    img: Litecoin,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Dogecoin (Doge) ",
    date: "22 Oct, 2023",
    status: "Completed",
    amount: "2.5290621 USDT",
    img: Dogecoin,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Binance (BTC) ",
    date: "22 Oct, 2023",
    status: "Completed",
    amount: "1.9862542 USDT",
    img: binance,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "TRON (TRX)",
    date: "22 Oct, 2023",
    status: "Completed",
    amount: "0.3456182 USDT",
    img: tron,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Bitcoin (BTC)",
    date: "21 Sep, 2023",
    status: "Completed",
    amount: "7.7642303 USDT",
    img: Bitcoin,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Loopring (LRC) ",
    date: "21 Sep, 2023",
    status: "Completed",
    amount: "2.5290621 USDT",
    img: Litecoin,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Ethereum (ETH) ",
    date: "8 Sep, 2023",
    status: "Completed",
    amount: "2.5290621 USDT",
    img: ellaism,
  },
  {
    id: uuidv4(),
    transaction: "#1455548",
    type: "Achain (ACT)",
    date: "21 Sep, 2023",
    status: "Completed",
    amount: "1.9862542 USDT",
    img: achain,
  },
];
