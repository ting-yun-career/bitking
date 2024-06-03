import { Listbox, Tab } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { curencys, curencysAmount } from "../../../public/data/exchangeData";
import dogicoin from "@/../public/images/dogecoin.png";

const Coin = () => {
  const [selectedAmount, setSelectedAmount] = useState(curencysAmount[0]);
  const [selectedCurencys, setSelectedCurencys] = useState(curencys[0]);
  return (
    <div className="p-4 lg:p-5 xl-7 rounded-xl col-span-12 xl:col-span-4">
      <Tab.Group>
        <Tab.List className="flex flex-wrap gap-5">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-Neutral-6 bg-gradient-to-r from-[#33AB71] to-[#06753F] text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[120px]"
                    : "text-Neutral-6 text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[120px]"
                }
              >
                Buy
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-Neutral-6 bg-gradient-to-r from-[#33AB71] to-[#06753F] text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[120px]"
                    : "text-Neutral-6 text-base leading-[18px] px-4 py-2 rounded outline-none border border-Neutral-7 w-[120px]"
                }
              >
                Sell
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
              Coin
            </h5>
            <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
              <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg  py-3 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer">
                <span className="flex gap-2 items-center justify-between w-full">
                  <span className="flex gap-2 items-center flex-1">
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={selectedCurencys.img}
                      alt="curency"
                    />
                    <span className="flex flex-1 flex-wrap justify-between gap-2">
                      <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                        {selectedCurencys.coin}
                      </span>
                      <span className="text-xl text-Neutral-6 leading-[24px]">
                        {selectedCurencys.sort}
                      </span>
                    </span>
                  </span>
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </Listbox.Button>
              <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-10">
                {curencys.map((curency) => (
                  <Listbox.Option
                    key={curency.id}
                    value={curency}
                    disabled={curency.unavailable}
                  >
                    <span>
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
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <div className="mt-6">
              <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                Amount
              </h5>
              <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer px-4 py-5">
                  <span className="flex gap-2 items-center justify-between w-full">
                    <span className="flex flex-wrap justify-between gap-2">
                      <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                        {selectedAmount.money}
                      </span>
                    </span>
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="w-52 bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer">
                  {curencysAmount.map((amount) => (
                    <Listbox.Option key={amount.id} value={amount}>
                      <li className="hover:bg-Neutral-8 py-1 pl-2 rounded">
                        <span className="block text-Neutral-5 text-base leading-[18px] mt-2 ">
                          {amount.money}
                        </span>
                      </li>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
              <div className="flex flex-wrap justify-between mt-6">
                <span className="text-Neutral-6 text-base leading-[24px]">
                  Total:
                </span>
                <span className="text-Neutral-6 text-base font-bold leading-[27px]">
                  $1,342.00
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="text-[#F8FAFC] text-base px-4 py-2 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg leading-[18px] flex items-center gap-2">
                <Image src={dogicoin} alt="dogicoin" className="w-3 h-3" />
                <span>Buy Dogecoin</span>
              </button>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
              Coin
            </h5>
            <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
              <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg  py-3 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer">
                <span className="flex gap-2 items-center justify-between w-full">
                  <span className="flex gap-2 items-center flex-1">
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={selectedCurencys.img}
                      alt="curency"
                    />
                    <span className="flex flex-1 flex-wrap justify-between gap-2">
                      <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                        {selectedCurencys.coin}
                      </span>
                      <span className="text-xl text-Neutral-6 leading-[24px]">
                        {selectedCurencys.sort}
                      </span>
                    </span>
                  </span>
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </Listbox.Button>
              <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-10">
                {curencys.map((curency) => (
                  <Listbox.Option
                    key={curency.id}
                    value={curency}
                    disabled={curency.unavailable}
                  >
                    <span>
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
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <div className="mt-6">
              <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                Amount
              </h5>
              <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer px-4 py-5">
                  <span className="flex gap-2 items-center justify-between w-full">
                    <span className="flex flex-wrap justify-between gap-2">
                      <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                        {selectedAmount.money}
                      </span>
                    </span>
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer">
                  {curencysAmount.map((amount) => (
                    <Listbox.Option key={amount.id} value={amount}>
                      <li>
                        <span className="block text-Neutral-5 text-base leading-[18px] mt-2">
                          {amount.money}
                        </span>
                      </li>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
              <div className="flex flex-wrap justify-between mt-6">
                <span className="text-Neutral-6 text-base leading-[24px]">
                  Total:
                </span>
                <span className="text-Neutral-6 text-base font-bold leading-[27px]">
                  $1,342.00
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="text-[#F8FAFC] text-base px-4 py-2 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg leading-[18px] flex items-center gap-2">
                <Image src={dogicoin} alt="dogicoin" className="w-3 h-3" />
                <span>Buy Dogecoin</span>
              </button>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
              Coin
            </h5>
            <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
              <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg  py-3 px-4 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer">
                <span className="flex gap-2 items-center justify-between w-full">
                  <span className="flex gap-2 items-center flex-1">
                    <Image
                      className="w-10 h-10 rounded-full"
                      src={selectedCurencys.img}
                      alt="curency"
                    />
                    <span className="flex flex-1 flex-wrap justify-between gap-2">
                      <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                        {selectedCurencys.coin}
                      </span>
                      <span className="text-xl text-Neutral-6 leading-[24px]">
                        {selectedCurencys.sort}
                      </span>
                    </span>
                  </span>
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </Listbox.Button>
              <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer z-10">
                {curencys.map((curency) => (
                  <Listbox.Option
                    key={curency.id}
                    value={curency}
                    disabled={curency.unavailable}
                  >
                    <span>
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
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <div className="mt-6">
              <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                Amount
              </h5>
              <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                <Listbox.Button className="flex gap-2 items-center  relative w-full rounded-lg text-Neutral-6 bg-Primary-bg text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm  cursor-pointer px-4 py-5">
                  <span className="flex gap-2 items-center justify-between w-full">
                    <span className="flex flex-wrap justify-between gap-2">
                      <span className="text-xl text-Neutral-6 font-bold leading-[24px]">
                        {selectedAmount.money}
                      </span>
                    </span>
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="w-[250px] bg-Primary-bg text-Neutral-6 p-5 absolute mt-1 max-h-60 overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm cursor-pointer">
                  {curencysAmount.map((amount) => (
                    <Listbox.Option key={amount.id} value={amount}>
                      <li>
                        <span className="block text-Neutral-5 text-base leading-[18px] mt-2">
                          {amount.money}
                        </span>
                      </li>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
              <div className="flex flex-wrap justify-between mt-6">
                <span className="text-Neutral-6 text-base leading-[24px]">
                  Total:
                </span>
                <span className="text-Neutral-6 text-base font-bold leading-[27px]">
                  $1,342.00
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button className="text-[#F8FAFC] text-base px-4 py-2 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg leading-[18px] flex items-center gap-2">
                <Image src={dogicoin} alt="dogicoin" className="w-3 h-3" />
                <span>Buy Dogecoin</span>
              </button>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Coin;
