import Sidebar from "@/components/Sidebar";
import React from "react";

const reels = () => {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Sidebar />
      <h1 className="text-white text-lg max-sm:h-screen">Reels Page</h1>
    </div>
  );
};

export default reels;