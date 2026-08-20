"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const MAReflex = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ma-reflex');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const questions = [
    'Como o estudante pensou?',
    'Que caminhos ele seguiu?',
    'O que ele usou do que foi estudado para resolver uma situação?',
    'O que ele conseguiu mudar em suas atitudes ou forma de pensar?',
  ];

  return (
    <div ref={ref} id="ma-reflex" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      {/* Título */}
      <div className="text-center space-y-4">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          O que significa "avaliar de forma reflexiva"?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Avaliar de forma reflexiva é sair da lógica do "acertou ou errou" e se perguntar:
        </p>
      </div>

      {/* Perguntas */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6 space-y-3">
        {questions.map((q) => (
          <div key={q} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5 flex-shrink-0" />
            <p className="text-slate-700 dark:text-slate-200 text-lg">{q}</p>
          </div>
        ))}
      </div>

      {/* Como acontece */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
          Esse tipo de avaliação <strong>exige observação, escuta e registro.</strong> Ela não acontece só nas apresentações finais. Pelo contrário, se constrói no cotidiano da sala, a partir da <strong>observação e do registro</strong> de situações comuns, mas cheias de significado.
        </p>
      </div>

      {/* Envolvimento dos estudantes */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-green-200 dark:border-slate-700 p-6 space-y-4">
        <h3 className={`${titleFont.className} text-xl font-bold text-green-700 dark:text-green-400`}>
          Envolvimento dos estudantes no processo
        </h3>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Faz sentido, nesse momento, envolver os próprios estudantes na análise do que viveram. A <strong>autoavaliação</strong> e a <strong>avaliação entre pares</strong> ajudam a dar forma a esse processo. Elas permitem que cada um pense sobre o que aprendeu, como participou e o que poderia ter feito de outra forma.
        </p>
        <div className="bg-white dark:bg-slate-900/60 rounded-xl p-5 shadow border border-green-100 dark:border-slate-700">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Com isso, a avaliação passa a incluir <strong>diferentes pontos de vista</strong>, o que contribui para uma compreensão mais completa do percurso realizado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MAReflex;
