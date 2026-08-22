"use client";
import { useEffect, useRef, useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import Image from 'next/image';
import { titleFont } from '@/lib/fonts';

const tiposRegistro = [
  'anotações simples',
  'fotos das atividades',
  'fragmentos de falas dos alunos',
  'produções escritas ou registros em áudio e vídeo',
];

const RegistroAvaliacao = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed('registros-avaliacao');
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  if (isModalOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
        <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
            aria-label="Fechar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full h-[85vh]">
            <Image
              src="/registro.png"
              alt="Exemplo de Padlet expandido"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
            <p className="text-center font-medium">Exemplo de Padlet</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} id="registros-avaliacao" className="scroll-mt-20 rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-2xl space-y-8">

      {/* Título */}
      <div className="text-center">
        <h2 className={`${titleFont.className} text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Registros e avaliação do percurso
        </h2>
      </div>

      {/* Parágrafo 1 + lista */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Ao longo do desenvolvimento do projeto, é crucial que o(a) professor(a) mantenha <strong>registros do percurso vivido pelos estudantes</strong> — não apenas dos resultados finais, mas especialmente dos processos, dos avanços e dos desafios enfrentados ao longo do caminho. Esses registros não precisam ser formais ou burocráticos: podem ser feitos por meio de:
        </p>
        <div className="bg-blue-50 dark:bg-blue-950/40 rounded-xl p-5 border border-blue-100 dark:border-blue-800">
          <div className="grid md:grid-cols-2 gap-3">
            {tiposRegistro.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parágrafo 2 */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-green-200 dark:border-slate-700 p-6">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Esse acompanhamento constante permite observar como os alunos estão se envolvendo, quais aprendizagens estão se consolidando, e como se transformam suas posturas, atitudes e níveis de engajamento. Além disso, os registros funcionam como <strong>base para a avaliação final do projeto</strong> e ajudam o(a) professor(a) a planejar com mais intencionalidade as próximas propostas pedagógicas.
        </p>
      </div>

      {/* Parágrafo 3 */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 p-6">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Sempre que possível, vale <strong>convidar os próprios alunos a participarem dessa construção</strong>, seja escrevendo pequenas reflexões ao final das aulas, desenhando algo que represente a vivência do dia ou gravando vídeos em que compartilham o que sentiram e aprenderam.
        </p>
      </div>

      {/* Imagem do Padlet — clicável */}
      <div
        className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 cursor-pointer hover:shadow-xl transition-shadow duration-300 group h-80"
        onClick={() => setIsModalOpen(true)}
        role="button"
        aria-label="Ampliar exemplo de Padlet"
      >
        <Image
          src="/registro.png"
          alt="Exemplo de Padlet"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-green-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white font-semibold text-lg text-center px-4">Clique para ampliar o exemplo de padlet</p>
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
      </div>

      {/* Parágrafo Padlet */}
      <div className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 rounded-xl border border-violet-200 dark:border-slate-700 p-6">
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Uma forma prática e interessante de organizar esses registros é usar o <strong>Padlet</strong>, que costuma ser nossa principal sugestão. Ele funciona como um <strong>mural virtual</strong> onde alunos e professores podem postar textos, imagens, vídeos e reflexões ao longo do projeto. Isso torna o acompanhamento mais visual, colaborativo e acessível, e ainda cria uma <strong>linha do tempo rica</strong> das experiências vividas pela turma.
        </p>
      </div>
    </div>
  );
};

export default RegistroAvaliacao;
