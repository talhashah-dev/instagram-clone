import Sidebar from "@/components/Sidebar";
import React from "react";

const explore = () => {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Sidebar />
      <h1 className="text-white text-lg max-sm:h-screen">Explore Page</h1>
    </div>
  );
};

export default explore;
