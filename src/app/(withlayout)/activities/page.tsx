"use client";
import React, { Fragment, useState } from "react";
import { Listbox, Tab } from "@headlessui/react";
import { history } from "../../../../public/data/activitiesData";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import cx from "classnames";
import CryptoCoin from "@src/components/CryptoCoin/CryptoCoin";

const times = [
  { id: uuidv4(), name: "All Times", unavailable: false },
  { id: uuidv4(), name: "This Month", unavailable: false },
  { id: uuidv4(), name: "This Week", unavailable: false },
];

const Activities = () => {
  const [selectedTime, setSelectedTime] = useState(times[0]);
  const [selectionStatus, setSelectionStatus] = useState('pending');

  return (
    <div className="bg-Primary-bg p-3 lg:p-6">
      <section className="grid grid-cols-12">
        <div className="px-7 py-6 col-span-12">
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <h5 className="text-xl text-Neutral-6 font-semibold">History</h5>
            <div className="flex flex-wrap gap-3 items-center">
              <button
                className={cx(
                  ["px-4", "py-2", "text-Neutral-1", "text-xs", "rounded-sm", "outline-none", "flex", "items-center", "border", "border-Neutral-10"],
                  { "border-none text-white bg-gradient-to-r bg-gradient-to-r from-[#33AB71] to-[#06753F]": selectionStatus === 'all' }
                )}
                onClick={() => setSelectionStatus('all')}
              >
                All
              </button>
              <button
                className={cx(
                  ["px-4", "py-2", "text-Neutral-1", "text-xs", "rounded-sm", "outline-none", "flex", "items-center", "border", "border-Neutral-10"],
                  { "border-none text-white bg-gradient-to-r bg-gradient-to-r from-[#33AB71] to-[#06753F]": selectionStatus === 'pending' }
                )}
                onClick={() => setSelectionStatus('pending')}
              >
                Pending
              </button>

              <div className="relative">
                <Listbox value={selectedTime} onChange={setSelectedTime}>
                  <Listbox.Button className="w-36 text-Neutral-5 text-base flex gap-2 items-center justify-between pl-4 pr-2 py-1 rounded z-[5] border border-Neutral-10">
                    {selectedTime.name}
                    <span className="material-symbols-outlined dark:text-myGreen">
                      expand_more
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="rounded w-36 bg-Primary-bg border border-Neutral-10 text-white p-3 absolute top-full z-[5]">
                    {times.map((time) => (
                      <Listbox.Option
                        key={time.id}
                        value={time}
                        as={Fragment}
                      >
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
          <hr className="my-6 border-Neutral-10" />
          <div className="overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead>
                <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                  <th>Id</th>
                  <th>Symbol</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr
                    key={item.id}
                    className="border-Neutral-7 text-base text-Neutral-6 leading-[24px]"
                  >
                    {/* <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox border-Neutral-10"
                        />
                      </label>
                    </th> */}
                    <td>
                      <div>{item.id}</div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <CryptoCoin symbol={item.symbol} size={30} />
                        <div>
                          <div>{item.type}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>{item.date}</div>
                    </td>
                    <td>
                      <div
                        className={cx({ 'text-Profit': item?.status === 'Completed', 'text-Pending-bold': item?.status !== 'Completed' })}
                      >
                        {item.status}
                      </div>
                    </td>
                    <td>
                      <div>{item.amount}</div>
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

export default Activities;
