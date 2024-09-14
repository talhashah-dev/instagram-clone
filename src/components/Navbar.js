import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 3,
      title: "Explore",
      path: "/explore",
    },
    {
      id: 4,
      title: "Reels",
      path: "/reels",
    },
    {
      id: 5,
      title: "Messages",
      path: "/messages",
    },
    {
      id: 7,
      title: "Profile",
      path: "/profile",
    }
  ];

  const actionBtns = [
    {
      id: 1,
      title: "Create",
      act: () => alert("create function")
    },
    {
      id: 2,
      title: "Search",
      act: () => alert("search function")
    },
    {
      id: 3,
      title: "Menu",
      act: () => alert("menu modal")
    }
  ];
  return (
    <nav className="">
      <ul className="flex flex-col gap-5 justify-between h-full">
        {links.map((v) => {
          return (
            <li
              key={v.id}
              className="text-white p-2 rounded-md hover:bg-[#212121] flex items-center gap-3"
            >
              <Link href={v.path} className="h-full w-full max-xl:hidden" >
                {v.title}
              </Link>
            </li>
          );
        })}
        {actionBtns.map(v => {
        return (
          <button key={v.id} className="text-white p-2 rounded-md hover:bg-[#212121] max-xl:hidden text-left" onClick={v.act}>{v.title}</button>
        )
      })}
      </ul>
    </nav>
  );
};

export default Navbar;
