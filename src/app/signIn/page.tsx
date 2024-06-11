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
      <div className="flex h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-col items-center">
          <Image src="/images/bitking128.png" alt="site logo" width={128} height={128} />
          <h2 className="text-white mt-6 text-center text-2xl leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full sm:max-w-[480px]">
          <form className="hidden space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link
                  href="#"
                  className="text-white hover:text-gray-900"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full border border-black justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <div>
            <div className="hidden relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="">
              <button
                className="flex text-sm font-semibold leading-6 w-full items-center border border-gray-300 justify-center rounded-md bg-white px-3 py-2 text-black"
                onClick={() => { signIn("google") }}
              >
                Sign In with GMail
              </button>
            </div>
            <div className="mt-10">
              <button
                className="flex text-sm font-semibold leading-6 w-full items-center border border-gray-300 justify-center rounded-md bg-white px-3 py-2 text-black"
                onClick={() => { signIn("facebook") }}
              >
                Sign In with Facebook
              </button>
            </div>
            <p className="text-red-600 text-center text-[16px] my-4">
              {error && error}
            </p>
            <p className="text-white text-center text-[16px] my-8">
              Disclaimer: <br/> Your google/facebook data is not saved/used in anyway other than accessing this site.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default NextLoginPage;
