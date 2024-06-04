import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { deepTrades, priceTrades } from "../../../public/data/exchangeData";

const MarketTrades = () => {
  return (
    <div className="p-4 lg:px-7 lg:py-6 rounded-xl col-span-12">
      <div>
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h5 className="text-xl font-semibold text-Neutral-6 leading-[26px]">
            Market Trades
          </h5>
        </div>
        <hr className="border-Neutral-10 my-5" />
        <div className="overflow-x-auto">
          <table className="table whitespace-nowrap">
            <thead>
              <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                <th>Time</th>
                <th>Price (USDT)</th>
                <th>Amount (BTC)</th>
                <th>Total (USDT)</th>
              </tr>
            </thead>
            <tbody>
              {priceTrades.map((trade) => (
                <tr
                  key={trade.id}
                  className="border-Neutral-7 text-base text-Neutral-6 leading-[24px]"
                >
                  <td>
                    <div>{trade.time}</div>
                  </td>
                  <td>
                    <div>{trade.Price}</div>
                  </td>
                  <td>
                    <div>{trade.amount}</div>
                  </td>
                  <td>
                    <div>{trade.total}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketTrades;
