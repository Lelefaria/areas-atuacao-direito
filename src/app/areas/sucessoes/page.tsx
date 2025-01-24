import React from "react";

export default function Sucessoes() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sucessões</h1>
      <article className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          O que é Direito das Sucessões?
        </h2>
        <p className="text-lg leading-7 mb-4">
          O Direito das Sucessões é o ramo do Direito Civil que regula a
          transmissão de bens, direitos e obrigações de uma pessoa após o seu
          falecimento. Ele estabelece as regras para a transferência do
          patrimônio do falecido, seja por testamento ou por herança legítima,
          garantindo a ordem e a segurança jurídica nesse processo.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Principais Aspectos do Direito das Sucessões
        </h2>
        <p className="text-lg leading-7 mb-4">
          O Direito das Sucessões é baseado em alguns pilares fundamentais.
          Entre eles, destacam-se:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Herança:</strong> Conjunto de bens, direitos e obrigações
            deixados pelo falecido.
          </li>
          <li>
            <strong>Testamento:</strong> Documento no qual a pessoa declara sua
            vontade sobre a distribuição de seus bens após a morte.
          </li>
          <li>
            <strong>Inventário:</strong> Processo judicial ou extrajudicial para
            apurar os bens do falecido e formalizar a partilha entre os
            herdeiros.
          </li>
          <li>
            <strong>Herdeiros:</strong> Pessoas que possuem direito à herança,
            seja por vínculo familiar ou por disposição testamentária.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Modalidades de Sucessão</h2>
        <p className="text-lg leading-7 mb-4">
          A sucessão pode ocorrer de duas formas principais:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Sucessão Legítima:</strong> Quando a herança é distribuída
            conforme as regras previstas na lei, priorizando cônjuges,
            descendentes e ascendentes.
          </li>
          <li>
            <strong>Sucessão Testamentária:</strong> Quando o falecido deixa um
            testamento válido, especificando como deseja que seus bens sejam
            distribuídos.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Importância do Inventário
        </h2>
        <p className="text-lg leading-7 mb-4">
          O inventário é um processo essencial para formalizar a transferência
          dos bens deixados pelo falecido. Ele pode ser realizado de forma:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Judicial:</strong> Obrigatório em casos de conflitos entre
            os herdeiros ou quando existem menores ou incapazes envolvidos.
          </li>
          <li>
            <strong>Extrajudicial:</strong> Feito em cartório, desde que haja
            consenso entre os herdeiros e inexistam menores ou incapazes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Desafios no Direito das Sucessões
        </h2>
        <p className="text-lg leading-7 mb-4">
          Alguns dos principais desafios nessa área incluem:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Conflitos entre herdeiros:</strong> Desentendimentos sobre a
            divisão de bens são comuns.
          </li>
          <li>
            <strong>Testamentos mal elaborados:</strong> Documentos com falhas
            podem gerar disputas judiciais.
          </li>
          <li>
            <strong>Planejamento sucessório:</strong> Muitas pessoas não
            planejam adequadamente a transmissão de seus bens.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Planejamento Sucessório</h2>
        <p className="text-lg leading-7 mb-4">
          O planejamento sucessório é uma estratégia que visa organizar a
          transmissão de bens de forma antecipada, evitando conflitos e
          reduzindo custos. Ele pode incluir a elaboração de testamentos,
          doações em vida e a criação de holdings familiares.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Conclusão</h2>
        <p className="text-lg leading-7">
          O Direito das Sucessões desempenha um papel crucial na sociedade,
          garantindo que a transmissão de bens seja realizada de maneira justa e
          organizada. Além de resolver questões práticas relacionadas ao
          patrimônio, essa área do direito protege os direitos dos herdeiros e
          assegura a segurança jurídica para todas as partes envolvidas.
        </p>
      </article>
    </div>
  );
}
