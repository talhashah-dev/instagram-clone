import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black flex max-sm:flex-col-reverse max-sm:h-screen">
      <Head>
        <title>Instagram</title>
      </Head>
      <Sidebar />
      <h1 className="text-white text-lg max-sm:h-screen">Home Page</h1>
    </div>
  );
}
