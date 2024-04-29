import Image from "next/image";
import React from "react";
import error from "@/../public/images/error.png";
import Link from "next/link";

const Error = () => {
  return (
    <div className="min-h-screen bg-Primary-bg flex items-center justify-center">
      <div>
        <Image src={error} alt="error" className="object-cover w-full" />
        <h3 className="text-white text-2xl lg:text-[32px] font-semibold leading-[38px] mt-6 text-center">
          Oops! Page not found
        </h3>
        <p className="w-full lg:w-[610px] text-Neutral-6 text-lg leading-[27px] mt-[17px] mx-auto text-center">
          Aenean id metus sed ante laoreet suscipit. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Donec erat lectus.
        </p>
        <div className="text-center">
          <div className="w-[190px] mx-auto bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg px-2 py-1 mt-8">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-[#F8FAFC] text-xs "
            >
              <span>Go Back To Home Page</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
