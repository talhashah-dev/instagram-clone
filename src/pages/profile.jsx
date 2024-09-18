import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import React, { useState } from "react";

const Profile = () => {
  const [userName, setUserName] = useState("Syed Talha");
  const [userId, setUserId] = useState("talhashah-dev");

  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Head>
        <title>
          {`${userName} (@${userId})`} • Instagram photos and videos
        </title>
      </Head>
      <Sidebar />
      <h1 className="text-white text-lg max-sm:h-screen">Profile Page</h1>
    </div>
  );
};

export default Profile;
