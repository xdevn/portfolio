import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full max-w-5xl mx-auto px-4 sm:px-6  py-4 flex justify-between items-center">
      <div className="flex flex-row gap-1">
        <Image
          src="/github.svg"
          alt="logo github"
          width={20}
          height={20}
        />
        <p className="font-medium">evame.tofa@gmail.com</p>
      </div>

      <button className="bg-white/20 rounded-full w-auto h-auto p-1">
        <Image
          src="/menu.svg"
          alt="menu_icon"
          width={20}
          height={20}
        />
      </button>
    </nav>
  );
};

export default Navbar;
