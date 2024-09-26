import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getAuth, signOut } from "firebase/auth";
import {
  Home,
  Search,
  Compass,
  Clapperboard,
  MessageCircle,
  Heart,
  PlusSquare,
  Menu,
  Settings,
  Activity,
  Bookmark,
  Moon,
  AlertCircle,
  Hash,
  Users,
  LogOut,
} from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import Swal from "sweetalert2";

const Sidebar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { icon: <Home size={24} />, title: "Home", path: "/" },
    { icon: <Search size={24} />, title: "Search", path: "#" },
    { icon: <Compass size={24} />, title: "Explore", path: "/explore" },
    { icon: <Clapperboard size={24} />, title: "Reels", path: "/reels" },
    { icon: <MessageCircle size={24} />, title: "Messages", path: "/messages" },
    {
      icon: <Heart size={24} />,
      title: "Notifications",
      path: "#",
    },
    { icon: <PlusSquare size={24} />, title: "Create", path: "#" },
  ];

  const modalLinks = [
    { icon: <Settings size={20} />, title: "Settings" },
    { icon: <Activity size={20} />, title: "Your activity" },
    { icon: <Bookmark size={20} />, title: "Saved" },
    { icon: <Moon size={20} />, title: "Switch appearance" },
    { icon: <AlertCircle size={20} />, title: "Report a problem" },
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleNavigation = (path) => {
    if (router.pathname !== path) {
      router.push(path);
    }
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Please try again!",
          text: error.message,
        });
      });
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen ${
          isExpanded ? "w-[244px]" : "w-[72px]"
        } border-r border-gray-800 bg-black text-white p-3 transition-all duration-300 ease-in-out z-50`}
      >
        <div className="py-3 mb-6">
          {isExpanded ? (
            <Link
              className="text-white text-4xl p-2 heading max-sm:hidden"
              href={"/"}
            >
              Instaram
              <AiFillInstagram size={"36px"} className="hidden" />
            </Link>
          ) : (
            <AiFillInstagram size={24} className="mx-auto" />
          )}
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.title}>
                <button
                  onClick={() => handleNavigation(link.path)}
                  className={`flex items-center gap-4 px-3 py-3 text-base font-normal rounded-md hover:bg-zinc-800 active:bg-zinc-700  w-full text-left ${
                    router.pathname === link.path ? "font-bold bg-zinc-800" : ""
                  } ${isExpanded ? "" : "justify-center"}`}
                >
                  {link.icon}
                  {isExpanded && <span>{link.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto">
          <button
            onClick={() => handleNavigation("/profile")}
            className={`flex items-center gap-4 px-3 py-3 text-base font-normal rounded-md hover:bg-zinc-800 w-full ${
              router.pathname === "/profile" ? "font-bold bg-zinc-800" : ""
            } ${isExpanded ? "" : "justify-center"}`}
          >
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Profile"
              width={24}
              height={24}
              className="rounded-full"
            />
            {isExpanded && <span>Profile</span>}
          </button>
          <button
            className={`flex items-center gap-4 px-3 py-3 text-base font-normal rounded-md hover:bg-zinc-800 w-full mt-2 ${
              isExpanded ? "" : "justify-center"
            }`}
            onClick={toggleModal}
          >
            <Menu size={24} />
            {isExpanded && <span>More</span>}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 text-white bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50">
          <div className="bg-zinc-800 w-full md:w-1/2 sm:w-80 rounded-t-xl sm:rounded-xl overflow-hidden">
            <div className="p-4 space-y-4">
              {modalLinks.map((link) => (
                <button
                  key={link.title}
                  className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-md hover:bg-zinc-700"
                >
                  {link.icon}
                  <span>{link.title}</span>
                </button>
              ))}
              <div className="border-t border-zinc-700 my-2"></div>
              <button className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-md hover:bg-zinc-700">
                <Hash size={20} />
                <span>Threads</span>
              </button>
              <div className="border-t border-zinc-700 my-2"></div>
              <button className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-md hover:bg-zinc-700">
                <Users size={20} />
                <span>Switch accounts</span>
              </button>
              <button
                className="flex items-center gap-3 w-full text-left py-2 px-3 rounded-md hover:bg-zinc-700"
                onClick={handleLogout}
              >
                <LogOut size={20} />
                <span>Log out</span>
              </button>
            </div>
            <button
              className="w-full py-4 text-center border-t border-zinc-700 hover:bg-zinc-700"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Responsive toggle button */}
      {isMobile && (
        <button
          className="fixed bottom-4 left-4 p-2 rounded-full z-50 bg-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Menu size={24} className="" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
