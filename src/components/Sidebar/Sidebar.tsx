"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import logo from "@/../public/images/bitking128.png";
import { sidenavData } from "../../../public/data/sidenavData";
import { v4 as uuidv4 } from "uuid";
import cx from 'classnames';

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
  const path = usePathname();
  const transitionDuration = 300;
  return (
    <nav
      className={cx(["z-20", "fixed", "top-0", "bottom-0", "bg-darkblue", "flex", "flex-col", "items-center", "pt-4", "min-h-screen", "shadow-lg", "lg:shadow-none", "scrollbarthin", "text-white", "md:px-6"])}
    >
      <Link href="/" className="flex items-center gap-8 mb-5">
        <span className={cx(["flex", "items-center", "cursor-pointer"], { "gap-2": navOpen })}>
          <Image className="w-10 h-[42px]" src={logo} alt="Bit King logo" />
          <span className={cx(["text-white", "text-2xl", "font-bold", "overflow-hidden", "transiton-all", `duration-${transitionDuration}`, "ease-out"], { "w-full": navOpen, "w-0": !navOpen })}>
            <span className="text-Profit-bold">Bit</span><span className="text-Loss-bold">King</span>
          </span>
        </span>

        <span
          className={cx(["absolute", "left-[100%]", "top-0", "px-4", "py-4", "bg-darkblue", "flex", "items-center", "px-1", "transform"], { "rotate-180": !navOpen })}
          onClick={(e) => { e.preventDefault(); setNavOpen(!navOpen) }}
        >
          <span className="material-symbols-outlined text-white cursor-pointer !text-4xl">
            menu_open
          </span>
        </span>
      </Link>
      <ul>
        {sidenavData?.map((item) => (
          <li
            key={item.id}
            className={`hover:text-Neutral-8 text-Neutral-6 text-base font-semibold border border-Neutral-7 hover:border-Neutral-8 rounded-lg mb-4 cursor-pointer ${path == item.url && "text-Neutral-8 border-Neutral-8"
              }`}
          >
            {item.url && (
              <Link
                href={item.url}
                className={cx(["flex", "py-3", "px-4"], { "gap-2": navOpen })}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className={cx(["overflow-hidden", "transiton-all", `duration-${transitionDuration}`, "ease-out"], { "w-[150px]": navOpen, "w-0": !navOpen })}>{item.name}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
