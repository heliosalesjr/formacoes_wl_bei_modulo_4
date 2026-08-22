"use client";

import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { titleFont } from "@/lib/fonts";

const possibilidades = [
  {
    value: "portfolio",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    from: "from-blue-500", to: "to-indigo-500",
    label: "Portfólio",
    titleColor: "text-blue-700 dark:text-blue-400",
    content: [
      "Criar um portfólio com os registros do projeto — físico ou digital.",
      "Um portfólio é uma coleção organizada de trabalhos que demonstra o processo e os resultados alcançados ao longo do projeto. Pode incluir fotografias, documentos, relatórios, desenhos, gráficos e outras evidências do desenvolvimento.",
      "Se físico, pode ser apresentado em pastas, caixas ou painéis. Se digital, pode ser criado em plataformas como Google Sites, Wix ou Canva, permitindo maior alcance e facilidade de compartilhamento.",
      "O portfólio não apenas registra o resultado final, mas documenta toda a jornada de aprendizagem, mostrando desafios enfrentados, soluções encontradas e evolução do pensamento crítico dos estudantes.",
    ],
  },
  {
    value: "evento",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    from: "from-emerald-500", to: "to-teal-500",
    label: "Evento",
    titleColor: "text-emerald-700 dark:text-emerald-400",
    content: [
      "Celebração da conclusão em um evento que apresente o projeto, podendo incluir depoimentos orais, imagens e vídeos para a comunidade escolar.",
      "Um evento de culminância pode ser organizado como uma apresentação formal, um seminário, uma mostra interativa ou uma festa comemorativa. Pode incluir depoimentos, exibição de vídeos, apresentações visuais e até dramatizações.",
      "A presença da comunidade escolar amplia o impacto e valoriza o trabalho realizado, podendo incluir espaços interativos e experiências práticas relacionadas ao projeto.",
    ],
  },
  {
    value: "mostra-videos",
    icon: "M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    from: "from-violet-500", to: "to-purple-500",
    label: "Mostra de Vídeos ou Produções Digitais",
    titleColor: "text-violet-700 dark:text-violet-400",
    content: [
      "Criação de uma mostra com registros em imagens ou produções audiovisuais do desenvolvimento do projeto.",
      "Uma mostra pode incluir documentários curtos, entrevistas, time-lapses, animações, podcasts e materiais para redes sociais.",
      "Esses materiais podem ser exibidos presencialmente, em plataformas online ou em blogs. Desenvolvem habilidades de comunicação, edição e pensamento crítico.",
    ],
  },
  {
    value: "redes-sociais",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    from: "from-orange-500", to: "to-amber-500",
    label: "Sites e Redes Sociais",
    titleColor: "text-orange-700 dark:text-orange-400",
    content: [
      "A divulgação em sites e redes sociais amplia o alcance da culminância, com posts, vídeos e notícias no site institucional.",
      "Cada plataforma tem sua força: redes sociais para engajamento, sites para credibilidade. Conteúdos com fotos, vídeos curtos e depoimentos são essenciais.",
      "Essa estratégia fortalece a conexão entre escola, comunidade e a iniciativa do projeto.",
    ],
  },
  {
    value: "apresentacao-oral",
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    from: "from-rose-500", to: "to-pink-500",
    label: "Apresentação Oral ou Dramatizada",
    titleColor: "text-rose-700 dark:text-rose-400",
    content: [
      "Pode envolver teatro, roda de conversa, contação de histórias, entrevistas simuladas e outros formatos que colocam os estudantes como protagonistas.",
      "Desenvolve comunicação, confiança, criatividade e colaboração.",
      "Cria experiências memoráveis que conectam emocionalmente o público ao conhecimento construído.",
    ],
  },
  {
    value: "ambientes-virtuais",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    from: "from-cyan-500", to: "to-sky-500",
    label: "Publicação em Ambientes Virtuais",
    titleColor: "text-cyan-700 dark:text-cyan-400",
    content: [
      "Como Padlet, blog da turma ou redes sociais da escola, com registros escritos, visuais ou sonoros.",
      "Esses ambientes permitem documentação colaborativa e interativa, com espaço para fotos, vídeos, textos e links.",
    ],
  },
  {
    value: "apresentacoes-sala",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    from: "from-indigo-500", to: "to-blue-500",
    label: "Apresentações na Própria Sala",
    titleColor: "text-indigo-700 dark:text-indigo-400",
    content: [
      "Os grupos apresentam suas produções para os colegas, explicando escolhas e descobertas.",
      "Desenvolve escuta ativa, reflexão, comunicação e respeito entre pares.",
    ],
  },
  {
    value: "mural-coletivo",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    from: "from-amber-500", to: "to-yellow-500",
    label: "Mural Coletivo",
    titleColor: "text-amber-700 dark:text-amber-400",
    content: [
      "Com cartazes, fotos, frases, produções textuais e gráficos, o mural conta a trajetória do projeto.",
      "Torna o processo visível para toda a escola e funciona como registro permanente.",
    ],
  },
  {
    value: "producao-final",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    from: "from-green-500", to: "to-emerald-500",
    label: "Produção Final Individual ou em Grupo",
    titleColor: "text-green-700 dark:text-green-400",
    content: [
      "Pode ser texto, carta aberta, cartaz, vídeo, tirinha... O importante é representar a aprendizagem vivida.",
      "Permite expressão pessoal e consolida o conhecimento.",
    ],
  },
  {
    value: "roda-conversa",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    from: "from-teal-500", to: "to-green-500",
    label: "Roda de Conversa de Fechamento",
    titleColor: "text-teal-700 dark:text-teal-400",
    content: [
      "Uma roda simples já pode funcionar como culminância: os alunos compartilham o que foi marcante e o que aprenderam.",
      "Desenvolve empatia, escuta ativa e reflexão profunda.",
    ],
  },
];

export default function CulmPossibilidades2() {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed("culminancia-exemplos");
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="culminancia-exemplos" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      <div className="text-center space-y-3">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Possibilidades de Culminância
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          A culminância é a etapa final de um projeto. Veja abaixo algumas formas de trabalhar a apresentação de resultados:
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {possibilidades.map(({ value, icon, from, to, label, titleColor, content }) => (
          <AccordionItem key={value} value={value} className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden">
            <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
              <div className="flex items-center gap-4">
                <div className={`w-9 h-9 bg-gradient-to-br ${from} ${to} rounded-lg flex items-center justify-center shadow flex-shrink-0`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon} />
                  </svg>
                </div>
                <span className={`${titleFont.className} font-bold text-base md:text-lg ${titleColor}`}>
                  {label}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 space-y-3">
              {content.map((p, i) => (
                <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed">{p}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
