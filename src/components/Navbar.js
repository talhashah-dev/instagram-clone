import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  AiFillHome,
  AiOutlineCompass,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { MdOutlineMovieCreation } from "react-icons/md";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      path: "/",
      mobileHide: false,
      icon: <AiFillHome size={"28px"} />,
    },
    {
      id: 3,
      title: "Explore",
      path: "/explore",
      mobileHide: false,
      icon: <AiOutlineCompass size={"28px"} />,
    },
    {
      id: 4,
      title: "Reels",
      path: "/reels",
      mobileHide: false,
      icon: <MdOutlineMovieCreation size={"28px"} />,
    },
    {
      id: 5,
      title: "Messages",
      path: "/messages",
      mobileHide: true,
      icon: <AiOutlineMessage size={"28px"} />,
    },
    {
      id: 7,
      title: "Profile",
      path: "/profile",
      icon: <AiOutlineUser size={"28px"} />,
    },
  ];

  const actionBtns = [
    {
      id: 1,
      title: "Create",
      act: () => alert("create function"),
      mobileHide: false,
      icon: <AiOutlinePlus size={"22px"} />,
    },
    {
      id: 2,
      title: "Search",
      act: () => alert("search function"),
      mobileHide: true,
      icon: <AiOutlineSearch size={"22px"} />,
    },
    {
      id: 3,
      title: "Menu",
      act: () => alert("menu modal"),
      mobileHide: true,
      icon: <AiOutlineMenu size={"22px"} />,
    },
  ];

  return (
    <nav className="max-sm:overflow-x-hidden max-sm:w-full">
      <ul className="flex flex-col max-sm:flex-row gap-5 max-sm:gap-2 justify-around h-full">
        {links.map((v) => {
          return (
            <li
              key={v.id}
              className="text-white p-2 rounded-md hover:bg-[#212121] flex gap-6 items-center"
            >
              {v.icon}
              <Link href={v.path} className="h-full w-full max-md:hidden">
                {v.title}
              </Link>
            </li>
          );
        })}
        {actionBtns.map((v) => {
          return (
            <button
              key={v.id}
              className="text-white p-2 rounded-md hover:bg-[#212121] text-left max-md:hidden flex gap-6 items-center"
              onClick={v.act}
            >
              {v.icon}
              {v.title}
            </button>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
