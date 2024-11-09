import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 bg-transparent text-white/90">
        <div className="text-xl font-bold">
          <Link href="/">Rayhan</Link>
        </div>
        <button onClick={toggleMenu} className="focus:outline-none z-50 relative md:hidden">
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/portfolio" className="hover:text-gray-300">Portfolio</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#001326]/90 text-white z-40 md:hidden">
          <div className="h-full max-w-6xl w-full items-center mx-auto grid grid-cols-1 gap-8 p-8">
            <div className="flex flex-col justify-center items-start space-y-8">
              <Link href="/about" onClick={closeMenu} className="text-3xl hover:text-gray-300">About</Link>
              <Link href="/portfolio" onClick={closeMenu} className="text-3xl hover:text-gray-300">Portfolio</Link>
              <Link href="/contact" onClick={closeMenu} className="text-3xl hover:text-gray-300">Contact</Link>
            </div>
            <div className="p-8 w-full">
              <form className="max-w-md mx-auto space-y-4">
                <div>
                  <input type="text" placeholder="Name" className="w-full p-4 text-xs bg-gray-200/10 text-white rounded" />
                </div>
                <div>
                  <input type="email" placeholder="Email" className="w-full p-4 text-xs bg-gray-200/10 text-white rounded" />
                </div>
                <div>
                  <textarea placeholder="Message" className="w-full p-4 text-xs bg-gray-200/10 text-white rounded" rows={4}></textarea>
                </div>
                <button type="submit" className="w-full p-4 bg-sky-950/60 text-white/80 font-bold hover:bg-sky-900/60 rounded">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
