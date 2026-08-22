"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import { titleFont } from "@/lib/fonts";

const steps = [
  {
    num: "1",
    from: "from-green-500", to: "to-blue-500",
    title: "Escolha um formato possível (e significativo)",
    bullets: [
      "Apresentação para outras turmas ou para as famílias.",
      "Mural com fotos, cartazes e textos feitos pelos estudantes.",
      "Sarau, painel de ideias, roda de perguntas.",
      "Gravação de vídeos com depoimentos ou simulações.",
    ],
    extra: 'Não existe uma "forma certa" — o ideal é escolher um formato que seja viável no seu contexto e que permita que a turma se reconheça no que está apresentando.',
  },
  {
    num: "2",
    from: "from-blue-500", to: "to-green-500",
    title: "Pense no público",
    text: [
      "É algo só para a turma? Para outras turmas? Para a comunidade escolar?",
      "Saber quem vai ver ajuda a planejar a linguagem, o espaço e os materiais. Uma exposição aberta, por exemplo, exige organização e avisos prévios. Já uma apresentação interna pode ser mais simples, mas igualmente potente.",
    ],
  },
  {
    num: "3",
    from: "from-green-500", to: "to-blue-500",
    title: "Envolva os estudantes no processo",
    text: [
      "Chame os estudantes para pensar junto! Eles podem escolher o que será apresentado, preparar os materiais, cuidar da organização do espaço, montar o convite… Isso ajuda a reforçar o sentimento de autoria e também faz parte da aprendizagem.",
    ],
  },
  {
    num: "4",
    from: "from-blue-500", to: "to-green-500",
    title: "Relembre os objetivos do projeto",
    bullets: [
      "O que queríamos ter descoberto ou aprendido?",
      "O que conseguimos alcançar?",
      "O que ainda ficou em aberto?",
      "Como esse projeto impactou nossa forma de pensar ou agir?",
    ],
    pre: "É interessante retomar, junto com a turma, os objetivos definidos lá no começo. Algumas perguntas ajudam nesse fechamento:",
  },
];

const CulmComo = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed("culminancia-como");
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="culminancia-como" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      <div className="text-center">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Como organizar?
        </h2>
      </div>

      <div className="space-y-6">
        {steps.map(({ num, from, to, title, bullets, text, extra, pre }) => (
          <div key={num} className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 bg-gradient-to-br ${from} ${to} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                {num}
              </div>
              <h3 className={`${titleFont.className} text-xl font-bold text-slate-800 dark:text-white`}>
                {title}
              </h3>
            </div>

            {pre && <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{pre}</p>}

            {text?.map((t, i) => (
              <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed">{t}</p>
            ))}

            {bullets && (
              <ul className="space-y-2 pl-4">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {extra && <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-green-400 pl-4">{extra}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulmComo;
