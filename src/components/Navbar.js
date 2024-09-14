import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      path: "/",
      mobileHide: false,
    },
    {
      id: 3,
      title: "Explore",
      path: "/explore",
      mobileHide: false,
    },
    {
      id: 4,
      title: "Reels",
      path: "/reels",
      mobileHide: false,
    },
    {
      id: 5,
      title: "Messages",
      path: "/messages",
      mobileHide: true,
    },
    {
      id: 7,
      title: "Profile",
      path: "/profile",
    },
  ];

  const actionBtns = [
    {
      id: 1,
      title: "Create",
      act: () => alert("create function"),
      mobileHide: false,
    },
    {
      id: 2,
      title: "Search",
      act: () => alert("search function"),
      mobileHide: true,
    },
    {
      id: 3,
      title: "Menu",
      act: () => alert("menu modal"),
      mobileHide: true,
    },
  ];

  
  return (
    <nav className="max-sm:overflow-x-hidden">
      <ul className="flex flex-col max-sm:flex-row gap-5 justify-between h-full">
        {links.map((v) => {
          return (
            <li
              key={v.id}
              className="text-white p-2 rounded-md hover:bg-[#212121]"
            >
              <Link href={v.path} className="h-full w-full">
                {v.title}
              </Link>
            </li>
          );
        })}
        {actionBtns.map((v) => {
          return (
            <button
              key={v.id}
              className="text-white p-2 rounded-md hover:bg-[#212121] text-left max-sm:hidden"
              onClick={v.act}
            >
              {v.title}
            </button>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
