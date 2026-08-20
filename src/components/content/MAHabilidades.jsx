"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const rows = [
  {
    escola: { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', from: 'from-yellow-400', to: 'to-orange-400', text: 'Reflexão crítica sobre o próprio desempenho' },
    profissional: { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', from: 'from-cyan-400', to: 'to-teal-400', text: 'Identificar pontos de melhoria e avaliar continuamente' },
  },
  {
    escola: { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', from: 'from-blue-400', to: 'to-indigo-400', text: 'Reconhecimento de pontos fortes e fracos' },
    profissional: { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', from: 'from-indigo-400', to: 'to-purple-400', text: 'Saber no que se destaca e buscar capacitação' },
  },
  {
    escola: { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', from: 'from-purple-400', to: 'to-pink-400', text: 'Comprometimento com metas e evolução pessoal' },
    profissional: { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z', from: 'from-emerald-400', to: 'to-green-400', text: 'Profissionais comprometidos são valorizados, pois demonstram responsabilidade com seu próprio desenvolvimento' },
  },
  {
    escola: { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', from: 'from-green-400', to: 'to-emerald-400', text: 'Desenvolvimento da autonomia e protagonismo' },
    profissional: { icon: 'M13 10V3L4 14h7v7l9-11h-7z', from: 'from-teal-400', to: 'to-cyan-400', text: 'A autonomia é cada vez mais valorizada em equipes ágeis e ambientes que exigem iniciativa e autogestão' },
  },
];

const MAHabilidades = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('habilidades-autoavaliacao');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="habilidades-autoavaliacao" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      {/* Título */}
      <div className="text-center">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold leading-tight`}>
          <span className="text-slate-600 dark:text-slate-300">Habilidades Desenvolvidas na </span>
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Autoavaliação</span>
          <span className="text-slate-600 dark:text-slate-300"> e Relação com a </span>
          <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Vida Profissional</span>
        </h2>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-tl-xl">
                <span className={`${titleFont.className} text-lg font-bold`}>Autoavaliação</span>
              </th>
              <th className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-4 rounded-tr-xl">
                <span className={`${titleFont.className} text-lg font-bold`}>Vida Profissional</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ escola, profissional }, i) => (
              <tr key={i}>
                {[escola, profissional].map((cell, j) => (
                  <td key={j} className="p-3 align-top">
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 h-full">
                      <div className="flex items-start gap-4">
                        <div className={`w-11 h-11 bg-gradient-to-br ${cell.from} ${cell.to} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cell.icon} />
                          </svg>
                        </div>
                        <p className={`font-semibold text-sm leading-relaxed ${j === 0 ? 'text-blue-700 dark:text-blue-300' : 'text-teal-700 dark:text-teal-300'}`}>
                          {cell.text}
                        </p>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MAHabilidades;
