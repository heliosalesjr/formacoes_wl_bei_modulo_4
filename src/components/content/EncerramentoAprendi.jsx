'use client';
import { useState, useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';
import confetti from 'canvas-confetti';

const checklistItems = [
  'Aprendi que avaliar um projeto é olhar para o caminho feito, não só para o resultado.',
  'Percebi que a autoavaliação e o feedback entre colegas ajudam os estudantes a reconhecer o que aprenderam e como participaram.',
  'Compreendi que a culminância é um fechamento com sentido: mostrar o percurso, compartilhar descobertas e dar visibilidade ao que foi feito.',
  'Entendi que registrar o processo (falas, fotos, produções) ajuda a lembrar da caminhada e do que ela ensinou.',
];

const EncerramentoAprendi = () => {
  const [checkedItems, setCheckedItems] = useState(Array(checklistItems.length).fill(false));
  const allChecked = checkedItems.every(Boolean);

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('encerramento-aprendi');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  useEffect(() => {
    if (allChecked) {
      confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
    }
  }, [allChecked]);

  const toggleCheckbox = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  return (
    <div ref={ref} id="encerramento-aprendi" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl p-8 md:p-12 space-y-6">

      <h2 className={`${titleFont.className} text-xl md:text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-wide`}>
        Neste módulo eu:
      </h2>

      <ul className="space-y-4">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <button
              onClick={() => toggleCheckbox(index)}
              aria-checked={checkedItems[index]}
              role="checkbox"
              className={`w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center border-2 rounded transition-colors duration-300 ${
                checkedItems[index]
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800'
              }`}
            >
              {checkedItems[index] && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className={`text-base leading-relaxed transition-colors duration-300 ${checkedItems[index] ? 'text-slate-400 dark:text-slate-500 line-through' : 'text-slate-700 dark:text-slate-300'}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {allChecked && (
        <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 rounded-xl p-5 text-center">
          <p className="text-green-700 dark:text-green-400 font-semibold text-lg">
            🎉 Parabéns! Você completou o módulo final!
          </p>
        </div>
      )}
    </div>
  );
};

export default EncerramentoAprendi;
