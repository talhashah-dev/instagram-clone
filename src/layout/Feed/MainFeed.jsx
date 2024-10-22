import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import profileImg from "@/assets/images/userProfile.png";

const MainFeed = () => {
  const [feedData, setFeedData] = useState([]);

  return (
    <div className="h-screen w-full bg-black container px-48 pt-40 flex flex-col items-center justify-center gap-y-2">
      <div className="text-white w-5/12 h-44 flex items-center justify-between">
        <span className="flex items-center gap-x-2">
          <Image
            src={profileImg}
            alt=""
            className="rounded-full h-12 w-12"
          />
          <p className="font-bold">alireza</p>
        </span>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </div>
      <div className="w-5/12 h-[2000px] border-[1px] border-opacity-20 border-white">
        <Image src="" alt=""/>
      </div>
    </div>
  );
};

export default MainFeed;
