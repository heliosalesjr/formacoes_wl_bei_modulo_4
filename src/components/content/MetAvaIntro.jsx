"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const MetAvaIntro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ma-intro');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ma-intro" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-10">

      {/* Título */}
      <div className="text-center space-y-4">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Autoavaliação e Avaliação entre Pares como processos reflexivos
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Nos módulos anteriores, já discutimos os <strong>três tipos principais de avaliação</strong>: <strong>diagnóstica, formativa e somativa</strong>.
        </p>
      </div>

      {/* Retomando os tipos */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />
          <h3 className={`${titleFont.className} text-2xl font-bold text-slate-700 dark:text-white`}>
            Retomando os tipos de avaliação
          </h3>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed pl-4">
          Até aqui, vimos três tipos de avaliação que se complementam:
        </p>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="bg-blue-50 dark:bg-slate-800 rounded-xl p-6 shadow border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">D</div>
              <h4 className="font-bold text-blue-700 dark:text-blue-400">Diagnóstica</h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              acontece <strong>antes do início</strong> do projeto. Ajuda a identificar o que os estudantes já sabem, suas dúvidas, suas experiências com o tema.
            </p>
          </div>

          <div className="bg-green-50 dark:bg-slate-800 rounded-xl p-6 shadow border border-green-200 dark:border-green-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">F</div>
              <h4 className="font-bold text-green-700 dark:text-green-400">Formativa</h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              é realizada <strong>ao longo do projeto</strong>. Permite acompanhar o desenvolvimento dos estudantes e ajustar o percurso conforme necessário.
            </p>
          </div>

          <div className="bg-violet-50 dark:bg-slate-800 rounded-xl p-6 shadow border border-violet-200 dark:border-violet-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-violet-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">S</div>
              <h4 className="font-bold text-violet-700 dark:text-violet-400">Somativa</h4>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              é feita <strong>no fim</strong>, para analisar os resultados alcançados em relação aos objetivos propostos.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-blue-200 dark:border-slate-700 p-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Agora queremos olhar com mais calma para a <strong>avaliação reflexiva</strong>, que ajuda a entender como o processo foi vivido.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetAvaIntro;
