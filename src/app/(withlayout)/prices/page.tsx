"use client";
import Image from "next/image";
import { smallCharts } from "../../../../public/data/dashBoardData";
import { prices } from "../../../../public/data/pricesData";
import { Listbox } from "@headlessui/react";
import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoCoin from "@src/components/CryptoCoin/CryptoCoin";

const times = [
  { id: uuidv4(), name: "All Times", unavailable: false },
  { id: uuidv4(), name: "This Month", unavailable: false },
  { id: uuidv4(), name: "This Week", unavailable: false },
];

const Prices = () => {
  const [selectedTime, setSelectedTime] = useState(times[0]);
  // table star button color toggle
  const handleActiveColor = (event: any) => {
    event.currentTarget.classList.toggle("text-Primary-2");
  };

  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {smallCharts.map((chart) => (
          <div key={chart.id} className="px-5 py-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <span className="text-base text-Neutral-9">{chart.name}</span>
                <h4 className="text-2xl text-Neutral-9 font-semibold mt-2">
                  {chart.currentValue}
                </h4>
              </div>
              <CryptoCoin symbol={chart.symbol} size={25} />
            </div>
            <div className="h-[55px] w-full mt-2 lg:mt-5">{chart.chart}</div>
          </div>
        ))}
      </section>
      <section className="mt-6 rounded-xl p-4 lg:px-7 lg:py-6">
        <div className="flex flex-wrap items-center justify-between">
          <h5 className="text-xl font-semibold text-white leading-[26px] mb-5">
            Cryptocurrency Prices
          </h5>
          <div className="flex flex-wrap gap-6 items-center">
            <form className="flex items-center border border-Neutral-10 text-Neutral-5 text-base rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="bg-Primary-bg outline-none"
              />
              <span className="material-symbols-outlined cursor-pointer w-[15px] h-[15px] text-Neutral-6 mb-2">
                search
              </span>
            </form>
            <div className="relative">
              <Listbox value={selectedTime} onChange={setSelectedTime}>
                <Listbox.Button className="text-Neutral-5 text-base flex gap-2 items-center justify-between pl-4 pr-2 py-2 rounded z-[5] border border-Neutral-10">
                  {selectedTime.name}
                  <span className="material-symbols-outlined dark:text-myGreen">
                    expand_more
                  </span>
                </Listbox.Button>
                <Listbox.Options className="rounded w-36 bg-Primary-bg text-white p-3 absolute top-full z-[5]">
                  {times.map((time) => (
                    <Listbox.Option key={time.id} value={time} as={Fragment}>
                      <li className="cursor-pointer p-1 hover:bg-Neutral-8 rounded">
                        {time.name}
                      </li>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
        </div>
        <hr className="my-7 border-Neutral-10" />
        <div className="overflow-x-auto">
          <table className="table whitespace-nowrap">
            <thead>
              <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                <th></th>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h%</th>
                <th>Market Cap</th>
                <th>Volume</th>
                <th>Charts</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((data, index) => (
                <tr
                  key={data.id}
                  className="border-Neutral-7 text-base text-Neutral-6 leading-[24px]"
                >
                  <td>
                    <span
                      onClick={handleActiveColor}
                      className="material-symbols-outlined text-Neutral-6 cursor-default"
                    >
                      star
                    </span>
                  </td>
                  <td>
                    <div>{index + 1}</div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-6 h-6">
                          <Image src={data.img} alt="curency" />
                        </div>
                      </div>
                      <div>
                        <div>{data.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{data.price}</div>
                  </td>

                  <td>
                    <div
                      style={{
                        color: data.color,
                      }}
                    >
                      {data.parcent}
                    </div>
                  </td>
                  <td>
                    <div>{data.cap}</div>
                  </td>
                  <td>
                    <div>{data.volume}</div>
                  </td>
                  <td>
                    <Image
                      src={data.charts}
                      alt="charts"
                      className="object-cover"
                    />
                  </td>
                  <th>
                    <button className="text-[#F8FAFC] text-xs leading-[18px] px-3 py-1 rounded border border-Neutral-10 hover:bg-gradient-to-r from-[#33AB71] to-[#06753F] transition duration-500 cursor-pointer">
                      Trade
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Prices;
