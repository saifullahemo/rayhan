import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4 bg-transparent text-white">
        <div className="text-xl font-bold">
          <Link href="/">Rayhan</Link>
        </div>
        <button onClick={toggleMenu} className="focus:outline-none z-50 relative">
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white z-40">
          <div className="flex flex-col h-full">
            <div className="flex-1 flex flex-col justify-center items-start p-8">
              <Link href="/about" className="text-4xl mb-4 hover:text-gray-300">About</Link>
              <Link href="/portfolio" className="text-4xl mb-4 hover:text-gray-300">Portfolio</Link>
              <Link href="/contact" className="text-4xl mb-4 hover:text-gray-300">Contact</Link>
            </div>
            <div className="p-8">
              <form className="max-w-md mx-auto">
                <div className="mb-4">
                  <input type="text" placeholder="Name" className="w-full p-2 bg-gray-800 text-white rounded" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Email" className="w-full p-2 bg-gray-800 text-white rounded" />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Message" className="w-full p-2 bg-gray-800 text-white rounded" rows={4}></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-gray-900 p-2 rounded">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;