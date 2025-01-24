"use client";
import React from "react";

const Contatos = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 flex items-center justify-center">
      <div className="mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-12">
          Meus Contatos
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5532988430388"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">
                <i className="fa-brands fa-whatsapp text-3xl text-green-600"></i>
              </div>
              <span className="text-lg font-semibold">WhatsApp</span>
              <p className="mt-2 text-center text-sm text-gray-600">
                Entre em contato diretamente pelo WhatsApp.
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rozanefregulia/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">
                <i className="fa-brands fa-instagram text-3xl text-pink-500"></i>
              </div>
              <span className="text-lg font-semibold">Instagram</span>
              <p className="mt-2 text-center text-sm text-gray-600">
                Acompanhe meu trabalho no Instagram.
              </p>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/rozane.fregulia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">
                <i className="fa-brands fa-facebook text-3xl text-blue-600"></i>
              </div>
              <span className="text-lg font-semibold">Facebook</span>
              <p className="mt-2 text-center text-sm text-gray-600">
                Conecte-se comigo no Facebook.
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rozane-fregulia-b1627a145/?originalSubdomain=br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">
                <i className="fa-brands fa-linkedin-in text-3xl text-blue-700"></i>
              </div>
              <span className="text-lg font-semibold">LinkedIn</span>
              <p className="mt-2 text-center text-sm text-gray-600">
                Conecte-se comigo no LinkedIn para mais atualizações
                profissionais e artigos.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
