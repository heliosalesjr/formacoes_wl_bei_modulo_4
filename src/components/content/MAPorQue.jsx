"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const questions = [
  { label: 'O que eu aprendi?', from: 'from-indigo-500', to: 'to-blue-500' },
  { label: 'Em que momentos me esforcei mais?', from: 'from-blue-500', to: 'to-cyan-500' },
  { label: 'Onde eu poderia ter participado melhor?', from: 'from-cyan-500', to: 'to-teal-500' },
  { label: 'Como foi meu jeito de lidar com as tarefas?', from: 'from-teal-500', to: 'to-indigo-500' },
];

const MAPorQue = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('ma-porque');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div ref={ref} id="ma-porque" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-10 relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-100/30 dark:from-indigo-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/20 dark:from-blue-900/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Título */}
      <div className="text-center space-y-4 relative">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          O que é e por que fazer autoavaliação?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
          A autoavaliação é uma forma de o estudante <strong>pensar sobre como participou do projeto</strong>, olhar para o próprio envolvimento e reconhecer o que foi feito, o que ainda pode melhorar e como se organizou ao longo do processo.
        </p>
      </div>

      {/* Perguntas reflexivas */}
      <div className="space-y-6 relative">
        <div className="flex items-center gap-3">
          <div className="w-1 h-10 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full" />
          <h3 className={`${titleFont.className} text-2xl font-bold text-slate-700 dark:text-white`}>
            Algumas perguntas podem ajudar nessa reflexão:
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {questions.map(({ label, from, to }) => (
            <div
              key={label}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${from} ${to} rounded-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>
                <p className="text-slate-700 dark:text-slate-200 font-medium text-lg leading-relaxed">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MAPorQue;
