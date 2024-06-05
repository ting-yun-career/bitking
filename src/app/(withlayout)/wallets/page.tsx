import Image from "next/image";
import React from "react";
import Progressbar from "@components/Progressbar/Progressbar";
import { currencyPrices, progres } from "../../../../public/data/walletsData";
import CryptoCoin from "@src/components/CryptoCoin/CryptoCoin";
import { percent, usd } from "@src/util/currency";
import cx from "classnames";

const Wallets = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6">
      <section className="gap-6 grid grid-cols-12">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-xl p-4 md:px-7 md:py-6">
          <div className="text-center mt-2 lg:mt-5">
            <div className="flex items-center justify-center gap-2 mb-3 lg:mb-7">
              <span className="text-lg font-bold text-Neutral-6">Top Coins: </span>
              <CryptoCoin symbol={'btc'} size={25} />
              <CryptoCoin symbol={'eth'} size={25} />
              <CryptoCoin symbol={'usdt'} size={25} />
            </div>
            <h4 className="text-lg text-Neutral-6 leading-[27px]">
              Balance (USD)
            </h4>
            <h3 className="text-3xl font-semibold text-Neutral-8 my-1 lg:my-2">
              {usd(42815.26)}
            </h3>
            <div className="hidden mt-2 lg:mt-7 flex flex-wrap gap-5 justify-center">
              <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-lg ">
                Withdraw
              </button>
              <button className="text-xs text-[#F8FAFC] border border-Neutral-7 hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] px-4 py-2 rounded-lg ">
                Deposit
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 rounded-xl p-4 md:px-7 md:py-6">
          {progres.map((item) => (
            <div key={item.id} className="mb-7">
              <div className="flex justify-between mb-4">
                <div>
                  <h5 className="text-white font-semibold">{item.name}</h5>
                  <h4 className="text-xl text-white font-semibold leading-[26px] my-2">
                    {usd(item.balance)}
                  </h4>
                </div>
                {item.ytd && <div>
                  <span className={cx(["text-sm", "font-bold"], { 'text-Profit-bold': item?.ytd > 0, 'text-Loss-bold': item?.ytd < 0 })}>
                    {percent(item.ytd)}
                  </span>
                </div>}
              </div>
              <Progressbar
                fillcolor={item.color}
                bgcolor={item.bgColor}
                completed={item.completed}
                className="progressorRun"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="grid grid-cols-12">
        <div className="p-4 md:px-7 md:py-5 mt-6 col-span-12 xl:col-span-11 rounded-xl">
          <h5 className="text-xl text-Neutral-6 font-semibold leading-[26px] mb-7">
            Coins in Wallet:
          </h5>
          <div className="overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead>
                <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                  <th>Asset</th>
                  <th>Starting Value (USD)</th>
                  <th>Current Value (USD) </th>
                  <th>24H Change</th>
                  <th>7D Change</th>
                  <th>30D Change</th>
                  <th>YTD Change</th>
                </tr>
              </thead>
              <tbody>
                {currencyPrices.map((item) => (
                  <tr
                    key={item.id}
                    className="border-Neutral-7 text-base text-Neutral-6 leading-[24px]"
                  >
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-6 h-6">
                            <Image src={item.img} alt="curency" />
                          </div>
                        </div>
                        <div>
                          <div>{item.asset}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={cx({ 'text-Profit-bold': item?.currentValue > item.startValue, 'text-Loss-bold': item?.currentValue < item.startValue })}>{usd(item?.startValue)}</div>
                    </td>
                    <td>
                      <div className={cx({ 'text-Profit-bold': item?.currentValue > item.startValue, 'text-Loss-bold': item?.currentValue < item.startValue })}>{usd(item?.currentValue)}</div>
                    </td>
                    <td>
                      <div className={cx({ 'text-Profit-bold': item?.h24 > 0, 'text-Loss-bold': item?.h24 < 0 })}>{percent(item?.h24)}</div>
                    </td>
                    <td>
                      <div className={cx({ 'text-Profit-bold': item?.d7 > 0, 'text-Loss-bold': item?.d7 < 0 })}>{percent(item?.d7)}</div>
                    </td>
                    <td>
                      <div className={cx({ 'text-Profit-bold': item?.d30 > 0, 'text-Loss-bold': item?.d30 < 0 })}>{percent(item?.d30)}</div>
                    </td>
                    <td>
                      <div className={cx({ 'text-Profit-bold': item?.ytd > 0, 'text-Loss-bold': item?.ytd < 0 })}>{percent(item?.ytd)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallets;
