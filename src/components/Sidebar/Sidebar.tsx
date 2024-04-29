"use client";
import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import logo from "@/../public/images/logo.png";
import { sidenavData } from "../../../public/data/sidenavData";
import { Listbox } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";

type navProps = {
  navOpen: boolean;
  setOpened: (open: any) => void;
  setNavOpen: (open: any) => void;
  opened: number | null;
};

const languages = [
  { id: uuidv4(), name: "English (US)", unavailable: false },
  { id: uuidv4(), name: "Bangla (BN)", unavailable: false },
  { id: uuidv4(), name: "Arbic (SA)", unavailable: false },
];

const Sidebar = ({ navOpen, opened, setOpened, setNavOpen }: navProps) => {
  const [selectedPerson, setSelectedPerson] = useState(languages[0]);
  const path = usePathname();
  return (
    <nav
      className={`${
        navOpen ? "ml-0" : "ml-[-260px]"
      } lg:ml-0 w-[260px] transiton-all duration-300 ease-out z-20 overflow-x-hidden overflow-y-auto fixed top-0 bottom-0 bg-[#212B39] flex flex-col p-3 md:p-5 xl:px-6 xl:py-8 min-h-screen shadow-lg lg:shadow-none scrollbarthin  text-white`}
    >
      <Link href="/" className="flex items-center gap-8 mb-10">
        <span className="flex items-center gap-2  cursor-pointer">
          <Image className="w-10 h-[42px]" src={logo} alt="company logo" />
          <span className="text-white text-2xl font-bold">
            Crypt<span className="text-Primary-2">Dash</span>
          </span>
        </span>

        <span
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden  text-white bg-Primary-bg flex items-center rounded px-1"
        >
          <span className="material-symbols-outlined  cursor-pointer !text-2xl">
            close
          </span>
        </span>
      </Link>
      <ul>
        {sidenavData?.map((item) => (
          <li
            key={item.id}
            className={`hover:text-Neutral-8 text-Neutral-6 text-base font-semibold border border-Neutral-7 hover:border-Neutral-8 rounded-lg mb-4 cursor-pointer ${
              path == item.url && "text-Neutral-8 border-Neutral-8"
            }`}
          >
            {item?.url ? (
              <Link
                href={item.url}
                onClick={() => setNavOpen(false)}
                className="flex gap-2 py-3 px-4"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ) : (
              <span
                onClick={() =>
                  setOpened((prev: any) => (prev == item.id ? null : item.id))
                }
                className={`flex gap-2 items-center justify-between py-3 px-4 ${
                  item.id == opened && " border-[#3EBF81] hover:text-[#D2D9E4]"
                }`}
              >
                <span className="flex gap-2">
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                {item.submenus && (
                  <span className="material-symbols-outlined">expand_more</span>
                )}
              </span>
            )}
            {item.submenus && (
              <AnimateHeight
                duration={300}
                height={opened == item.id ? "auto" : 0}
              >
                <ul className={`px-3 mt-1 flex flex-col gap-1`}>
                  {item.submenus.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.url}
                        onClick={() => setNavOpen(false)}
                        className={`flex gap-2 items-center pl-4 pr-1 py-2 text-[#D2D9E4] hover:bg-[#3EBF81] duration-300 rounded-lg ${
                          item.url == path && "text-[#3EBF81]"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AnimateHeight>
            )}
          </li>
        ))}
      </ul>
      <div className="relative">
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Listbox.Button className="text-white bg-gradient-to-r from-[#33AB71] to-[#06753F] flex gap-2 items-center justify-between pl-4 pr-2 py-2 ml-6 mt-3 rounded z-[5]">
            {selectedPerson.name}
            <span className="material-symbols-outlined dark:text-myGreen">
              expand_more
            </span>
          </Listbox.Button>
          <Listbox.Options className="mx-6 w-36 rounded-lg bg-Primary-bg text-white p-3 absolute bottom-full">
            {languages.map((language) => (
              <Listbox.Option key={language.id} value={language} as={Fragment}>
                <li className="cursor-pointer p-1 hover:bg-Neutral-8 rounded">
                  {language.name}
                </li>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </nav>
  );
};

export default Sidebar;
