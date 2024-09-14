import Sidebar from "@/components/Sidebar";
import React from "react";

const profile = () => {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Sidebar />
      <h1 className="text-white text-lg max-sm:h-screen">Profile Page</h1>
    </div>
  );
};

export default profile;
