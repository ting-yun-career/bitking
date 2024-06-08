import { v4 as uuidv4 } from "uuid";

interface SidenavItem {
  id: number;
  name: string;
  url?: string;
  icon: string;
  submenus?: {
    title: string;
    url: string;
  }[];
}

export const sidenavData: SidenavItem[] = [
  {
    id: 456001,
    name: "Dashboard",
    url: "/",
    icon: "dashboard",
  },
  {
    id: 456002,
    name: "Exchange",
    url: "/exchange",
    icon: "insights",
  },
  // {
  //   id: 456003,
  //   name: "Prices",
  //   url: "/prices",
  //   icon: "payments",
  // },
  {
    id: 456004,
    name: "Wallets",
    url: "/wallets",
    icon: "attach_money",
  },
  // {
  //   id: 456005,
  //   name: "Promotions",
  //   url: "/promotions",
  //   icon: "percent",
  // },
  {
    id: 456006,
    name: "Activities",
    url: "/activities",
    icon: "history",
  },
  {
    id: 456007,
    name: "Notifications",
    url: "/notifications",
    icon: "notifications",
  },
  {
    id: 456008,
    name: "Settings",
    url: "/settings",
    icon: "settings",
  },
  // {
  //   id: 456009,
  //   name: "Utilities",
  //   icon: "construction",
  //   submenus: [
  //     {
  //       title: "Protected Page",
  //       url: "/utillity/protected",
  //     },
  //     {
  //       title: "Error Page",
  //       url: "/utillity/error",
  //     },
  //   ],
  // },
  // {
  //   id: 4560010,
  //   name: "Authentication",
  //   icon: "work",
  //   submenus: [
  //     {
  //       title: "Sign In",
  //       url: "/utillity/sign_in",
  //     },
  //     {
  //       title: "Sign Up",
  //       url: "/utillity/sign_up",
  //     },
  //   ],
  // },
];
