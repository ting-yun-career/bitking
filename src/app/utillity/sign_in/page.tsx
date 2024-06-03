import Image from "next/image";
import React from "react";
import logo from "@public/images/bitking128.png";
import sign from "@public/images/sign.png";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-Primary-bg flex items-center justify-center">
      <div className="p-2 lg:px-7 lg:py-6 rounded-xl block md:flex items-center gap-6">
        <div className="bg-gradient-to-r from-[#33AB71] to-[#06753F] rounded-lg p-2 lg:px-7 lg:py-6">
          <Link href="/" className="flex gap-2 items-center mb-8">
            <Image src={logo} alt="logo" className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-white">
              Crypt<span className="text-Primary-bg">Dash</span>
            </h3>
          </Link>
          <h3 className="text-white text-[32px] font-semibold mb-3">
            Welcome!
          </h3>
          <p className="text-white text-lg leading-[27px]">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
          <div className="w-24 text-Primary-3 bg-[#3EBF81] text-xs leading-[18px] px-4 py-2 rounded-lg btnShadow my-8 text-center">
            <Link href="/utillity/sign_up">Sign Up</Link>
          </div>
          <Image src={sign} alt="sign" />
        </div>

        <div className="border border-Neutral-10 px-7 py-6 rounded-xl w-full h-full">
          <h4 className="text-2xl text-[#F8FAFC] font-semibold leading-[31px] text-center mb-6">
            Sign In
          </h4>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="border border-Neutral-8 px-2 py-1 rounded-lg flex items-center gap-2 hover:bg-Neutral-8 cursor-pointer">
              <i className="ri-facebook-fill text-white"></i>
              <span className="text-[#F8FAFC] text-xs leading-[18px]">
                Sign In With Google
              </span>
            </div>
            <div className="border border-Neutral-8 px-2 py-1 rounded-lg flex items-center gap-2 hover:bg-Neutral-8 cursor-pointer">
              <i className="ri-google-fill text-white"></i>
              <span className="text-[#F8FAFC] text-xs leading-[18px]">
                Sign In With Facebook
              </span>
            </div>
          </div>
          <div className=" flex items-center gap-3 my-4">
            <div className="h-[1px] w-full bg-Neutral-10"></div>
            <div className="text-white text-sm">OR</div>
            <div className="h-[1px] w-full bg-Neutral-10"></div>
          </div>
          <form>
            <div className="form-control w-full">
              <label className="label">
                <span className="text-base text-Neutral-6">E-mail</span>
              </label>
              <input
                type="email"
                placeholder="E-mail................."
                className="px-2 py-[10px] rounded bg-Primary-3 text-Neutral-6 border border-Neutral-10 outline-none w-full"
              />
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="text-base text-Neutral-6 block">Password</span>
              </label>
              <input
                type="password"
                placeholder="pass*********************"
                className="px-2 py-[10px] rounded bg-Primary-3 text-Neutral-6 border border-Neutral-10 outline-none w-full"
              />
            </div>
            <div className="mt-3 block sm:flex flex-wrap gap-2 items-center justify-between">
              <div className="flex gap-2 mb-2">
                <input
                  type="checkbox"
                  id="sign"
                  name="sign"
                  className="checkbox border-Neutral-10 checkbox-success"
                />
                <label
                  htmlFor="sign"
                  className="text-Neutral-5 text-sm leading-[21px] cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link
                href="#"
                className="text-xs text-Neutral-8 hover:text-white leading-[18px]"
              >
                Forgot password
              </Link>
            </div>
            <div className="text-center mt-8 ">
              <button className="w-28 px-4 py-2 text-[#F8FAFC] text-xs leading-[18px] border border-Neutral-8 rounded-lg hover:bg-Neutral-8">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
