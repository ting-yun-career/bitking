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

const DashBoard = () => {
  const theme: any = process.env.theme;
  return (
    <div className="bg-Primary-bg p-3 lg:p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {smallCharts.map((chart) => (
          <div key={chart.id} className="px-5 py-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <span className="text-base text-Neutral-9">{chart.name}</span>
                <h4 className="text-2xl text-Neutral-9 font-semibold mt-2">
                  {usd(chart.currentValue)}
                </h4>
              </div>
              <CryptoCoin symbol={chart.symbol} size={25} />
            </div>
            <div className="h-[55px] w-full mt-2 lg:mt-5">{chart.chart}</div>
          </div>
        ))}
      </section>

      <section className="mt-6 gap-6 grid grid-cols-12">
        <div className="rounded-xl p-4 lg:px-7 lg:py-6 col-span-12 xl:col-span-9">
          <div className="flex gap-3 flex-wrap justify-between items-center mb-6">
            <h3 className="text-Neutral-6 text-xl font-semibold leading-[26px]">
              Monthly Overall Growth
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
              Total Balance (USD)
            </h4>
            <h5 className="text-3xl font-semibold text-Profit-bold">{usd(11032.24)}</h5>
            <button className="hidden text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-lg mt-2 lg:mt-6">
              Withdraw
            </button>
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
                  <th>Type</th>
                  <th>Asset</th>
                  <th>Date</th>
                  <th>IP Address</th>
                  <th>Status List</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(({ id, type, symbol, asset, date, ip, status, amount }) => (
                  <tr
                    key={id}
                    className="border-Neutral-7 text-base text-Neutral-6 leading-[24px]"
                  >
                    <td>
                      <div>{type}</div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-6 h-6">
                            <CryptoCoin symbol={symbol} size={25} />
                          </div>
                        </div>
                        <div>
                          <div>{asset}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>{date}</div>
                    </td>
                    <td>
                      <div>{ip}</div>
                    </td>
                    <td>
                      <div
                        style={{
                          backgroundColor: status === 'Success' ? Color(theme.profit).fade(0.85).string() : Color(theme.loss).fade(0.85).string(),
                          color: status === 'Success' ? Color(theme.profit).lighten(0.5).string() : Color(theme.loss).lighten(0.5).string(),
                        }}
                        className="text-base text-Neutral-6 leading-[24px] px-3 py-1 rounded flex items-center justify-center"
                      >
                        {status}
                      </div>
                    </td>
                    <td>
                      <div>{amount}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Recent Transaction */}
        <div className="col-span-12 xxl:col-span-3 rounded-xl p-4 lg:px-7 lg:py-6">
          <h5 className="text-xl font-semibold leading-[26px] text-white">
            Recent Transaction
          </h5>
          <div className="mt-5">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-wrap justify-between items-center mb-3 border-b border-Neutral-7 pb-3 last:border-none"
              >
                <div className="flex flex-wrap gap-2 items-center">
                  <CryptoCoin symbol={transaction.symbol} size={25} />
                  <div>
                    <h4 className="text-base text-white Neutral-6 leading-[21px]">
                      {transaction.asset}
                    </h4>
                    <span className="text-sm text-Neutral-6 leading-[21px]">
                      {transaction.time}
                    </span>
                  </div>
                </div>
                <h5 className="text-white text-xl font-semibold leading-[26px]">
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
