import Sidebar from "@/components/Sidebar";
import React from "react";

const profile = () => {
  return (
    <div className="bg-black w-full flex">
      <Sidebar />
      <h1 className="text-white text-lg">Profile Page</h1>
    </div>
  );
};

export default profile;
