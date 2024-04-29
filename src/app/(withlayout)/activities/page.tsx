"use client";
import React, { Fragment, useState } from "react";
import { Listbox, Tab } from "@headlessui/react";
import { history } from "../../../../public/data/activitiesData";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const times = [
  { id: uuidv4(), name: "All Times", unavailable: false },
  { id: uuidv4(), name: "This Month", unavailable: false },
  { id: uuidv4(), name: "This Week", unavailable: false },
];

const Activities = () => {
  const [selectedTime, setSelectedTime] = useState(times[0]);
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="grid grid-cols-12">
        <div className="bg-Primary-3 px-7 py-6 rounded-xl col-span-12 lg:col-span-11">
          <Tab.Group>
            <div className="flex flex-wrap gap-3 justify-between items-center">
              <h5 className="text-xl text-Neutral-6 font-semibold">History</h5>
              <div className="flex flex-wrap  gap-3 items-center">
                <Tab.List className="flex gap-3">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none flex items-center"
                            : "px-4 py-2 text-Neutral-1 border border-Neutral-10 text-xs rounded-lg outline-none flex items-center"
                        }
                      >
                        All
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none flex items-center"
                            : "px-4 py-2 text-Neutral-1 border border-Neutral-10 text-xs rounded-lg outline-none flex items-center"
                        }
                      >
                        Withdraw
                      </button>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <button
                        className={
                          selected
                            ? "px-4 py-2 text-[#F8FAFC] text-xs bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg outline-none flex items-center"
                            : "px-4 py-2 text-Neutral-1 border border-Neutral-10 text-xs rounded-lg outline-none flex items-center"
                        }
                      >
                        Withdrawls
                      </button>
                    )}
                  </Tab>
                </Tab.List>

                <div className="relative">
                  <Listbox value={selectedTime} onChange={setSelectedTime}>
                    <Listbox.Button className="text-Neutral-5 text-base flex gap-2 items-center justify-between pl-4 pr-2 py-1 rounded z-[5] border border-Neutral-7">
                      {selectedTime.name}
                      <span className="material-symbols-outlined dark:text-myGreen">
                        expand_more
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="rounded w-36 bg-Primary-bg text-white p-3 absolute top-full z-[5]">
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
            <Tab.Panels>
              <Tab.Panel>
                <div className="overflow-x-auto">
                  <table className="table whitespace-nowrap">
                    <thead>
                      <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox border-Neutral-10"
                            />
                          </label>
                        </th>
                        <th>Transaction ID</th>
                        <th>Type</th>
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
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox border-Neutral-10"
                              />
                            </label>
                          </th>
                          <td>
                            <div>{item.transaction}</div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-6 h-6">
                                  <Image src={item.img} alt="curency" />
                                </div>
                              </div>
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
                              style={{
                                color: item.color,
                              }}
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
              </Tab.Panel>
              <Tab.Panel>
                <div className="overflow-x-auto">
                  <table className="table whitespace-nowrap">
                    <thead>
                      <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox border-Neutral-10"
                            />
                          </label>
                        </th>
                        <th>Transaction ID</th>
                        <th>Type</th>
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
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox border-Neutral-10"
                              />
                            </label>
                          </th>
                          <td>
                            <div>{item.transaction}</div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-6 h-6">
                                  <Image src={item.img} alt="curency" />
                                </div>
                              </div>
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
                              style={{
                                color: item.color,
                              }}
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
              </Tab.Panel>
              <Tab.Panel>
                <div className="overflow-x-auto">
                  <table className="table whitespace-nowrap">
                    <thead>
                      <tr className="border-Neutral-7 text-base font-bold text-Neutral-6 leading-[24px]">
                        <th>
                          <label>
                            <input
                              type="checkbox"
                              className="checkbox border-Neutral-10"
                            />
                          </label>
                        </th>
                        <th>Transaction ID</th>
                        <th>Type</th>
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
                          <th>
                            <label>
                              <input
                                type="checkbox"
                                className="checkbox border-Neutral-10"
                              />
                            </label>
                          </th>
                          <td>
                            <div>{item.transaction}</div>
                          </td>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-6 h-6">
                                  <Image src={item.img} alt="curency" />
                                </div>
                              </div>
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
                              style={{
                                color: item.color,
                              }}
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
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
};

export default Activities;
