'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaPlus, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts';

const MARubrica = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('rubrica');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <motion.div
      ref={ref}
      id="rubrica"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Estado inicial — imagem + texto sobreposto */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/rubrica.jpg"
                alt="Lembrando da rubrica"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-blue-800/70 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl space-y-4">
                <h2 className={`${titleFont.className} text-2xl md:text-4xl font-bold`}>
                  Lembrando da rubrica
                </h2>
                <p className="text-lg leading-relaxed">
                  Antes de entrarmos na{' '}
                  <strong className="bg-white/90 text-blue-800 px-1.5 py-0.5 rounded mx-0.5">autoavaliação</strong>,
                  vale retomar uma ferramenta apresentada no módulo anterior: a rubrica.{' '}
                  <strong className="bg-white/90 text-blue-800 px-1.5 py-0.5 rounded mx-0.5">
                    A rubrica é uma tabela com critérios claros que descreve o que se espera
                  </strong>{' '}
                  em diferentes níveis de desempenho. Quando usada com os estudantes, ela{' '}
                  <strong className="bg-white/90 text-blue-800 px-1.5 py-0.5 rounded mx-0.5">
                    torna mais visível o que está sendo avaliado
                  </strong>{' '}
                  e ajuda cada um a compreender com mais clareza onde está e o que ainda pode desenvolver.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Estado expandido — fundo azul escuro */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-blue-900/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl space-y-4 text-base md:text-lg font-medium">
              <p className="font-bold">
                Quando falamos de{' '}
                <strong className="bg-white text-blue-800 px-1.5 py-0.5 rounded mx-0.5">avaliação formativa e reflexiva</strong>,
                a rubrica pode ser uma ferramenta muito útil.
              </p>
              <ul className="list-disc list-inside space-y-3 text-left">
                <li>
                  <strong className="bg-white text-blue-800 px-1.5 py-0.5 rounded mx-0.5">Para o(a) professor(a)</strong>:{' '}
                  a rubrica funciona como um guia para observar o que os alunos já conseguem fazer e o que ainda estão desenvolvendo.{' '}
                  <strong className="bg-white text-blue-800 px-1.5 py-0.5 rounded mx-0.5">Ela ajuda a acompanhar o progresso</strong>{' '}
                  sem depender apenas de notas ou provas.
                </li>
                <li>
                  <strong className="bg-white text-blue-800 px-1.5 py-0.5 rounded mx-0.5">Para os estudantes</strong>:{' '}
                  a rubrica funciona como um mapa: mostra onde estão no processo de aprendizagem e o que ainda precisam desenvolver. Isso{' '}
                  <strong className="bg-white text-blue-800 px-1.5 py-0.5 rounded mx-0.5">
                    facilita na hora de refletirem sobre o próprio desempenho
                  </strong>{' '}
                  e pensarem em como avançar.
                </li>
              </ul>
              <p className="font-bold pt-2">
                Isso é especialmente importante em{' '}
                <strong className="bg-white text-blue-800 px-1.5 py-0.5 rounded mx-0.5">momentos de autoavaliação</strong>{' '}
                ou quando os alunos avaliam colegas, temas que vamos ver a seguir.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white text-blue-600 hover:bg-blue-100 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  );
};

export default MARubrica;
