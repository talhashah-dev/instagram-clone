import Sidebar from "@/layout/Sidebar";
import Head from "next/head";
import React from "react";

const Explore = () => {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Head>
        <title>Instagram</title>
      </Head>
      <Sidebar />
      <h1 className="text-white text-lg max-sm:h-screen">Explore Page</h1>
    </div>
  );
};

export default Explore;
