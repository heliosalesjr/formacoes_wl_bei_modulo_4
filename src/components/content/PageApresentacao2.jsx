"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';

const PageApresentacao2 = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ao-final');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ao-final" className="scroll-mt-20 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">

        {/* Imagem - 1/3 da largura */}
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/check2.png"
            alt="Objetivos do módulo"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className={`${titleFont.className} text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
              Ao final deste módulo, você será capaz de:
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Compreender o <strong>papel da avaliação</strong> na <strong>Aprendizagem Baseada em Projetos (ABP)</strong> como parte do <strong>processo de aprendizagem</strong>, e não apenas como resultado final;
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Planejar e aplicar estratégias de <strong>autoavaliação</strong> e <strong>avaliação entre pares</strong> que promovam <strong>reflexão</strong>, <strong>diálogo</strong> e <strong>protagonismo estudantil</strong>;
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Organizar a <strong>culminância do projeto</strong> de modo coerente com as <strong>aprendizagens desenvolvidas</strong>, valorizando o <strong>percurso</strong> e as <strong>produções dos estudantes</strong>;
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Utilizar <strong>registros</strong> e <strong>devolutivas</strong> como ferramentas de <strong>acompanhamento</strong>, <strong>reflexão</strong> e <strong>comunicação dos resultados</strong> do projeto.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PageApresentacao2;
