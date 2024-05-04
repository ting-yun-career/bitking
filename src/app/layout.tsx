import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "material-symbols";
import { Suspense } from "react";
import Loading from "./loading";
import NextAuthProvider from "./NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.sitename,
  description:
    `${process.env.sitename} is a cutting-edge HTML template designed specifically for crypto exchange dashboards.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextAuthProvider>
          <Suspense fallback={<Loading />}>
            <div>{children}</div>
          </Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
}
