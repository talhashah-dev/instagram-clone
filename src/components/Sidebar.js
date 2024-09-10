import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Sidebar = () => {
  return (
    <div className="bg-black w-[15%] h-screen px-5 py-5 flex flex-col gap-5 border-r-gray-700 border-r-[1px]">
      <Link className="text-white text-xl p-2 heading" href={"/"}>
        Instagram
      </Link>
      <Navbar />
    </div>
  );
};

export default Sidebar;
