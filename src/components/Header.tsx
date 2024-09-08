"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-red-950 p-4 fixed w-full z-50 top-0 left-0 transition-opacity duration-300 backdrop-blur-xl ${
        isScrolled ? 'bg-opacity-80' : 'bg-opacity-100'
      }`}
    >
      <div className="container font-merriweather mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold flex items-center">
          <Link href="/" className="text-white hover:text-gray-400">
            Rozane Fregulia
            {<i className="fa-solid fa-scale-balanced pl-3"></i>}
          </Link>
          <span className="ml-2 flex items-center">
            <i className="text-xl"></i>
          </span>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                Início
              </Link>
            </li>
            <li>
              <Link href="/posts" className="text-white hover:text-gray-400">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/contatos" className="text-white hover:text-gray-400">
                Contatos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
