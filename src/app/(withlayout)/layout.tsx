"use client";
import React, { MouseEvent, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Sidebar from "@components/Sidebar/Sidebar";
import TopBar from "@components/TopBar/TopBar";
import Footer from "@components/Footer/Footer";

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
      <div
        className={`lg:ml-[260px] relative ${navOpen &&
          "after:bg-opacity-70 after:absolute after:inset-0 after:z-[1] after:duration-300 overflow-y-hidden"
          }`}
        onClick={() => setNavOpen(false)}
      >
        <TopBar handleOpen={handleOpen} />
        <div className="pt-[88px] bg-Primary-bg" style={{ minHeight: "calc(100vh - 76px)" }}>{children}</div>
        <Footer />
      </div>
    </div>
  );
}
