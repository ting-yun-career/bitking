"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import MarketTrades from "@components/Exchange/MarketTrades";
import { curencys, curencysAmount } from "../../../../public/data/exchangeData";
import DoughnutChart from "@components/chart/DoughnutChart";
import CandleStickLineChart from "@components/chart/CandleStickLineChart";
import CandlestickChart from "@components/chart/CandleStickChart";
import Coin from "@components/Exchange/Coin";

const Exchange = () => {
  const [selectedCurencys, setSelectedCurencys] = useState(curencys[0]);

  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="bg-Primary-3 px-7 py-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-6 rounded-xl">
        <div>
          <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
            <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6  py-2 px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm lg:border-r border-Neutral-10 cursor-pointer">
              <span className="flex gap-2 items-center ">
                <span className="material-symbols-outlined">expand_more</span>
                <span className="flex gap-2 items-center">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src={selectedCurencys.img}
                    alt="curency"
                  />
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
            <Listbox.Options className="w-[200px] bg-Primary-3 text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-[5]">
              {curencys.map((curency) => (
                <Listbox.Option
                  key={curency.id}
                  value={curency}
                  disabled={curency.unavailable}
                >
                  <li>
                    <span className="flex items-center gap-2 mt-4">
                      <Image
                        className="w-10 h-10 rounded-full"
                        src={curency.img}
                        alt="curency"
                      />
                      <span>
                        <span className="block text-base text-Neutral-6 leading-[24px]">
                          {curency.name}
                        </span>
                        <span className="block text-Neutral-5 text-xs leading-[18px]">
                          {curency.coin}
                        </span>
                      </span>
                    </span>
                  </li>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            Price
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            21,264.95
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h change
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px]">
            21,264.95
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h high
          </h3>
          <span className="text-xs font-bold text-Primary-2 leading-[18px] flex">
            21,264.95
            <span className="material-symbols-outlined iconSize ml-2">
              insights
            </span>
          </span>
        </div>
        <div className="px-[45px] lg:border-r border-Neutral-10">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h low
          </h3>
          <span className="text-xs font-bold text-Neutral-8 leading-[18px] flex">
            31,239.04
            <span className="material-symbols-outlined iconSize ml-2">
              insights
            </span>
          </span>
        </div>
        <div className="px-[45px]">
          <h3 className="text-lg font-bold text-Neutral-6 leading-[27px]">
            24h change
          </h3>
          <span className="text-xs font-bold text-Neutral-5 leading-[18px]">
            19,411,867
          </span>
        </div>
      </section>

      {/* Chart part start  */}
      <section className="mt-6 gap-6 grid grid-cols-12">
        <div className="bg-Primary-3 px-4 lg:px-7 py-6 rounded-xl col-span-12 xl:col-span-8">
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
                    Price Chart
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
                    Deep Chart
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
        {/* Doughunt chart  */}
        <div className="bg-Primary-3 col-span-12 xl:col-span-4 rounded-xl p-4 md:px-7 md:py-6">
          <DoughnutChart />
          <div className="text-center mt-2 lg:mt-5">
            <h4 className="text-xl xxl:text-2xl text-Neutral-6 leading-[36px]">
              Total Balance
            </h4>
            <h3 className="text-3xl xxl:text-[40px] font-semibold text-Neutral-9 my-1 lg:my-3">
              0.3475948
            </h3>
            <h5 className="text-lg text-Neutral-8">11,032.24 USD</h5>
            <button className="text-xs text-[#F8FAFC] bg-gradient-to-r from-[#33AB71] to-[#06753F] px-2 py-1 rounded-lg mt-2 lg:mt-6">
              Withdraw
            </button>
          </div>
        </div>
      </section>

      {/* Market Trades */}
      <section className="mt-6 gap-6 grid grid-cols-12">
        <MarketTrades />
        <Coin />
      </section>
    </div>
  );
};

export default Exchange;
