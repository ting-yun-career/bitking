"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import MarketTrades from "@components/Exchange/MarketTrades";
import { curencys } from "../../../../public/data/exchangeData";
import CandleStickLineChart from "@components/chart/CandleStickLineChart";
import CandlestickChart from "@components/chart/CandleStickChart";
import Coin from "@components/Exchange/Coin";
import { usd } from "@src/util/currency";
import CryptoCoin from "@src/components/CryptoCoin/CryptoCoin";

const Exchange = () => {
  const [selectedCurencys, setSelectedCurencys] = useState(curencys[0]);

  return (
    <div className="p-3 lg:p-6">
      <section className="px-7 py-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6 rounded-xl">
        <div>
          <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
            <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6  py-2 px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm lg:border-r border-Neutral-10 cursor-pointer">
              <span className="flex gap-2 items-center font-bold">
                <span className="material-symbols-outlined">expand_more</span>
                <span className="flex gap-2 items-center">
                  <CryptoCoin symbol={selectedCurencys.symbol} size={35} />
                  <span>
                    <span className="block text-base text-Neutral-6 leading-[24px]">
                      {selectedCurencys.name}
                    </span>
                    <span className="block text-Neutral-5 text-xs leading-[18px]">
                      {selectedCurencys.coin}
                    </span>
                  </span>
                </span>
              </span>
            </Listbox.Button>
            <Listbox.Options className="bg-Primary-bg w-[200px] text-Neutral-6 pl-11 absolute overflow-auto rounded-md text-base focus:outline-none sm:text-sm cursor-pointer z-[5]">
              {curencys.map((curency, index) => (
                <Listbox.Option
                  key={curency.id}
                  value={curency}
                  disabled={curency.unavailable}
                >
                  <span className="flex items-center gap-2 py-2 opacity-50 hover:opacity-100">
                    <CryptoCoin symbol={curency.symbol} size={35} />
                    <span>
                      <span className="block text-base text-Neutral-6 leading-[24px]">
                        {curency.name}
                      </span>
                      <span className="block text-Neutral-5 text-xs leading-[18px]">
                        {curency.coin}
                      </span>
                    </span>
                  </span>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            Price
          </h3>
          <span className="text-xs font-bold text-Profit-bold leading-[18px]">
            {usd(70498.83)}
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h high
          </h3>
          <span className="text-xs font-bold text-Profit-bold leading-[18px] flex">
            {usd(70644.84)}
            <span className="material-symbols-outlined iconSize ml-2">
              insights
            </span>
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h low
          </h3>
          <span className="text-xs font-bold text-Loss-bold leading-[18px] flex">
            {usd(68556.74)}
            <span className="material-symbols-outlined iconSize ml-2">
              insights
            </span>
          </span>
        </div>
        <div className="px-[45px]">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px] whitespace-nowrap">
            24h change
          </h3>
          <span className="text-xs font-bold text-Profit-bold leading-[18px]">
            {usd(2088)}
          </span>
        </div>
      </section>

      <section className="hidden md:block mt-6 gap-6 grid grid-cols-12">
        <div className="px-4 lg:px-7 py-6 rounded-xl col-span-12 xl:col-span-8">
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                        : "text-Neutral-6 text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                    }
                  >
                    K-line
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                        : "text-Neutral-6 text-xs leading-[18px] px-3 py-1 rounded outline-none mr-4 border border-Neutral-7"
                    }
                  >
                    Price
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-6">
              <Tab.Panel>
                <CandlestickChart />
              </Tab.Panel>
              <Tab.Panel className="h-[200px] lg:h-[330px]">
                <CandleStickLineChart />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="col-span-12 xl:col-span-4 rounded-xl p-4 md:px-7 md:py-6">
          <Coin />
        </div>
      </section>

      <section className="mt-6 gap-6 grid grid-cols-12">
        <MarketTrades />
      </section>
    </div>
  );
};

export default Exchange;
