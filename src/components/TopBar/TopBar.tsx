"use client"
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import user from "@/../public/images/user.png";
import {
  messages,
  notifications,
  profile,
} from "../../../public/data/TopbarData";
import { Menu, Transition } from "@headlessui/react";

type headerProps = {
  handleOpen: (e: any) => void;
};

const TopBar = ({ handleOpen }: headerProps) => {
  const router = useRouter();

  const handleProfileAction = (data: any) => {
    if (data.id === 'logout') {
      signOut({ callbackUrl: '/signIn', redirect: true })
    }
  }

  return (
    <div className="py-2 flex gap-2 items-center justify-end self-start z-[5] left-0 lg:ml-[260px] right-0 fixed bg-Neutral-2">
      <div className="flex items-center gap-3 md:gap-5">

        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-Primary-bg p-1 px-3 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative cursor-pointer">
            <span className="material-symbols-outlined  text-white !text-3xl md:!text-[35px]">
              message
            </span>
            <span className="absolute h-3 w-3 rounded-full bg-Primary-2 flex justify-center items-center bottom-[11px] left-[10px] border border-white"></span>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -right-28 mt-4 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none identify">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <div className="w-64 md:w-[500px] bg-Neutral-10 p-3 rounded-xl">
                    <h3 className="text-2xl text-white font-bold text-center">
                      Message
                    </h3>
                    <hr className="my-2 lg:my-3 border-Neutral-7" />
                    {messages.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-3 py-2 duration-200 cursor-pointer hover:bg-Neutral-8 p-2 rounded"
                      >
                        <Image
                          className="hidden w-10 h-10 md:w-[60px] md:h-[60px]"
                          src={data.img}
                          alt="buyer"
                        />
                        <div>
                          <h4 className=" font-bold text-base md:text-lg text-white leading-[27px]">
                            {data.name}
                          </h4>
                          <p className="text-Neutral-6 text-xs leading-[18px]">
                            {data.comment}
                          </p>
                          <p className="text-Neutral-6 text-base leading-[24px]">
                            {data.des}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="hidden relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-Primary-bg  px-3 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative cursor-pointer">
            <span className="material-symbols-outlined  text-white !text-3xl md:!text-[35px]">
              notifications
            </span>
            <span className="absolute h-3 w-3 rounded-full bg-Primary-2 flex justify-center items-center bottom-[11px] left-4 border border-white"></span>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute -right-8 mt-4 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none identify-notificition">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <div className="w-64 md:w-[500px] bg-Neutral-10 p-3 rounded-xl">
                    <h3 className="text-2xl text-white font-bold text-center">
                      Notifications
                    </h3>
                    <hr className="my-2 lg:my-3 border-Neutral-7" />
                    {notifications.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-3 py-2 duration-200 cursor-pointer hover:bg-Neutral-8 p-2 rounded"
                      >
                        <Image
                          className="w-10 h-10 md:w-[60px] md:h-[60px]"
                          src={data.img}
                          alt="buyer"
                        />
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-white leading-[27px]">
                            {data.name}
                          </h4>
                          <p className="text-Neutral-6 text-xs leading-[18px]">
                            {data.comment}
                          </p>
                          <p className="text-Neutral-6 text-base leading-[24px]">
                            {data.des}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Profile dropdown menu */}
        <Menu
          as="div"
          className="relative inline-block text-left pr-3 md:pr-6 lg:pr-10 mt-1"
        >
          <Menu.Button>
            <span className="flex gap-2 items-center cursor-pointer">
              <span>
                <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full overflow-hidden">
                  <Image src={user} alt="User" />
                </div>
              </span>
              <span className="lg:flex items-center hidden">
                <span>
                  <span className="text-base text-white font-semibold block">
                    John Smith
                  </span>
                  <span className="text-xs text-Neutral-6 text-left block">
                    Standard Plan
                  </span>
                </span>
              </span>
            </span>
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  <div className="w-52 bg-Neutral-10 p-3 rounded-xl">
                    <h5 className="mb-2 text-base ml-3 font-semibold text-white">
                      Welcome Kim!
                    </h5>
                    {profile.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-3 p-1 duration-200 cursor-pointer hover:bg-Neutral-8 rounded"
                        onClick={() => handleProfileAction(data)}
                      >
                        <Link href="#" className="flex items-center gap-2">
                          <span className="text-white !text-3xl">
                            {data.icon}
                          </span>
                          <p className="text-Neutral-6 text-base leading-[18px]">
                            {data.title}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;
