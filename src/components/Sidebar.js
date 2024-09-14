import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="bg-black w-[18%] h-screen px-5 py-5 flex flex-col gap-5 border-gray-700 border-r-[1px] max-sm:border-t-[1px] max-xl:w-[10%] relative max-sm:w-screen max-sm:h-auto max-sm:flex-row max-sm:justify-evenly">
      <Link className="text-white text-4xl p-2 heading max-sm:hidden" href={"/"}>
        Instagram
        <AiFillInstagram size={"36px"} className="hidden" />
      </Link>
      <Navbar />
    </div>
  );
};

export default Sidebar;
