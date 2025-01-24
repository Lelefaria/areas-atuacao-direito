"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-950 font-poppins text-white py-4 mt-auto w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Informações do Blog */}
          <div className="text-center mb-2">
            <h3 className="text-lg font-bold mb-1">Espaço Rozane Fregulia</h3>
            <p className="mb-1 text-xs">
              © {new Date().getFullYear()} Rozane Fregulia. Todos os direitos
              reservados.
            </p>
            <p className="text-xs">by Leanderson Nascimento</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
