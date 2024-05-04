import buyer from "@/../public/images/buyer.png";
import buyer2 from "@/../public/images/buyer2.png";
import buyer3 from "@/../public/images/buyer3.png";
import buyer1 from "@/../public/images/buyer1.png";
import buyer4 from "@/../public/images/buyer4.png";
import buyer5 from "@/../public/images/buyer5.png";
import buyer6 from "@/../public/images/buyer6.png";
import buyer7 from "@/../public/images/buyer7.png";
import { v4 as uuidv4 } from "uuid";

export const notifications = [
  {
    id: uuidv4(),
    name: "Rufin Adonon",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer,
  },
  {
    id: uuidv4(),
    name: "Elisee Houessou",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer2,
  },
  {
    id: uuidv4(),
    name: "Elisee Houessou",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer3,
  },
  {
    id: uuidv4(),
    name: "Eric Ouinssou",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer,
  },
  {
    id: uuidv4(),
    name: "Charles Sossou",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer3,
  },
];
export const messages = [
  {
    id: uuidv4(),
    name: "Gaël Lokossou",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer1,
  },
  {
    id: uuidv4(),
    name: "Boris Akpodji",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer4,
  },
  {
    id: uuidv4(),
    name: "Arsene Sessou",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer5,
  },
  {
    id: uuidv4(),
    name: "Wilfried Ali",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer6,
  },
  {
    id: uuidv4(),
    name: "Pablo Codjo",
    comment: "Commented on your post",
    des: "Lorem ipsum dolor sit amet consectetur ut.",
    img: buyer7,
  },
];

export const profile = [
  {
    id: 'profile',
    title: "Profile",
    icon: <span className="material-symbols-outlined">account_circle</span>,
  },
  {
    id: 'message',
    title: "Message",
    icon: <span className="material-symbols-outlined">chat</span>,
  },
  {
    id: 'taskboard',
    title: "Taskboard",
    icon: <span className="material-symbols-outlined">task</span>,
  },
  {
    id: 'support',
    title: "Support",
    icon: <span className="material-symbols-outlined">support</span>,
  },
  {
    id: 'settings',
    title: "Settings",
    icon: <span className="material-symbols-outlined">settings</span>,
  },
  {
    id: 'logout',
    title: "Log Out",
    icon: <span className="material-symbols-outlined">logout</span>,
  },
];
