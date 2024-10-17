import MainFeed from "@/layout/MainFeed";
import Sidebar from "@/layout/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Head>
        <title>Instagram</title>
      </Head>
      <Sidebar />
      <MainFeed />
    </div>
  );
}
