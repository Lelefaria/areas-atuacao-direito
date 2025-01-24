import React from "react";

export default function DireitoDoTrabalho() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Direito do Trabalho
      </h1>
      <article className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          História e Evolução do Direito do Trabalho
        </h2>
        <p className="text-lg leading-7 mb-4">
          O Direito do Trabalho tem suas raízes no período pós-Revolução
          Industrial, quando as condições de trabalho eram precárias, com
          jornadas extenuantes, baixos salários e ausência de direitos. A luta
          por melhores condições deu origem a movimentos sindicais e,
          posteriormente, à legislação trabalhista.
        </p>
        <p className="text-lg leading-7 mb-4">
          No Brasil, o marco principal foi a criação da{" "}
          <strong>Consolidação das Leis do Trabalho (CLT)</strong>, em 1943,
          pelo então presidente Getúlio Vargas. A CLT unificou e regulamentou as
          leis trabalhistas existentes, estabelecendo um conjunto de normas que
          permanece como base do Direito do Trabalho até hoje, embora com
          adaptações e reformas ao longo do tempo.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Princípios do Direito do Trabalho
        </h2>
        <p className="text-lg leading-7 mb-4">
          O Direito do Trabalho é guiado por uma série de princípios que
          garantem a sua aplicação justa e equilibrada. Entre os mais
          relevantes, destacam-se:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Princípio da Proteção:</strong> Visa proteger o trabalhador,
            reconhecido como a parte mais vulnerável na relação de emprego.
          </li>
          <li>
            <strong>Princípio da Continuidade da Relação de Emprego:</strong>{" "}
            Busca preservar a estabilidade do vínculo empregatício,
            desestimulando demissões arbitrárias.
          </li>
          <li>
            <strong>Princípio da Irrenunciabilidade de Direitos:</strong>{" "}
            Garante que os direitos trabalhistas não podem ser renunciados ou
            negociados em prejuízo do trabalhador.
          </li>
          <li>
            <strong>Princípio da Primazia da Realidade:</strong> Prevalece o que
            ocorre na prática sobre o que está formalizado em documentos, caso
            haja divergências.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Direitos dos Trabalhadores
        </h2>
        <p className="text-lg leading-7 mb-4">
          O Direito do Trabalho estabelece um conjunto de direitos para
          assegurar condições justas e dignas no ambiente laboral. Entre os
          principais direitos, estão:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            Jornada de Trabalho: Limitação da jornada a 8 horas diárias e 44
            horas semanais, com pagamento de horas extras.
          </li>
          <li>
            Férias Remuneradas: Direito a um período anual de descanso, com
            acréscimo de 1/3 no salário.
          </li>
          <li>
            13º Salário: Pagamento adicional proporcional ao tempo trabalhado no
            ano.
          </li>
          <li>
            FGTS (Fundo de Garantia do Tempo de Serviço): Depósito mensal feito
            pelo empregador em conta vinculada ao trabalhador.
          </li>
          <li>
            Aviso Prévio: Período de notificação em caso de demissão, para que o
            trabalhador possa se reorganizar.
          </li>
          <li>
            Licença-maternidade e paternidade: Garantia de afastamento
            remunerado por motivo de nascimento de filhos.
          </li>
          <li>
            Seguro-Desemprego: Benefício concedido temporariamente ao
            trabalhador demitido sem justa causa.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Reformas Trabalhistas no Brasil
        </h2>
        <p className="text-lg leading-7 mb-4">
          Nos últimos anos, o Brasil passou por mudanças significativas no
          Direito do Trabalho. A <strong>Reforma Trabalhista de 2017</strong>,
          por exemplo, alterou diversas disposições da CLT, incluindo:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            Prevalência do Acordado sobre o Legislado: Permite que negociações
            coletivas prevaleçam sobre a legislação em determinados aspectos.
          </li>
          <li>
            Trabalho Intermitente: Regulação de contratos de trabalho com
            jornadas flexíveis.
          </li>
          <li>
            Terceirização: Ampliação das possibilidades de terceirização,
            inclusive para atividades-fim.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          Desafios Atuais do Direito do Trabalho
        </h2>
        <p className="text-lg leading-7 mb-4">
          O Direito do Trabalho enfrenta desafios constantes, principalmente com
          o avanço tecnológico e a transformação do mercado de trabalho. Alguns
          temas em destaque incluem:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <strong>Trabalho Remoto e Híbrido:</strong> Regulação das relações
            de trabalho em ambientes virtuais.
          </li>
          <li>
            <strong>Economia Gig:</strong> Proteção dos direitos de
            trabalhadores de plataformas digitais, como motoristas de aplicativo
            e entregadores.
          </li>
          <li>
            <strong>Automação:</strong> Impactos da substituição de mão de obra
            humana por tecnologias avançadas.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Conclusão</h2>
        <p className="text-lg leading-7">
          O Direito do Trabalho desempenha um papel vital na construção de uma
          sociedade mais justa e equilibrada. Ele busca proteger os direitos dos
          trabalhadores, promover a responsabilidade dos empregadores e
          adaptar-se às mudanças sociais e econômicas. Estar informado sobre
          essas regras e princípios é essencial para todos os envolvidos nas
          relações de trabalho.
        </p>
      </article>
    </div>
  );
}
