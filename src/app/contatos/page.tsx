"use client";
import React from "react";

const Contatos = () => {
  return (
    <section className="min-h-screen bg-white py-10 flex items-center justify-center">
      <div className="mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Meus contatos</h1>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-whatsapp transition duration-300 max-w-xs mx-auto"
            >
              <div className="mb-3">
                <i className="fa-brands fa-whatsapp text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-semibold">WhatsApp</span>
              <p className="mt-2 text-center text-sm">
                Entre em contato diretamente pelo WhatsApp para dúvidas rápidas
                e atendimento personalizado.
              </p>
              <div className="pt-4"></div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rozanefregulia/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-instagram transition duration-300 max-w-xs mx-auto"
            >
              <div className="mb-3">
                <i className="fa-brands fa-instagram text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-semibold">Instagram</span>
              <p className="mt-2 text-center text-sm">
                Acompanhe o nosso trabalho e atualizações sobre direito
                trabalhista no Instagram.
              </p>
              <div className="pt-4"></div>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/rozane.fregulia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-facebook transition duration-300 max-w-xs mx-auto"
            >
              <div className="mb-3">
                <i className="fa-brands fa-facebook text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-semibold">Facebook</span>
              <p className="mt-2 text-center text-sm">
                Conecte-se conosco no Facebook para mais informações e
                atualizações sobre o blog.
              </p>
              <div className="pt-4"></div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rozane-fregulia-b1627a145/?originalSubdomain=br"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-linkedin transition duration-300 max-w-xs mx-auto"
            >
              <div className="mb-3">
                <i className="fa-brands fa-linkedin-in text-3xl"></i>
              </div>
              <span className="mt-4 text-lg font-semibold">LinkedIn</span>
              <p className="mt-2 text-center text-sm">
                Conecte-se com Rozane Fregulia no LinkedIn para mais
                atualizações profissionais e artigos.
              </p>
              <div className="pt-4"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;
