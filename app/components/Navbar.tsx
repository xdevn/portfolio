import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-3xl mx-auto px-4 py-8 flex justify-between items-center">
        <p className="font-medium">evame.tofa@gmail.com</p>
        <button>    
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
