import buyer1 from "@/../public/images/people/Kaitlin Hale.jpg";
import buyer2 from "@/../public/images/people/Sarah Page.jpg";
import buyer3 from "@/../public/images/people/Nic Fassbender.jpg";
import buyer4 from "@/../public/images/people/Owen Garcia.jpg";
import buyer5 from "@/../public/images/people/Florence Shaw.jpg";
import buyer6 from "@/../public/images/people/Jonathan Kelly.jpg";
import buyer7 from "@/../public/images/people/Levi Rocha.jpg";
import buyer8 from "@/../public/images/people/Marco Gross.jpg";
import { v4 as uuidv4 } from "uuid";

export const notifications = [
  {
    id: uuidv4(),
    img: buyer5,
    name: "Florence Shaw",
    title: "Very Informative",
    des: "Loved reading this, very informative.",
    time: "1 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer6,
    name: "Jonathan Kelly",
    title: "Nicely Done",
    des: "Simple but impactful, nicely done.",
    time: "2 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer1,
    name: "Kaitlin Hale",
    title: "Loved the Insights",
    des: "Awesome post, loved the insights!",
    time: "3 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer7,
    name: "Levi Rocha",
    title: "Engaging Style",
    des: "Your writing style is so engaging.",
    time: "5 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer8,
    name: "Marco Gross",
    title: "Thanks",
    des: "Thanks for sharing your knowledge!",
    time: "6 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer3,
    name: "Nic Fassbender",
    title: "So Helpful",
    des: "This was so helpful, thank you!",
    time: "7 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer4,
    name: "Owen Garcia",
    title: "Brilliant Perspective",
    des: "Brilliant perspective, keep it up.",
    time: "8 Days Ago",
  },
  {
    id: uuidv4(),
    img: buyer2,
    name: "Sarah Page",
    title: "Great Advice",
    des: "You nailed it, great advice.",
    time: "8 Days Ago",
  },
];
