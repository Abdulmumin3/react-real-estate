import {
  FaHouseUser,
  FaBriefcase,
  FaAddressBook,
  FaInfoCircle,
} from "react-icons/fa";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cNames: "nav-links",
    icon: FaHouseUser,
  },
  {
    title: "About",
    url: "/about",
    cNames: "nav-links",
    icon: FaInfoCircle,
  },
  {
    title: "Contact",
    url: "/contact",
    cNames: "nav-links",
    icon: FaAddressBook,
  },
  {
    title: "Services",
    url: "/service",
    cNames: "nav-links",
    icon: FaBriefcase,
  },
];
