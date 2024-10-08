import React from "react";
import { notificationData } from "../../../../public/data/notificationsData";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

const Notifications = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6">
      <section className="grid grid-cols-12">
        <div className="p-4 lg:px-7 lg:py-6 rounded-xl col-span-12 xxl:col-span-11">
          <div className="text-xl text-white font-bold mb-10">
            Notifications
          </div>
          {notificationData.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-between border-b border-gray-600">
                <span className="text-Neutral-6 text-xs leading-[18px]">
                  {item.time}
                </span>

                <div className="dropdown dropdown-end">
                  <label tabIndex={0}>
                    <span className="material-symbols-outlined text-white cursor-pointer">
                      more_vert
                    </span>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] p-4 shadow bg-Neutral-2 text-white rounded-box w-40 cursor-pointer "
                  >
                    <li className="hover:bg-Neutral-8 p-2 rounded transition-all ease-in duration-300">
                      <Link href="#">Delete</Link>
                    </li>
                    <li className="hover:bg-Neutral-8 p-2 rounded transition-all ease-in duration-300">
                      <Link href="#">Edit</Link>
                    </li>
                    <li className="hover:bg-Neutral-8 p-2 rounded transition-all ease-in duration-300">
                      <Link href="#">Suspend</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-3 my-5 w-full md:w-[70%]">
                <div className={cx(["relative", "min-w-10", "h-10", "overflow-hidden"], { "border rounded-full": item.name !== 'System' })}>
                  <Image
                    src={item.img}
                    alt="notification_sender"
                    fill={true}
                  />
                </div>
                <div>
                  <div>
                    <span className="text-white text-sm font-bold">
                      {item.name}
                    </span>
                    <span className="text-Neutral-6 text-sm ml-1">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-Neutral-6 text-xs leading-[18px] ">
                    {item.des}
                  </p>
                </div>
              </div>


            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Notifications;
