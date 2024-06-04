import { Listbox, Tab } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { curencys, curencysAmount } from "../../../public/data/exchangeData";

const Coin = () => {
  const [selectedAmount, setSelectedAmount] = useState(curencysAmount[0]);
  const [selectedCurencys, setSelectedCurencys] = useState(curencys[0]);
  return (
    <div className="p-4 lg:p-5 xl-7 rounded-xl col-span-12 xl:col-span-4">
      <Tab.Group>
        <Tab.List className="flex flex-wrap gap-5">
          <Tab as={Fragment}>
            {({ selected }) => (
              <span
                className={
                  selected
                    ? "border-b border-gray-400 text-Neutral-6 text-base leading-[18px] px-4 py-2 cursor-pointer font-semibold"
                    : "text-Neutral-6 text-base leading-[18px] px-4 py-2"
                }
              >
                BUY
              </span>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <span
                className={
                  selected
                    ? "border-b border-gray-400 text-Neutral-6 text-base leading-[18px] px-4 py-2 cursor-pointer font-semibold"
                    : "text-Neutral-6 text-base leading-[18px] px-4 py-2"
                }
              >
                SELL
              </span>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-8">
          <Tab.Panel>
            <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
              Coin Type
            </h5>
            <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
              <Listbox.Button className="w-full max-w-xs flex gap-2 items-center relative rounded-lg text-Neutral-6 bg-Primary-bg py-3 px-4 text-left focus:outline-none sm:text-sm">
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
              <Listbox.Options className="bg-Primary-bg text-Neutral-6 pl-4 absolute overflow-auto text-base sm:text-sm cursor-pointer z-10">
                {curencys.map((curency) => (
                  <Listbox.Option
                    key={curency.id}
                    value={curency}
                    disabled={curency.unavailable}
                  >
                    <span className="flex items-center gap-2 py-2 opacity-50 hover:opacity-100">
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
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <div className="mt-6">
              <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                Amount
              </h5>
              <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                <Listbox.Button className="w-full max-w-xs flex gap-2 items-center relative text-Neutral-6 bg-Primary-bg text-left text-sm cursor-pointer px-4 py-2">
                  <span className="flex gap-2 items-center justify-between w-full">
                    <span className="flex flex-wrap justify-between gap-2">
                      <span className="text-lg text-Neutral-6 font-bold leading-[24px]">
                        $ {selectedAmount.money}
                      </span>
                    </span>
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="bg-Primary-bg text-Neutral-6 pl-4 absolute overflow-auto cursor-pointer">
                  {curencysAmount.map((amount) => (
                    <Listbox.Option key={amount.id} value={amount}>
                      <span className="block text-base text-Neutral-6 leading-[18px] py-2 opacity-50 hover:opacity-100 ">
                        $ {amount.money}
                      </span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <button className="text-[#F8FAFC] text-base mt-8 px-4 py-1 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-sm leading-[18px]">
              Buy
            </button>
          </Tab.Panel>
          <Tab.Panel>
            <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
              Coin Type
            </h5>
            <Listbox value={selectedCurencys} onChange={setSelectedCurencys}>
              <Listbox.Button className="w-full max-w-xs flex gap-2 items-center relative rounded-lg text-Neutral-6 bg-Primary-bg py-3 px-4 text-left focus:outline-none sm:text-sm">
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
              <Listbox.Options className="bg-Primary-bg text-Neutral-6 pl-4 absolute overflow-auto text-base sm:text-sm cursor-pointer z-10">
                {curencys.map((curency) => (
                  <Listbox.Option
                    key={curency.id}
                    value={curency}
                    disabled={curency.unavailable}
                  >
                    <span className="flex items-center gap-2 py-2 opacity-50 hover:opacity-100">
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
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
            <div className="mt-6">
              <h5 className="text-base text-Neutral-6 font-bold leading-[24px] mb-3">
                Amount
              </h5>
              <Listbox value={selectedAmount} onChange={setSelectedAmount}>
                <Listbox.Button className="w-full max-w-xs flex gap-2 items-center relative text-Neutral-6 bg-Primary-bg text-left text-sm cursor-pointer px-4 py-2">
                  <span className="flex gap-2 items-center justify-between w-full">
                    <span className="flex flex-wrap justify-between gap-2">
                      <span className="text-lg text-Neutral-6 font-bold leading-[24px]">
                        $ {selectedAmount.money}
                      </span>
                    </span>
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </Listbox.Button>
                <Listbox.Options className="bg-Primary-bg text-Neutral-6 pl-4 absolute overflow-auto cursor-pointer">
                  {curencysAmount.map((amount) => (
                    <Listbox.Option key={amount.id} value={amount}>
                      <span className="block text-base text-Neutral-6 leading-[18px] py-2 opacity-50 hover:opacity-100 ">
                        $ {amount.money}
                      </span>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
            <button className="text-[#F8FAFC] text-base mt-8 px-4 py-1 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-sm leading-[18px]">
              <span>Sell</span>
            </button>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Coin;
