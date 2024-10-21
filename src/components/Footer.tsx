"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-950 font-poppins text-white py-4 mt-auto w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Informações do Blog */}
          <div className="text-center mb-2">
            <h3 className="text-lg font-bold mb-1">Blog Rozane Fregulia</h3>
            <p className="mb-1 text-xs">
              © {new Date().getFullYear()} Blog Rozane Fregulia. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              by Leanderson Nascimento
            </p>
          </div>
          {/* Redes Sociais */}
          <div className="flex gap-3 mt-2">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              
            </a>
            <a
              href="https://instagram.com/rozane_fregulia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition duration-300"
            >
              
            </a>
            <a
              href="https://facebook.com/rozane.fregulia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
             
            </a>
            <a
              href="https://linkedin.com/in/rozane-fregulia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
            >
              
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
