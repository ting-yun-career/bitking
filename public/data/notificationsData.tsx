import buyer1 from "@/../public/images/people/Kaitlin Hale.jpg";
import buyer2 from "@/../public/images/people/Sarah Page.jpg";
import buyer3 from "@/../public/images/people/Nic Fassbender.jpg";
import buyer4 from "@/../public/images/people/Owen Garcia.jpg";
import buyer5 from "@/../public/images/people/Florence Shaw.jpg";
import buyer6 from "@/../public/images/people/Jonathan Kelly.jpg";
import buyer7 from "@/../public/images/people/Levi Rocha.jpg";
import buyer8 from "@/../public/images/people/Marco Gross.jpg";
import system from "@/../public/images/system.png";
import { v4 as uuidv4 } from "uuid";

export const notifications = [
  {
    id: uuidv4(),
    img: system,
    name: "System",
    title: "",
    des: "Purchased 0.01433166 BTC @ $1,019.54 USD",
    time: "1 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer6,
    name: "Jonathan Kelly (Customer Support)",
    title: "",
    des: "Your request for refund has been approved.",
    time: "2 Days Ago",
  },
  {
    id: uuidv4(),
    img: system,
    name: "System",
    title: "",
    des: "Purchased 1.91990170 ETH @ $5,721.74 USD",
    time: "3 Days Ago",
  },
  {
    id: uuidv4(),
    img: system,
    name: "System",
    title: "",
    des: "Purchased 0.01864118 BTC @ $1,326.18 USD",
    time: "5 Days Ago",
  },
  {
    id: uuidv4(),
    img: system,
    name: "System",
    title: "",
    des: "Purchased 0.58632788 ETH @ $2,265.78 USD",
    time: "6 Days Ago",
  },
  {
    id: uuidv4(),
    img: system,
    name: "System",
    title: "",
    des: "Purchased 1207.98 USDT @ $1208.39 USD",
    time: "7 Days Ago",
  },
];
