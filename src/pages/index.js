import Head from 'next/head';

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-2xl text-gray-600 mb-8">Our Instagram clone is under construction. Stay tuned!</p>
        <div className="flex space-x-4">
          <a href="https://github.com/talhashah-dev/instagram-clone" className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700">
            Learn More
          </a>
        </div>
      </div>
    </>
  );
}
