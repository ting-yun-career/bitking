import Image from "next/image";
import React from "react";
import protecte from "@/../public/images/protected.png";
import Link from "next/link";

const Protected = () => {
  return (
    <div className="min-h-screen bg-Primary-bg flex items-center justify-center">
      <div className="p-2 md:px-7 md:py-6 rounded-xl">
        <div className="flex justify-center">
          <Image src={protecte} alt="protected" className="object-cover" />
        </div>
        <div className="px-0 md:px-10">
          <h3 className="text-white text-xl md:text-[32px] font-semibold leading-[38px] mt-3 lg:mt-6 text-center">
            This link is password protected
          </h3>
          <p className="text-Neutral-6 text-base md:text-lg leading-[27px] mt-2 md:mt-5 text-center">
            Please enter the password to view this link.
          </p>
          <div className="form-control mt-2 md:mt-6">
            <label className="label block">
              <span className="text-base text-Neutral-6 block">Password</span>
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="px-2 py-[10px] rounded text-Neutral-6 border border-Neutral-10 outline-none w-full"
            />
          </div>
        </div>
        <div className="text-center mt-3 md:mt-8">
          <button className="w-28 text-Neutral-6 bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg px-4 py-2 ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Protected;
