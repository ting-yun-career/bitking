import { v4 as uuidv4 } from "uuid";

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'UTC',
  formatMatcher: 'basic'
};

const getDatetimeDisplay = (year: number, month: number, date: number, hour: number, minute: number) => {
  const dateStr = new Intl.DateTimeFormat('en-US', options).format(Date.UTC(year, month, date, hour, minute, 0))
  return dateStr.replace(', ', ' ')
}

export const history = [
  {
    id: uuidv4().slice(-6),
    type: "Ethereum",
    date: getDatetimeDisplay(2024, 5, 30, 4, 1),
    status: "Pending",
    amount: "$1,019.54",
    symbol: 'eth',
  },
  {
    id: uuidv4().slice(-6),
    type: "Ethereum",
    date: getDatetimeDisplay(2024, 4, 20, 17, 13),
    status: "Completed",
    amount: "$7,421.04",
    symbol: 'eth',
  },
  {
    id: uuidv4().slice(-6),
    type: "Bitcoin",
    date: getDatetimeDisplay(2024, 0, 5, 8, 52),
    status: "Completed",
    amount: "$5,721.74",
    symbol: 'btc',
  },
  {
    id: uuidv4().slice(-6),
    type: "Bitcoin",
    date: getDatetimeDisplay(2023, 10, 29, 13, 28),
    status: "Completed",
    amount: "$1,326.18",
    symbol: 'btc',
  },
  {
    id: uuidv4().slice(-6),
    type: "Ethereum",
    date: getDatetimeDisplay(2023, 8, 21, 3, 37),
    status: "Completed",
    amount: "$2,265.78",
    symbol: 'eth',
  },
  {
    id: uuidv4().slice(-6),
    type: "Tether",
    date: getDatetimeDisplay(2023, 5, 3, 22, 19),
    status: "Completed",
    amount: "$1208.39",
    symbol: 'usdt',
  },
];
