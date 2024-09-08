"use client";

import Image from "next/image";
import rozane from "../img/rozane.png";
import logo1 from "../img/logo1.png";

import Link from "next/link";

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
              <h2 className="text-3xl font-bold mb-4">
                Bem-vindo ao Blog de Rozane Fregulia!
              </h2>
              <p className="text-lg mb-4">
                Olá! Eu sou Rozane Fregulia, uma advogada especializada em
                direito trabalhista. Este blog é o meu espaço para compartilhar
                insights, notícias e dicas sobre o mundo do direito trabalhista.
                Acredito que informações claras e atualizadas são essenciais
                para ajudar você a entender melhor seus direitos e as mudanças
                na legislação.
              </p>
              <p className="text-lg">
                Aqui você encontrará artigos e atualizações sobre as melhores
                práticas no direito trabalhista, além de dicas para resolver
                questões jurídicas que podem surgir no seu dia a dia. Fique à
                vontade para explorar o blog e entrar em contato se tiver alguma
                dúvida ou se precisar de assistência jurídica.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Áreas de Atuação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                DIREITO DO TRABALHO
              </h3>
              <p>
                Direito do Trabalho envolve todas as questões relacionadas às
                relações de trabalho e emprego, incluindo a negociação de
                contratos, a resolução de conflitos e a defesa dos direitos dos
                trabalhadores.
              </p>
            </div>
            <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">
                DIREITO IMOBILIÁRIO
              </h3>
              <p>
                O Direito Imobiliário lida com as transações e questões
                relacionadas a propriedades, incluindo compra, venda, locação e
                administração de imóveis.
              </p>
            </div>
            <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">DIREITO DA FAMÍLIA</h3>
              <p>
                O Direito de Família trata de questões relacionadas às relações
                familiares, como divórcios, guarda de filhos, pensões e outras
                questões jurídicas familiares.
              </p>
            </div>
            <div className="bg-gray-100 text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">SUCESSÕES</h3>
              <p>
                O Direito das Sucessões lida com a transmissão de bens e
                direitos após o falecimento de uma pessoa, incluindo
                testamentos, inventários e partilhas de bens.
              </p>
            </div>
          </div>
        </section>

        {/* Novos Cards */}
        <section className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card sobre a Importância do Direito */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                A Importância do Direito
              </h3>
              <p className="text-lg">
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
              <h3 className="text-2xl font-bold mb-4">
                A Importância do Advogado
              </h3>
              <p className="text-lg">
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
            <h3 className="text-2xl font-bold mb-4">Criação do blog</h3>
            <p className="text-lg mb-6">
              A criação deste blog foi motivada pelo desejo de compartilhar meu
              conhecimento e experiência no campo do direito trabalhista.
              <br /> Acredito que o acesso a informações claras e precisas pode
              fazer uma grande diferença na vida das pessoas,
              <br /> ajudando-as a tomar decisões informadas e a resolver
              questões jurídicas de forma mais eficaz.
            </p>
            <Link href="/posts">
              <span className="bg-red-950 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-800 transition duration-300 cursor-pointer">
                Veja os Posts
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
