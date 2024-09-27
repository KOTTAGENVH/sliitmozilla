import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDrawerContext } from "@/contextApi/drawerState";
import Image from "next/image";
import AnimatedButton from "./animatedBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Drawer() {
  const [darkmode, setDarkmode] = useState(false);
  const { toggleDrawer } = useDrawerContext();
  const router = useRouter();
  const { open } = useDrawerContext();

  const navigatePage = (path: string) => {
    router.push(path);
    toggleDrawer(false);
  };

  //Handle Home Click
  const handleHomeClick = () => {
    router.push("/");
  };

  //Handle About Click
  const handleAboutClick = () => {
    router.push("/about");
  };

  //Toggle Darkmode
  const toggleDarkMode = () => {
    setDarkmode(!darkmode);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-white bg-opacity-50 backdrop-blur-lg border border-opacity-20 shadow-lg text-white transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out flex flex-col z-50`}
    >
      <div className="p-4 flex-grow">
        <div className="p-4 flex-grow flex flex-col items-center justify-center">
          <Image
            src="/logo-color.png"
            width={100}
            height={100}
            alt="Mozilla Logo"
            onClick={handleHomeClick}
            className="cursor-pointer"
          />
        </div>
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-sky-50  py-2 px-4 rounded"
          onClick={() => navigatePage("/home")}
        >
          Home
        </button>
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-sky-50  py-2 px-4 rounded"
          onClick={() => navigatePage("/about")}
        >
          About
        </button>
        <hr className="shadow-lg font-bold" />
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-sky-50  py-2 px-4 rounded"
          onClick={() => navigatePage("/events")}
        >
          Events
        </button>
        <hr className="shadow-lg font-bold" />
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-sky-50  py-2 px-4 rounded"
          onClick={() => navigatePage("/blogs")}
        >
          Blogs
        </button>
        <hr className="shadow-lg font-bold" />
        <hr className="shadow-lg font-bold" />
        <button
          className="w-full text-black hover:bg-sky-50  py-2 px-4 rounded"
          onClick={() => navigatePage("/contact")}
        >
          Contact
        </button>
        <hr className="shadow-lg font-bold" />
        <div className="flex justify-center">
        <AnimatedButton
          name="Join SLIIT Mozilla"
          handleButtonClick={handleAboutClick}
        />
        </div>
        <hr className="shadow-lg font-bold" />
        <FontAwesomeIcon
          icon={darkmode ? faSun : faMoon} // Change icon based on dark mode status
          className="w-full cursor-pointer cursor-pointer text-black m-2 p-2 justify-self-center self-center"
          onClick={toggleDarkMode}
        />
        <hr className="shadow-lg font-bold" />
      </div>
    </div>
  );
}

export default Drawer;
