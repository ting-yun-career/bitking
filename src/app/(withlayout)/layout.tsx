"use client";
import React, { MouseEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Sidebar from "@components/Sidebar/Sidebar";
import TopBar from "@components/TopBar/TopBar";
import Footer from "@components/Footer/Footer";
import cx from "classnames";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus !== "authenticated") {
      router.replace("/signIn");
    }
  }, [sessionStatus, router])

  const [navOpen, setNavOpen] = useState(false);
  const [opened, setOpened] = useState<null | number>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setNavOpen(!navOpen);
  };

  return (
    <div>
      <Sidebar
        navOpen={navOpen}
        opened={opened}
        setOpened={setOpened}
        setNavOpen={setNavOpen}
      />
      <div className={cx(["relative"], { "ml-[60px] md:ml-[100px]": !navOpen, "ml-[205px] md:ml-[260px]": navOpen })}>
        <TopBar handleOpen={handleOpen} />
        <div className="pt-[88px] bg-Primary-bg" style={{ minHeight: "calc(100vh - 76px)" }}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
