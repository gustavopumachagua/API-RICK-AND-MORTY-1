import React from "react";
import Image from "../assets/logo.png";

import { FaRegSun, FaRegMoon } from "react-icons/fa";

function Header({ children, darkMode, setDarkMode }) {
  return (
    <header className=" bg-cardLight grid sm:grid-cols-2 gap-y-4 py-5 px-5 md:mx-0 lg:mx-0 lg:grid-cols-3 grid-cols-1 dark:bg-bodyDark">
      <img src={Image} alt="Logo" className="w-full h-20 md:w-52 md:mx-6" />
      <button
        type="button"
        className="w-32  h-7 py-1 flex justify-center rounded-2xl ml-14 sm:ml-8 mt-2 sm:mt-7 bg-bodyLight text-sm font-bold font-primary md:ml-20 lg:ml-8 dark:bg-cardDark dark:text-white hover:bg-cardDark dark:hover:bg-bodyLight
        hover:text-white dark:hover:text-black
        "
        onClick={() => setDarkMode(!darkMode)}
      >
        {!darkMode ? "Dark Mode" : "Light Mode"}
        {!darkMode ? (
          <FaRegMoon className="ml-2 mt-0.5" />
        ) : (
          <FaRegSun className="ml-2 mt-0.5" />
        )}
      </button>

      {children}
    </header>
  );
}

export { Header };
