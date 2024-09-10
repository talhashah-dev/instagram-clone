import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Explore",
      path: "/explore",
    },
    {
      id: 2,
      title: "Messages",
      path: "/messages",
    },
    {
      id: 3,
      title: "Profile",
      path: "/profile",
    },
    {
      id: 4,
      title: "Reels",
      path: "/reels",
    },
  ];
  return (
    <nav className="">
      <ul className="flex flex-col gap-5 justify-between h-full">
        {links.map((v) => {
          return (
            <li key={v.id} className="text-white text-lg p-2 rounded-md hover:bg-[#212121]" >
              <Link href={v.path} className="inline-block h-full w-full">
                {v.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
