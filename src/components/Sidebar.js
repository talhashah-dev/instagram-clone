import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-black w-[18%] h-screen px-5 py-5 flex flex-col gap-5 border-r-gray-700 border-r-[1px] max-xl:w-[10%] relative">
      <Link className="text-white text-4xl p-2 heading max-lg:hidden" href={"/"}>
        Instagram
      </Link>
      <Navbar />
    </div>
  );
};

export default Sidebar;
