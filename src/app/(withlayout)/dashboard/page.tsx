"use client"

import LineChart from "@components/chart/LineChart";
import React from "react";
import {
  smallCharts,
  tableData,
  transactions,
} from "../../../../public/data/dashBoardData";
import DoughnutChart from "@components/chart/DoughnutChart";
import CryptoCoin from "@src/components/CryptoCoin/CryptoCoin";
import Color from 'color';
import { usd } from "@src/util/currency";
import cx from "classnames";

const DashBoard = () => {
  const theme: any = process.env.theme;
  return (
    <div className="bg-Primary-bg p-3 lg:p-6">
      <h3 className="text-Neutral-6 text-xl font-semibold leading-[26px] pl-4">
        Total Earnings by Coins (USD)
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-6">
        {smallCharts.map((chart) => (
          <div key={chart.id} className="px-5 py-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <span className="text-base text-Neutral-9">{chart.name}</span>
                <h4 className={cx(["text-2xl", "font-semibold", "mt-2"], { 'text-Profit': chart.currentValue > chart.startValue, 'text-Loss': chart.currentValue < chart.startValue })}>
                  {usd(chart.currentValue)}
                </h4>
              </div>
              <CryptoCoin symbol={chart.symbol} size={40} />
            </div>
            <div className="h-[55px] w-full mt-2 lg:mt-5">{chart.chart}</div>
          </div>
        ))}
      </section>

      <section className="mt-6 gap-6 grid grid-cols-12">
        <div className="rounded-xl p-4 lg:px-7 lg:py-6 col-span-12 xl:col-span-9">
          <div className="flex gap-3 flex-wrap justify-between items-center mb-6">
            <h3 className="text-Neutral-6 text-xl font-semibold leading-[26px]">
              Monthly Overall Growth (USD)
            </h3>
            <div className="hidden flex flex-wrap gap-2 lg:gap-4">
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                Week
              </span>
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                Month
              </span>
              <span className="text-xs text-Neutral-6 font-medium leading-[18px] px-3 py-1 border border-Neutral-7 rounded hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                Year
              </span>
            </div>
          </div>
          <div className="h-[200px] lg:h-[300px] w-full">
            <LineChart />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-3 rounded-xl p-4 xxl:px-7 md:py-6">
          <DoughnutChart />
          <div className="text-center mt-2 lg:mt-5">
            <h4 className="text-2xl text-Neutral-6 leading-[36px]">
              Total Earnings (USD)
            </h4>
            <h5 className="text-3xl font-semibold text-Profit-bold">{usd(27834.75)}</h5>
          </div>
        </div>
      </section>

      <section className="mt-6 gap-6 grid grid-cols-12">
        <div className="rounded-xl p-4 lg:px-7 lg:py-6 col-span-12 xxl:col-span-9">
          <h5 className="text-xl font-semibold text-white leading-[26px] mb-5">
            Active Overall Growth
          </h5>
          <div className="overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead>
                <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                  <th>Asset</th>
                  <th>IP Address</th>
                  <th>Earnings (USD)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(({ id, symbol, asset, ip, amount }) => (
                  <tr
                    key={id}
                    className="border-Neutral-7 text-base text-Neutral-6 leading-[24px]"
                  >
                    <td>
                      <div className="flex items-center space-x-3">
                        <CryptoCoin symbol={symbol} size={25} />
                        <div>{asset}</div>
                      </div>
                    </td>
                    <td>
                      <div>{ip}</div>
                    </td>
                    <td>
                      <div
                        className={cx(
                          ["text-base", "leading-[24px]", "py-1", "rounded", "flex", "items-center", "relative"],
                          { 'text-Profit-bold': amount > 0, 'text-Loss-bold': amount < 0 }
                        )}
                      >
                        {usd(amount)}
                        {amount > 0 && <span className="text-Profit-bold material-symbols-outlined">arrow_drop_up</span>}
                        {amount < 0 && <span className="text-Loss-bold material-symbols-outlined">arrow_drop_down</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-12 xxl:col-span-3 rounded-xl p-4 lg:px-7 lg:py-6">
          <h5 className="text-xl font-semibold leading-[26px] text-white">
            Recent Transaction
          </h5>
          <div className="mt-5 divide-y divide-gray-700">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-wrap justify-between items-center p-4"
              >
                <div className="flex flex-wrap gap-2 items-center">
                  <CryptoCoin symbol={transaction.symbol} size={25} />
                  <span className="text-base text-Neutral-6 leading-[21px]">
                    <span className="uppercase">{transaction.symbol}</span> {transaction.time}
                  </span>
                </div>
                <h5 className="text-white text-lg leading-[26px]">
                  {transaction.money}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
