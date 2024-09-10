import Sidebar from '@/components/Sidebar';
import Head from 'next/head';

export default function Home() {
  return (
      <div className="bg-black flex">
        <Sidebar />
        <h1 className="text-white text-lg">Home Page</h1>
      </div>
  );
}
