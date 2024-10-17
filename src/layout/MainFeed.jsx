import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const MainFeed = () => {
  const [feedData, setFeedData] = useState([]);
  
  return (
    <div className="h-screen w-full bg-black container px-48 pt-40 flex flex-col items-center justify-center">
      <div className="w-1/2 h-[2000px] border-[1px] border-opacity-20 border-white">
        <h1 className="text-white">Hello</h1>
      </div>
    </div>
  );
};

export default MainFeed;
