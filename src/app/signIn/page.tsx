"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NextLoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    sessionStatus !== "authenticated" && (
      <div className="relative flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[url('/images/login-bg.jpg')] bg-cover bg-center">
        {/* Overlay for darkness and blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />
        <div className="relative z-10 mt-10 mx-auto w-full sm:max-w-[480px]">
          <div className="rounded-xl bg-gray-900/80 p-8 shadow-lg">
            <div className="relative z-10 flex justify-center flex-col items-center">
              <Image
                src="/images/bitking128.png"
                alt="site logo"
                width={128}
                height={128}
              />
              <h2 className="text-white mt-6 text-center text-2xl leading-9 tracking-tight">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10">
              <button
                className="flex text-sm font-semibold leading-6 w-full items-center border border-gray-300 justify-center rounded-md bg-white px-3 py-2 text-black"
                onClick={() => {
                  signIn("google");
                }}
              >
                Sign In with GMail
              </button>
              <div className="mt-10">
                <button
                  className="flex text-sm font-semibold leading-6 w-full items-center border border-gray-300 justify-center rounded-md bg-white px-3 py-2 text-black"
                  onClick={() => {
                    signIn("facebook");
                  }}
                >
                  Sign In with Facebook
                </button>
              </div>
              <div className="mt-10">
                <div role="alert" className="alert text-sm font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>
                    Your credential is not saved/used other than to demonstrate
                    social login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NextLoginPage;
