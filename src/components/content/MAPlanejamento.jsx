"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const cards = [
  {
    num: 1,
    from: 'from-blue-500', to: 'to-indigo-500',
    label: 'Exposição dos conteúdos',
    text: 'Deixar claro para a turma o que será avaliado.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    iconBg: 'bg-blue-100 dark:bg-blue-900/50',
    iconColor: 'text-blue-600 dark:text-blue-400',
    titleColor: 'text-blue-700 dark:text-blue-400',
  },
  {
    num: 2,
    from: 'from-green-500', to: 'to-emerald-500',
    label: 'Definição dos critérios',
    text: 'Os itens avaliados podem ser decididos em conjunto (turma + professor).',
    icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    iconColor: 'text-green-600 dark:text-green-400',
    titleColor: 'text-green-700 dark:text-green-400',
  },
  {
    num: 3,
    from: 'from-violet-500', to: 'to-pink-500',
    label: 'Dupla reflexão',
    text: 'Primeiro, aluno preenche sua avaliação; depois, professor o avalia segundo os mesmos critérios.',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    iconBg: 'bg-violet-100 dark:bg-violet-900/50',
    iconColor: 'text-violet-600 dark:text-violet-400',
    titleColor: 'text-violet-700 dark:text-violet-400',
  },
  {
    num: 4,
    from: 'from-orange-500', to: 'to-red-500',
    label: 'Plano de ação',
    text: 'Planejamento dos próximos passos para que o aluno avance.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    iconBg: 'bg-orange-100 dark:bg-orange-900/50',
    iconColor: 'text-orange-600 dark:text-orange-400',
    titleColor: 'text-orange-700 dark:text-orange-400',
  },
];

const MAPlanejamento = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('planejamento-autoavaliacao');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="planejamento-autoavaliacao" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      {/* Título */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full" />
          <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
            Planejando uma autoavaliação significativa
          </h2>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-slate-500 rounded-full" />
        </div>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Os cards abaixo resumem <strong>quatro elementos</strong> que ajudam a tornar a autoavaliação mais estruturada:
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map(({ num, from, to, label, text, icon, iconBg, iconColor, titleColor }) => (
          <div
            key={num}
            className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6 space-y-4 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${from} ${to}`} />
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${from} ${to} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                {num}
              </div>
              <h3 className={`${titleFont.className} font-bold text-sm uppercase tracking-wide ${titleColor}`}>
                {label}
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <svg className={`w-4 h-4 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                </svg>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MAPlanejamento;
