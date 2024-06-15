"use client"
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import userImg from "@/../public/images/user.png";
import {
  profile,
} from "../../../public/data/TopbarData";
import { Menu, Transition } from "@headlessui/react";
import { notificationData } from "@public/data/notificationsData";
import cx from "classnames";

type headerProps = {
  handleOpen: (e: any) => void;
};

const TopBar = ({ handleOpen }: headerProps) => {
  const router = useRouter();

  const { data: session, status } = useSession();
  const { user } = session ?? { };

  const handleProfileAction = (data: any) => {
    if (data.id === 'logout') {
      signOut({ callbackUrl: '/signIn', redirect: true })
    }
  }

  return (
    <div className="py-2 flex gap-2 items-center justify-end self-start z-[5] left-0 lg:ml-[260px] right-0 fixed bg-Primary-bg border-b border-gray-800">
      <div className="flex items-center gap-3 md:gap-5">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-Primary-bg px-3 py-2 text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative cursor-pointer">
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
            <Menu.Items className="absolute right-[-160px] md:right-0 mt-4 rounded-md identify-notificition">
              <Menu.Item>
                <div className="w-[350px] bg-Neutral-10 p-3 rounded-xl">
                  <h3 className="text-2xl text-white font-bold text-center">
                    Notifications
                  </h3>
                  <hr className="my-2 lg:my-3 border-Neutral-7" />
                  <div className="divide-y divide-gray-700">
                    {notificationData.map((data) => (
                      <div
                        key={data.id}
                        className="flex items-center gap-4 py-2cursor-pointer hover:bg-Neutral-2 p-2 rounded"
                      >
                        <div className={cx(["relative", "min-w-10", "h-10", "overflow-hidden"], { "border rounded-full": data.name !== 'System' })}>
                          <Image
                            src={data.img}
                            alt="notification_sender"
                            fill={true}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-base md:text-lg text-white leading-[27px]">
                            {data.name}
                          </h4>
                          <p className="text-Neutral-6 text-base leading-[24px]">
                            {data.des}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <Menu as="div" className="relative inline-block text-left mr-8 md:mr-12 mt-1">
          <Menu.Button>
            <div className="flex gap-2 items-center cursor-pointer">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image src={user?.image ?? userImg} width="100" height="100" alt="User Image" />
              </div>
              <div>
                <div className="text-base text-white font-semibold">
                  {user?.name ?? 'John Smith'}
                </div>
                <div className="text-xs text-Neutral-6 text-left">
                  Standard Plan
                </div>
              </div>
            </div>
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
                      Welcome {user?.name ?? 'John Smith'}!
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
