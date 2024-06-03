"use client";
import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { promotions } from "../../../../public/data/promotionsData";
import Image from "next/image";

const Promotions = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <div>
        <Tab.Group>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-white text-xl md:text-2xl font-semibold leading-[31.2px]">
              Latest Promotions
            </h4>
            <Tab.List className="flex gap-6">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "p-[5px] text-Neutral-8 bg-[#1b3531] rounded-lg outline-none flex items-center"
                        : "p-[5px] text-white bg-[#363a43] rounded-lg outline-none flex items-center"
                    }
                  >
                    <span className="material-symbols-outlined">apps</span>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "p-[5px] text-Neutral-8 bg-[#1b3531] rounded-lg outline-none flex items-center"
                        : "p-[5px] text-white bg-[#363a43] rounded-lg outline-none flex items-center"
                    }
                  >
                    <span className="material-symbols-outlined">
                      format_list_bulleted
                    </span>
                  </button>
                )}
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel className="grid gap-6 grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 xxl:grid-cols-4">
              {promotions.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden border-gradient"
                >
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt="promotions"
                      className="w-full h-[250px] object-cover "
                    />
                    <span className="bg-Neutral-8 text-Primary-3 text-xs leading-[18px] px-2 py-1 rounded-lg absolute top-4 left-4">
                      {item.date}
                    </span>
                  </div>
                  <div className="px-6 pb-5">
                    <h4 className="text-white text-lg font-bold leading-[27px] mt-[15px] mb-5">
                      {item.title}
                    </h4>
                    <button className="text-[#F8FAFC] text-xs leading-[18px] flex items-center gap-2 px-2 py-1 border border-Neutral-7 rounded-xl hover:bg-gradient-to-r from-[#33AB71] to-[#06753F]">
                      <span>Deposite Bitcoin</span>
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </Tab.Panel>
            <Tab.Panel className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3">
              {promotions.map((item) => (
                <div
                  key={item.id}
                  className=" rounded-xl overflow-hidden border-gradient block md:flex items-center"
                >
                  <div className="relative shrink-0 w-full md:w-[241px] xl:h-full">
                    <Image
                      width={241}
                      height={220}
                      src={item.image}
                      alt="promotions"
                      className="object-cover w-full h-[220px] xl:h-full"
                    />
                    <span className="bg-Neutral-8 text-Primary-3 text-xs leading-[18px] px-2 py-1 rounded-lg absolute top-4 left-4">
                      {item.date}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white text-lg font-bold leading-[27px] mt-[15px] mb-5">
                      {item.title}
                    </h4>
                    <button className="text-[#F8FAFC] text-xs leading-[18px] flex items-center gap-2 px-2 py-1 border border-Neutral-7 rounded-xl hover:bg-gradient-to-r from-[#33AB71] to-[#06753F]">
                      <span>Deposite Bitcoin</span>
                      <span className="material-symbols-outlined">
                        arrow_right_alt
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Promotions;
