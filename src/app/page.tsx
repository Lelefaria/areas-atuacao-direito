"use client";

import Image from "next/image";
import rozane from "../img/rozane.png";
import logo1 from "../img/logo1.png";

//import Link from "next/link";

const Home = () => {
  return (
    <div>
      <main className="min-h-screen bg-white text-black pt-16 px-4">
        <section className="container mx-auto flex items-center justify-center py-16">
          <div className="bg-red-950 p-8 rounded-lg shadow-lg text-white flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src={logo1}
                alt="Imagem de Rozane Fregulia"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src={rozane}
                alt="Imagem de Rozane Fregulia"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-6 font-arvo">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Bem-vindo ao espaço de Rozane Fregulia!
              </h2>
              <p className="text-lg mb-4">
                Olá! Eu sou Rozane Fregulia, uma advogada especializada em
                direito trabalhista. Este é o meu espaço para compartilhar
                insights, e dicas sobre o mundo do direito trabalhista. Acredito
                que informações claras e atualizadas são essenciais para ajudar
                você a entender melhor seus direitos e as mudanças na
                legislação.
              </p>
              <p className="text-lg">
                Aqui você encontrará sobre as melhores práticas no direito
                trabalhista, além de dicas para resolver questões jurídicas que
                podem surgir no seu dia a dia. Fique à vontade para explorar o
                espaço e entrar em contato se tiver alguma dúvida ou se precisar
                de assistência jurídica.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card Direito do Trabalho */}
            <div className="transform bg-gray-100 text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-center">
                DIREITO DO TRABALHO
              </h3>
              <p className="text-center">
                Direito do Trabalho envolve todas as questões relacionadas às
                relações de trabalho e emprego, incluindo a negociação de
                contratos, a resolução de conflitos e a defesa dos direitos dos
                trabalhadores.
              </p>
              <div className="flex justify-center mt-6">
                <a
                  href="/areas/direito-do-trabalho"
                  className="bg-red-950 text-white font-poppins px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-800"
                >
                  Saber mais
                </a>
              </div>
            </div>

            {/* Card Direito Imobiliário */}
            <div className="transform bg-gray-100 text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-center">
                DIREITO IMOBILIÁRIO
              </h3>
              <p className="text-center">
                O Direito Imobiliário lida com as transações e questões
                relacionadas a propriedades, incluindo compra, venda, locação e
                administração de imóveis.
              </p>
              <div className="flex justify-center mt-6">
                <a
                  href="/areas/direito-imobiliario"
                  className="bg-red-950 text-white font-poppins px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-800"
                >
                  Saber mais
                </a>
              </div>
            </div>

            {/* Card Direito da Família */}
            <div className="transform bg-gray-100 text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-center">
                DIREITO DA FAMÍLIA
              </h3>
              <p className="text-center">
                O Direito de Família trata de questões relacionadas às relações
                familiares, como divórcios, guarda de filhos, pensões e outras
                questões jurídicas familiares.
              </p>
              <div className="flex justify-center mt-6">
                <a
                  href="/areas/direito-da-familia"
                  className="bg-red-950 text-white font-poppins px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-800"
                >
                  Saber mais
                </a>
              </div>
            </div>

            {/* Card Sucessões */}
            <div className="transform bg-gray-100 text-black p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-2 text-center">
                SUCESSÕES
              </h3>
              <p className="text-center">
                O Direito das Sucessões lida com a transmissão de bens e
                direitos após o falecimento de uma pessoa, incluindo
                testamentos, inventários e partilhas de bens.
              </p>
              <div className="flex justify-center mt-6">
                <a
                  href="/areas/sucessoes"
                  className="bg-red-950 text-white font-poppins px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-red-800"
                >
                  Saber mais
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Novos Cards */}
        <section className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card sobre a Importância do Direito */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">
                A Importância do Direito
              </h3>
              <p className="text-lg text-center">
                O direito é fundamental para garantir a ordem e a justiça na
                sociedade. Ele estabelece regras e normas que regulam o
                comportamento dos indivíduos e instituições, assegurando que os
                direitos e deveres sejam respeitados. A importância do direito
                vai além da aplicação das leis, abrangendo a promoção da
                equidade e a resolução de conflitos de maneira justa e
                imparcial.
              </p>
            </div>
            {/* Card sobre a Importância do Advogado */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">
                A Importância do Advogado
              </h3>
              <p className="text-lg text-center">
                O advogado desempenha um papel crucial na proteção dos direitos
                dos indivíduos e na garantia de que a justiça seja feita. Ele
                oferece orientação jurídica, representa seus clientes em
                processos legais e ajuda a resolver disputas de maneira eficaz.
                A presença de um advogado é essencial para assegurar que as leis
                sejam seguidas corretamente e que todos tenham acesso à defesa
                adequada.
              </p>
            </div>
          </div>
        </section>

        {/* Card sobre o Motivo do Blog */}
        <section className="container mx-auto py-16 font-poppins">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Sobre a criação desse espaço informativo
            </h3>
            <p className="text-lg mb-6 text-center">
              Criei este espaço para compartilhar meu conhecimento e experiência
              no campo do Direito Trabalhista. Acredito que o acesso a
              informações claras e precisas é essencial para ajudar as pessoas a
              compreender seus direitos, tomar decisões informadas e lidar com
              questões jurídicas de maneira mais segura e eficiente.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="/contatos"
              className="bg-red-950 text-white font-poppins px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-red-800"
            >
              Contatos
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
