"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const MARelevanciaProfissional = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ma-relevancia-profissional');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div
      ref={ref}
      id="ma-relevancia-profissional"
      className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Text — 2/3 */}
        <div className="md:w-2/3 p-8 space-y-5">
          <div className="flex items-center gap-4">
            <div className="w-1 h-14 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full flex-shrink-0" />
            <h3 className={`${titleFont.className} text-xl md:text-2xl font-bold text-indigo-800 dark:text-indigo-300`}>
              Relevância para a vida profissional
            </h3>
          </div>
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            A <strong>autoavaliação</strong>, além de ser uma ferramenta importante durante a vida escolar, tem um papel ainda mais relevante quando pensamos no futuro <strong>profissional</strong> dos estudantes. No <strong>ambiente de trabalho</strong>, é comum que as pessoas precisem <strong>revisar suas próprias entregas</strong>, identificar <strong>pontos de melhoria</strong> e buscar formas de se <strong>desenvolver</strong> sem depender exclusivamente do olhar de um gestor. Por isso, ao propor momentos de <strong>reflexão</strong> em sala de aula, o professor contribui para a formação de um <strong>hábito</strong> que será essencial ao longo da vida.
          </p>
        </div>

        {/* Image — 1/3, flush with right/top/bottom edges */}
        <div className="group md:w-1/3 relative min-h-[240px] md:min-h-full self-stretch overflow-hidden">
          <Image
            src="/time.jpg"
            alt="Equipe profissional colaborando"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/20 group-hover:to-blue-500/20 transition-colors duration-500" />
        </div>
      </div>
    </div>
  );
};

export default MARelevanciaProfissional;
